
import { User, UserRole } from "@/contexts/auth/AuthTypes";

// Claves para el almacenamiento local
const USERS_KEY = 'bharat_startup_users';
const CURRENT_USER_KEY = 'bharat_startup_current_user';

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
    localStorage.setItem(USERS_KEY, JSON.stringify([]));
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
  
  // Buscar usuario por email y contraseña
  const user = users.find(u => u.email === email && u.password === password);
  
  if (!user) {
    throw new Error("Correo electrónico o contraseña incorrectos");
  }
  
  // Verificar rol si se especifica
  if (role && user.role !== role) {
    throw new Error(`Esta cuenta no está registrada como ${role === 'startup' ? 'startup' : 'inversor'}`);
  }
  
  // Guardar sesión del usuario (sin la contraseña)
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

