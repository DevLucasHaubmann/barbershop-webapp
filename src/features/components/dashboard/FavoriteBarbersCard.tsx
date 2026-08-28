import { Link } from 'react-router-dom';

interface Barber {
  name: string;
  role: string;
  imageUrl: string;
}

export const FavoriteBarbersCard = ({ barbers }: { barbers: Barber[] }) => (
  <div className="bg-[var(--color-input-bg)] border border-[var(--color-border)] p-6 md:p-8 rounded-sm shadow-sm h-full">
    <h2 className="text-[10px] font-bold tracking-[0.15em] text-[var(--color-brown-dark)] uppercase mb-6">
      Favorite Barbers
    </h2>
    <div className="space-y-5">
      {barbers.map((barber, index) => (
        <div key={barber.name}>
          <div className="flex items-center justify-between group">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-sm bg-[var(--color-border)] overflow-hidden">
                <img 
                  src={barber.imageUrl} 
                  alt={barber.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" 
                />
              </div>
              <div>
                <p className="text-sm font-bold text-[var(--color-text-dark)] uppercase tracking-wide">{barber.name}</p>
                <p className="text-[10px] uppercase tracking-widest text-[var(--color-brown-light)] mt-0.5">{barber.role}</p>
              </div>
            </div>
            <Link to={`/booking?barber=${barber.name.toLowerCase()}`} className="text-[10px] font-bold text-[var(--color-text-muted)] hover:text-[var(--color-brown-dark)] uppercase tracking-[0.1em] transition-colors border-b border-transparent hover:border-[var(--color-brown-dark)] pb-0.5">
              View Schedule
            </Link>
          </div>
          
          {index < barbers.length - 1 && (
            <div className="border-b border-dotted border-[var(--color-border)] w-full mt-5"></div>
          )}
        </div>
      ))}
    </div>
  </div>
);