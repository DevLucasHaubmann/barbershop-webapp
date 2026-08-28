import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { path: '/dashboard', label: 'Home' },
  { path: '/appointments', label: 'My Appointments' },
  { path: '/settings', label: 'Settings' },
];

interface NavbarProps {
  firstName: string;
  onLogout: () => void;
}

export const AuthenticatedNavbar = ({ firstName, onLogout }: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAvatarMenuOpen, setIsAvatarMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
    setIsAvatarMenuOpen(false); 
  };

  const closeMenus = () => {
    setIsMobileMenuOpen(false);
    setIsAvatarMenuOpen(false);
  };

  const handleLogoutClick = () => {
    closeMenus();
    onLogout();
  };

  const renderDesktopLinks = () => (
    <div className="hidden md:flex gap-8 text-[12px] font-bold tracking-wide uppercase text-[var(--color-text-dark)] items-center">
      {NAV_LINKS.map((link) => (
        <Link 
          key={link.path} 
          id="link-gray" 
          to={link.path} 
          className="hover:text-[var(--color-brown-light)] transition-colors border-b-2 border-transparent hover:border-[var(--color-brown-dark)] pb-1"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );

  const renderMobileLinks = () => (
    <>
      {NAV_LINKS.map((link) => (
        <Link 
          key={link.path}
          id="link-gray"
          to={link.path} 
          className="w-fit hover:text-[var(--color-brown-light)] transition-colors pl-4 border-l-4 border-transparent hover:border-[var(--color-brown-dark)]"
          onClick={closeMenus}
        >
          {link.label}
        </Link>
      ))}
    </>
  );

  return (
    <nav className="relative flex justify-between items-center py-6 px-6 lg:px-12 xl:px-20 border-b border-[var(--color-border)] bg-[var(--color-input-bg)] shadow-sm z-50">
      <div className="font-extrabold text-xl tracking-widest uppercase text-[var(--color-text-dark)]">
        Barbershop
      </div>

      <div className="flex items-center">
        {renderDesktopLinks()}
        
        <div className="relative ml-4 hidden md:block">
          <div 
            onClick={() => setIsAvatarMenuOpen((prev) => !prev)}
            className="w-9 h-9 rounded-full bg-[var(--color-brown-dark)] text-[var(--color-bg)] flex items-center justify-center cursor-pointer shadow-sm hover:bg-[var(--color-text-dark)] transition-colors"
          >
            {firstName.charAt(0)}
          </div>

          {isAvatarMenuOpen && (
            <div className="absolute right-0 mt-4 w-40 bg-[var(--color-input-bg)] border border-[var(--color-border)] shadow-md rounded-sm py-2 z-50 flex flex-col">
              <button 
                onClick={handleLogoutClick}
                className="text-left px-4 py-2 text-[12px] font-bold tracking-wide uppercase text-[var(--color-text-dark)] hover:bg-[var(--color-bg)] hover:text-[var(--color-brown-dark)] transition-colors w-full"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      <button 
        className="md:hidden text-[var(--color-text-dark)] hover:text-[var(--color-brown-dark)] transition-colors p-2 -mr-2"
        onClick={toggleMobileMenu}
        aria-label="Toggle mobile menu"
      >
        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[var(--color-input-bg)] border-b border-[var(--color-border)] shadow-lg md:hidden flex flex-col py-6 px-6 space-y-6 text-[12px] font-bold tracking-wide uppercase text-[var(--color-text-dark)] z-40">
          {renderMobileLinks()}
          
          <div className="pt-6 border-t border-[var(--color-border)] flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[var(--color-brown-dark)] text-[var(--color-bg)] flex items-center justify-center shadow-sm text-sm">
                {firstName.charAt(0)}
              </div>
              <div>
                <p className="text-[10px] text-[var(--color-text-muted)] tracking-widest">Logged in as</p>
                <p className="text-sm">{firstName}</p>
              </div>
            </div>
            
            <button 
              onClick={handleLogoutClick}
              className="text-left w-fit text-[12px] font-bold tracking-wide uppercase text-[var(--color-text-muted)] hover:text-[var(--color-brown-dark)] transition-colors border-b-2 border-transparent hover:border-[var(--color-brown-dark)] pb-0.5"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};