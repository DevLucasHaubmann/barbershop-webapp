import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  firstName: string;
}

export const AuthenticatedNavbar = ({ firstName }: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="relative flex justify-between items-center py-6 px-6 lg:px-12 xl:px-20 border-b border-[var(--color-border)] bg-[var(--color-input-bg)] shadow-sm z-50">
      <div className="font-extrabold text-xl tracking-widest uppercase text-[var(--color-text-dark)]">
        Barbershop
      </div>

      <div className="hidden md:flex gap-8 text-[12px] font-bold tracking-wide uppercase text-[var(--color-text-dark)] items-center">
        <span className="text-[var(--color-brown-light)] border-b-2 border-[var(--color-brown-dark)] pb-1 cursor-default">
          Home
        </span>
        <Link to="/appointments" className="hover:text-[var(--color-brown-light)] transition-colors border-b-2 border-transparent hover:border-[var(--color-brown-dark)] pb-1">
          My Appointments
        </Link>
        <Link to="/settings" className="hover:text-[var(--color-brown-light)] transition-colors border-b-2 border-transparent hover:border-[var(--color-brown-dark)] pb-1">
          Configurations
        </Link>
        
        <div className="w-9 h-9 rounded-full bg-[var(--color-brown-dark)] text-[var(--color-bg)] flex items-center justify-center ml-4 cursor-pointer shadow-sm hover:bg-[var(--color-text-dark)] transition-colors">
          {firstName.charAt(0)}
        </div>
      </div>

      <button 
        className="md:hidden text-[var(--color-text-dark)] hover:text-[var(--color-brown-dark)] transition-colors p-2 -mr-2"
        onClick={toggleMenu}
        aria-label="Toggle mobile menu"
      >
        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[var(--color-input-bg)] border-b border-[var(--color-border)] shadow-lg md:hidden flex flex-col py-6 px-6 space-y-6 text-[12px] font-bold tracking-wide uppercase text-[var(--color-text-dark)] z-40">
          <span className="text-[var(--color-brown-light)] border-l-4 border-[var(--color-brown-dark)] pl-3 cursor-default">
            Home
          </span>
          <Link 
            to="/appointments" 
            className="hover:text-[var(--color-brown-light)] transition-colors pl-4 border-l-4 border-transparent hover:border-[var(--color-brown-dark)]"
            onClick={closeMenu}
          >
            My Appointments
          </Link>
          <Link 
            to="/settings" 
            className="hover:text-[var(--color-brown-light)] transition-colors pl-4 border-l-4 border-transparent hover:border-[var(--color-brown-dark)]"
            onClick={closeMenu}
          >
            Configurations
          </Link>
          
          <div className="pt-6 border-t border-[var(--color-border)] flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[var(--color-brown-dark)] text-[var(--color-bg)] flex items-center justify-center shadow-sm text-sm">
              {firstName.charAt(0)}
            </div>
            <div>
              <p className="text-[10px] text-[var(--color-text-muted)] tracking-widest">Logged in as</p>
              <p className="text-sm">{firstName}</p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};