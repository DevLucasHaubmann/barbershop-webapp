import { Link } from 'react-router-dom';

export const Navbar = () => (
    <nav className="flex justify-between items-center py-6 px-6 lg:px-12 xl:px-20 border-b border-[var(--color-border)] bg-[var(--color-bg)]">
        <div className="font-extrabold text-xl tracking-widest uppercase text-[var(--color-text-dark)]">
            Barbershop
        </div>
        <div className="hidden md:flex gap-8 text-[12px] font-bold tracking-wide uppercase text-[var(--color-text-dark)]">
            <a id="link" href="#home" className="hover:text-[var(--color-brown-light)] transition-colors border-b-2 border-transparent hover:border-[var(--color-brown-dark)] pb-1">Home</a>
            <a id="link" href="#services" className="hover:text-[var(--color-brown-light)] transition-colors border-b-2 border-transparent hover:border-[var(--color-brown-dark)] pb-1">Services</a>
            <a id="link" href="#barbers" className="hover:text-[var(--color-brown-light)] transition-colors border-b-2 border-transparent hover:border-[var(--color-brown-dark)] pb-1">Barbers</a>
            <a id="link" href="#about" className="hover:text-[var(--color-brown-light)] transition-colors border-b-2 border-transparent hover:border-[var(--color-brown-dark)] pb-1">About</a>
        </div>
        <Link id="link" to="/auth/login" className="hidden md:block bg-[var(--color-brown-dark)] hover:bg-[var(--color-text-dark)] text-[var(--color-bg)] text-[12px] font-bold py-2.5 px-5 rounded-sm tracking-[0.1em] uppercase transition-all duration-300 shadow-md">
            Book Appointment
        </Link>
    </nav>
);