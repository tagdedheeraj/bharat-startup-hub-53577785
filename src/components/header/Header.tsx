
import { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Logo from './Logo';
import TopBar from './TopBar';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import MobileMenu from './MobileMenu';
import './styles.css';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;
  const headerRef = useRef<HTMLDivElement>(null);
  
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);
  
  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleMobileItemClick = (path: string) => {
    toggleMobileMenu();
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-lg shadow-lg'
          : 'bg-white'
      }`}
    >
      <TopBar />
      
      <nav className={`container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
        <div className="flex justify-between items-center">
          <Logo />
          
          <DesktopNav />
          
          <MobileNav 
            toggleMobileMenu={toggleMobileMenu} 
            mobileMenuOpen={mobileMenuOpen} 
          />
        </div>
      </nav>
      
      <MobileMenu 
        isOpen={mobileMenuOpen}
        currentPath={currentPath}
        handleMobileItemClick={handleMobileItemClick}
      />
    </header>
  );
}
