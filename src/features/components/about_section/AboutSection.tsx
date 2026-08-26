import { Link } from 'react-router-dom';

const ArrowRight = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>;

export const AboutSection = () => (
    <div id="about" className="w-full bg-[var(--color-brown-dark)] py-24 px-6 lg:px-12 xl:px-20 relative overflow-hidden font-sans border-b border-[var(--color-border)]">
        <div className="absolute top-8 left-8 w-24 h-24 border-t border-l border-[var(--color-brown-light)] opacity-30"></div>
        <div className="absolute bottom-8 right-8 w-24 h-24 border-b border-r border-[var(--color-brown-light)] opacity-30"></div>
        <div className="max-w-3xl mx-auto text-center relative z-10 space-y-6">
            <span className="section-label text-[var(--color-border)]">
                About Us
            </span>
            
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tighter uppercase" style={{ color: '#D1CCC5' }}>
                Craft Over Everything. 
            </h2>
            
            <p className="text-[var(--color-border)] text-sm font-medium pb-4 leading-relaxed">
                We believe a great haircut is more than a service. It is a ritual built around precision, confidence and attention to detail. Every cut is an expression of character.
            </p>
            
            <div className="flex justify-center">
                <Link id="link-white" to="/about" className="bg-transparent border-2 border-[var(--color-border)] text-[var(--color-bg)] hover:bg-[var(--color-brown-light)] text-sm font-bold py-4 px-8 rounded-sm tracking-[0.1em] uppercase transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[var(--color-border)] text-center inline-flex items-center gap-2 group">
                    Our Story 
                    <span className="group-hover:translate-x-1 transition-transform"><ArrowRight /></span>
                </Link>
            </div>
        </div>
    </div>
);