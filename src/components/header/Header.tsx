
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Logo from './Logo';
import TopBar from './TopBar';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;
  
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const handleMobileItemClick = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    toggleMobileMenu();
    setTimeout(() => {
      navigate(path);
      window.scrollTo(0, 0);
    }, 10);
  };

  return (
    <header
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
        toggleMobileMenu={toggleMobileMenu}
        handleMobileItemClick={handleMobileItemClick}
      />
    </header>
  );
}
