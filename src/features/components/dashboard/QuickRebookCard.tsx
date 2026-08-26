import { Link } from 'react-router-dom';

interface QuickRebookProps {
  lastCut: string;
  preferredBarber: string;
}

export const QuickRebookCard = ({ lastCut, preferredBarber }: QuickRebookProps) => (
  <div className="bg-[var(--color-input-bg)] border border-[var(--color-border)] p-6 md:p-8 rounded-sm shadow-sm flex flex-col justify-between h-full">
    <div>
      <h2 className="text-[10px] font-bold tracking-[0.15em] text-[var(--color-brown-dark)] uppercase mb-6">
        Quick Re-book
      </h2>
      <div className="space-y-3 mb-8">
        <p className="text-sm text-[var(--color-text-muted)] font-medium flex justify-between border-b border-[var(--color-border)] pb-2">
          Last cut: <span className="font-bold text-[var(--color-text-dark)]">{lastCut}</span>
        </p>
        <p className="text-sm text-[var(--color-text-muted)] font-medium flex justify-between border-b border-[var(--color-border)] pb-2">
          Preferred barber: <span className="font-bold text-[var(--color-text-dark)]">{preferredBarber}</span>
        </p>
      </div>
    </div>
    <Link id="link-gray" to={`/booking?service=${lastCut.toLowerCase()}&barber=${preferredBarber.toLowerCase()}`} className="block w-full text-center bg-transparent border-2 border-[var(--color-border)] hover:border-[var(--color-brown-dark)] hover:bg-[var(--color-brown-dark)] hover:text-[var(--color-bg)] text-[var(--color-text-dark)] text-xs font-bold py-3.5 px-4 rounded-sm tracking-[0.1em] uppercase transition-all shadow-sm">
      Find Next Available Slot
    </Link>
  </div>
);