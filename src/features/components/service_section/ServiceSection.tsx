import type { ComponentType } from 'react';

const Scissors = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/></svg>;
const Razor = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19.5 5.5L4.5 20.5M19.5 5.5L14 3M19.5 5.5L21.5 11M4.5 20.5L3 14.5M4.5 20.5L9.5 22M15 15l-5-5"/></svg>;

const ServiceCard = ({ number, title, desc, Icon }: { number: string, title: string, desc: string, Icon: ComponentType }) => (
    <div className="bg-[var(--color-input-bg)] border border-[var(--color-border)] p-8 flex flex-col group hover:border-[var(--color-brown-dark)] transition-all duration-300 rounded-sm cursor-pointer shadow-sm hover:shadow-md">
        <div className="flex justify-between items-start mb-12">
            <span className="text-3xl font-extrabold text-[var(--color-border)] group-hover:text-[var(--color-brown-dark)] transition-colors">
                {number}
            </span>
            <div className="text-[var(--color-brown-light)] opacity-50 group-hover:opacity-100 transition-opacity">
                <Icon />
            </div>
        </div>
        <h3 className="text-xl font-extrabold uppercase tracking-tight text-[var(--color-text-dark)] mb-2">
            {title}
        </h3>
        <p className="text-sm text-[var(--color-text-muted)] font-medium leading-relaxed">
            {desc}
        </p>
    </div>
);

export const ServicesSection = () => (
    <div id="services" className="w-full px-6 py-20 lg:px-12 xl:px-20 bg-[var(--color-bg)] border-b border-[var(--color-border)] font-sans">
        <div className="mb-12">
            <span className="section-label text-[var(--color-brown-dark)]">Built Around The Craft</span>
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tighter uppercase text-[var(--color-text-dark)]">
                Our Services
            </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard number="01" title="Classic Haircut" desc="Precision cut, consultation, wash and finish." Icon={Scissors} />
            <ServiceCard number="02" title="Skin Fade" desc="Clean gradients, sharp lines and detailed finishing." Icon={Razor} />
            <ServiceCard number="03" title="Beard Sculpt" desc="Hot towel treatment, shaping and precision detailing." Icon={Scissors} />
            <ServiceCard number="04" title="The Full Service" desc="Haircut, beard service, hot towel and styling." Icon={Razor} />
        </div>
    </div>
);