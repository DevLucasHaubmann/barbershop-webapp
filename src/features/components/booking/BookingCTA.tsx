import { Link } from 'react-router-dom';

export const BookingCTA = () => (
    <div className="w-full bg-[var(--color-brown-dark)] py-24 px-6 lg:px-12 xl:px-20 relative overflow-hidden font-sans border-b-[8px] border-[var(--color-border)]">
        <div className="absolute top-8 left-8 w-24 h-24 border-t border-l border-[var(--color-brown-light)] opacity-30"></div>
        <div className="absolute bottom-8 right-8 w-24 h-24 border-b border-r border-[var(--color-brown-light)] opacity-30"></div>
        <div className="max-w-3xl mx-auto text-center relative z-10 space-y-6">
            <span className="section-label text-[var(--color-border)]">Appointment CTA</span>
            
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tighter uppercase" style={{ color: 'var(--color-border)' }}>
                Ready for your next cut?
            </h2>

            <p className="text-[var(--color-border)] text-sm font-medium pb-4">
                Choose your barber, select a service, and reserve your chair in minutes.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link id="link-brown" to="/auth/login" className="bg-[var(--color-bg)] hover:bg-white text-[var(--color-text-dark)] text-sm font-bold py-4 px-8 rounded-sm tracking-[0.1em] uppercase transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[var(--color-brown-light)] shadow-lg text-center">
                    Book Appointment
                </Link>
                <a id="link-white" href="#services" className="bg-transparent border-2 border-[var(--color-border)] text-[var(--color-bg)] hover:bg-[var(--color-brown-light)] text-sm font-bold py-4 px-8 rounded-sm tracking-[0.1em] uppercase transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[var(--color-border)] text-center">
                    Explore Services
                </a>
            </div>
        </div>
    </div>
);