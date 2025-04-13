
import { User, UserRole } from "@/contexts/auth/AuthTypes";

// Claves para el almacenamiento local
const USERS_KEY = 'bharat_startup_users';
const CURRENT_USER_KEY = 'bharat_startup_current_user';
const ADMIN_EMAIL = 'admin@bharatstartupsolution.com';
const ADMIN_PASSWORD = 'Bharat@123';

// Interfaz para el usuario almacenado
interface StoredUser {
  id: string;
  name: string;
  email: string;
  password: string; // En una aplicación real, nunca almacenaríamos contraseñas en texto plano
  role: UserRole;
  createdAt: string;
}

// Inicializar el almacenamiento si está vacío
const initializeStorage = (): void => {
  if (!localStorage.getItem(USERS_KEY)) {
    // Initialize with admin user
    const adminUser: StoredUser = {
      id: 'admin-001',
      name: 'Admin',
      email: ADMIN_EMAIL,
      password: ADMIN_PASSWORD,
      role: 'admin',
      createdAt: new Date().toISOString()
    };
    
    localStorage.setItem(USERS_KEY, JSON.stringify([adminUser]));
  } else {
    // Check if admin user exists, if not add it
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
    const adminExists = users.some((user: StoredUser) => user.email === ADMIN_EMAIL);
    
    if (!adminExists) {
      const adminUser: StoredUser = {
        id: 'admin-001',
        name: 'Admin',
        email: ADMIN_EMAIL,
        password: ADMIN_PASSWORD,
        role: 'admin',
        createdAt: new Date().toISOString()
      };
      
      users.push(adminUser);
      localStorage.setItem(USERS_KEY, JSON.stringify(users));
    }
  }
};

// Obtener todos los usuarios
const getUsers = (): StoredUser[] => {
  initializeStorage();
  return JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
};

// Guardar todos los usuarios
const saveUsers = (users: StoredUser[]): void => {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

// Generar un ID único
const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
};

// Registrar un nuevo usuario
export const register = async (
  name: string, 
  email: string, 
  password: string, 
  role: UserRole
): Promise<void> => {
  const users = getUsers();
  
  // Verificar si el correo ya está registrado
  if (users.some(user => user.email === email)) {
    throw new Error("Este correo electrónico ya está registrado");
  }
  
  // Crear nuevo usuario
  const newUser: StoredUser = {
    id: generateId(),
    name,
    email,
    password, // ADVERTENCIA: Nunca almacenar contraseñas en texto plano en una app real
    role,
    createdAt: new Date().toISOString()
  };
  
  // Guardar usuario
  users.push(newUser);
  saveUsers(users);
  
  // Iniciar sesión automáticamente
  const userWithoutPassword: User = {
    id: newUser.id,
    name: newUser.name,
    email: newUser.email,
    role: newUser.role
  };
  
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(userWithoutPassword));
};

// Iniciar sesión
export const login = async (
  email: string, 
  password: string, 
  role: UserRole
): Promise<void> => {
  const users = getUsers();
  
  // Special case for admin login
  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    const adminUser = users.find(u => u.email === ADMIN_EMAIL);
    
    if (adminUser) {
      const userWithoutPassword: User = {
        id: adminUser.id,
        name: adminUser.name,
        email: adminUser.email,
        role: 'admin'
      };
      
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(userWithoutPassword));
      return;
    }
  }
  
  // Regular user login
  const user = users.find(u => u.email === email && u.password === password);
  
  if (!user) {
    throw new Error("Correo electrónico o contraseña incorrectos");
  }
  
  // Verify role if specified
  if (role && user.role !== role && role !== 'admin') {
    throw new Error(`Esta cuenta no está registrada como ${role === 'startup' ? 'startup' : 'inversor'}`);
  }
  
  // Save user session (without password)
  const userWithoutPassword: User = {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role
  };
  
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(userWithoutPassword));
};

// Cerrar sesión
export const logout = async (): Promise<void> => {
  localStorage.removeItem(CURRENT_USER_KEY);
};

// Obtener usuario actual
export const getCurrentUser = (): User | null => {
  const userJson = localStorage.getItem(CURRENT_USER_KEY);
  return userJson ? JSON.parse(userJson) : null;
};

// Comprobar si hay un usuario autenticado
export const isAuthenticated = (): boolean => {
  return !!getCurrentUser();
};

