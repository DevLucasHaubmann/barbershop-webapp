export const Footer = () => (
    <footer className="w-full bg-[var(--color-bg)] py-12 px-6 lg:px-12 xl:px-20 font-sans border-t border-[var(--color-border)]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-[var(--color-border)] pb-12 mb-8">
            <div className="col-span-1 space-y-4">
                <h4 className="text-xl font-extrabold tracking-tighter uppercase text-[var(--color-text-dark)]">Barbershop</h4>
                <p className="text-[var(--color-text-muted)] text-xs font-medium leading-relaxed">
                    Premium men's grooming, delivering confidence through precision and character.
                </p>
            </div>
            <div className="flex flex-col gap-3 text-sm font-medium text-[var(--color-text-dark)]">
                <span className="section-label text-[var(--color-brown-dark)]">Contact Info</span>
                <a id="link" href="mailto:hello@barbershop.com" className="hover:text-[var(--color-brown-light)] transition-colors">hello@barbershop.com</a>
                <span>(99) 99999-9999</span>
            </div>
            <div className="flex flex-col gap-3 text-sm font-medium text-[var(--color-text-dark)]">
                <span className="section-label text-[var(--color-brown-dark)]">Hours</span>
                <div className="flex justify-between max-w-[200px]">
                    <span>Mon - Fri</span>
                    <span className="text-[var(--color-text-muted)]">09:00 - 20:00</span>
                </div>
                <div className="flex justify-between max-w-[200px]">
                    <span>Saturday</span>
                    <span className="text-[var(--color-text-muted)]">09:00 - 18:00</span>
                </div>
            </div>
            <div className="flex flex-col gap-3 text-sm font-medium text-[var(--color-text-dark)] md:items-end">
                <span className="section-label text-[var(--color-brown-dark)]">Socials</span>
                <a id="link" href="#" className="hover:text-[var(--color-brown-light)] transition-colors">Instagram</a>
                <a id="link" href="#" className="hover:text-[var(--color-brown-light)] transition-colors">Twitter (X)</a>
            </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-[10px] font-bold tracking-[0.1em] uppercase text-[var(--color-text-muted)]">
            <span>© 2026 Barbershop. All Rights Reserved.</span>
        </div>
    </footer>
);