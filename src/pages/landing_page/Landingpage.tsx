import '../../../components/styles/app.css';
import { Navbar } from "../../features/components/navbar/navbar";
import { Hero } from "../../features/components/hero/hero";
import { AboutSection } from "../../features/components/about_section/AboutSection";
import { ServicesSection } from "../../features/components//service_section/ServiceSection";
import { BookingCTA } from "../../features/components/booking/BookingCTA";
import { Footer } from "../../features/components/footer/Footer";

export function LandingPage() {
    return (
        <div className="min-h-screen w-full bg-[var(--color-bg)] selection:bg-[var(--color-brown-dark)] selection:text-[var(--color-bg)]">
            <Navbar />
            <main>
                <Hero />
                <AboutSection />
                <ServicesSection />
                <BookingCTA />
            </main>
            <Footer />
        </div>
    );
}