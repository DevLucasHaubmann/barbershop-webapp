interface AppointmentProps {
  date: string;
  time: string;
  service: string;
  barber: string;
}

export const NextAppointmentCard = ({ appointment }: { appointment: AppointmentProps }) => (
  <div className="bg-[var(--color-input-bg)] border border-[var(--color-border)] p-6 md:p-8 rounded-sm shadow-sm relative overflow-hidden group hover:border-[var(--color-brown-dark)] transition-colors duration-300">
    <div className="absolute top-0 left-0 w-1 h-full bg-[var(--color-brown-dark)]"></div>
    <h2 className="text-[10px] font-bold tracking-[0.15em] text-[var(--color-brown-dark)] uppercase mb-6">
      Your Next Appointment
    </h2>
    
    <div className="flex flex-col md:flex-row justify-between md:items-center gap-6 mb-8">
      <div>
        <p className="text-2xl font-extrabold text-[var(--color-text-dark)] uppercase tracking-tight">{appointment.date}</p>
        <p className="text-[var(--color-text-muted)] font-medium mt-1">at {appointment.time}</p>
      </div>
      <div className="text-left md:text-right border-l-[2px] border-dotted border-[var(--color-border)] md:border-none pl-4 md:pl-0">
        <p className="text-lg font-bold text-[var(--color-text-dark)]">{appointment.service}</p>
        <p className="text-[var(--color-text-muted)] font-medium mt-1">with {appointment.barber}</p>
      </div>
    </div>

    <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[var(--color-border)]">
      <button className="bg-[var(--color-brown-dark)] hover:bg-[var(--color-text-dark)] text-[var(--color-info-bg)] text-xs font-bold py-3 px-6 rounded-sm tracking-[0.1em] uppercase transition-all shadow-md focus:ring-2 focus:ring-[var(--color-brown-light)]">
        Reschedule
      </button>
      <button className="bg-transparent border border-[var(--color-border)] hover:bg-[var(--color-error-bg)] hover:text-[var(--color-error-text)] hover:border-[var(--color-error-border)] text-[var(--color-text-dark)] text-xs font-bold py-3 px-6 rounded-sm tracking-[0.1em] uppercase transition-all">
        Cancel
      </button>
    </div>
  </div>
);