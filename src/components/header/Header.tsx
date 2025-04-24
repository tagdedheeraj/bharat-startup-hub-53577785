
import { useState, useEffect, useRef } from 'react';
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

  // Add click outside handler to close menus
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // If we're clicking inside navigation, don't close menus
      if (event.target instanceof Node && headerRef.current?.contains(event.target)) {
        return;
      }
      
      // Force close any open menus by removing the data-state="open" attribute
      const openTriggers = document.querySelectorAll('[data-state="open"]');
      openTriggers.forEach((trigger) => {
        if (trigger instanceof HTMLElement) {
          trigger.click(); // Simulate clicking the trigger to close it
        }
      });
    };
    
    // Attach the handler
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = ''; // Ensure scroll is enabled when component unmounts
    };
  }, []);

  const handleMobileItemClick = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
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
        toggleMobileMenu={toggleMobileMenu}
        handleMobileItemClick={handleMobileItemClick}
      />
    </header>
  );
}
