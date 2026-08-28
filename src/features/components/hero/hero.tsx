import { Link } from 'react-router-dom';

const buttonClasses = "bg-[var(--color-brown-dark)] hover:bg-[var(--color-text-dark)] text-[var(--color-bg)] text-sm font-bold py-3 px-6 rounded-sm tracking-[0.1em] uppercase transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[var(--color-border)] shadow-md text-center inline-block";
const secondaryButtonClasses = "bg-transparent border-2 border-[var(--color-border)] text-[var(--color-text-dark)] hover:bg-[var(--color-border)] text-sm font-bold py-3 px-6 rounded-sm tracking-[0.1em] uppercase transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[var(--color-border)] text-center inline-block";

export const Hero = () => (
    <div className="min-h-[85vh] w-full flex flex-col lg:flex-row bg-[var(--color-bg)] font-sans border-b border-[var(--color-border)]">
        {/* Left Content */}
        <div className="w-full lg:flex-1 flex flex-col justify-center px-6 py-16 lg:px-12 xl:px-20">
            <div className="max-w-2xl w-full space-y-8">
                <div className="space-y-4">
                    <h1 className="text-5xl lg:text-7xl font-extrabold text-[var(--color-text-dark)] leading-[0.95] tracking-tighter uppercase">
                        Cut with Precision.<br/>Built with Character.
                    </h1>
                    <p className="text-[var(--color-text-muted)] text-base font-medium max-w-md pt-2">
                        Premium cuts, classic shaves, and modern grooming for men who care about the details.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Link id="link" to="/auth/login" className={buttonClasses}>
                        Book Your Appointment
                    </Link>
                    <a id="link" href="#services" className={secondaryButtonClasses}>
                        Explore Services
                    </a>
                </div>
            </div>
        </div>
        <div className="hidden lg:block h-auto my-12 border-l-[2px] border-dotted border-[var(--color-border)]"></div>
        <div className="hidden w-full h-[50vh] lg:h-auto lg:flex-1 relative bg-[var(--color-overlay-base)]">
            <img 
                src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=2070&auto=format&fit=crop" 
                alt="Premium Barbershop Interior" 
                className="hidden absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-luminosity" 
            />
            <div className="hidden absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-[var(--color-overlay-90)] via-[var(--color-overlay-40)] to-transparent opacity-60"></div>
        </div>
    </div>
);