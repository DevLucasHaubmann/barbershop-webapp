import { Navbar } from "../../features/components/navbar/PublicNavbar";
import { Hero } from "../../features/components/hero/hero";
import { AboutSection } from "../../features/components/about_section/AboutSection";
import { ServicesSection } from "../../features/components//service_section/ServiceSection";
import { BookingCTA } from "../../features/components/booking/BookingCTA";
import { Footer } from "../../features/components/footer/Footer";
import Barbers from "../../features/components/barbers/BarbersSection";
import '../../components/styles/app.css';

export function LandingPage() {
    return (
        <div className="min-h-screen w-full bg-[var(--color-bg)] selection:bg-[var(--color-brown-dark)] selection:text-[var(--color-bg)]">
            <Navbar />
            <main>
                <Hero />
                <AboutSection />
                <ServicesSection />
                <Barbers />
                <BookingCTA />
            </main>
            <Footer />
        </div>
    );
}

export default LandingPage;