import { useNavigate } from 'react-router-dom';
import { AuthenticatedNavbar } from '../../features/components/navbar/AuthenticatedNavbar';
import { WelcomeHeader } from '../../features/components/dashboard/WelcomeHeader';
import { NextAppointmentCard } from '../../features/components/dashboard/NextAppointmentCard';
import { LoyaltyRewardsCard } from '../../features/components/dashboard/LoyaltyRewardsCard';
import { QuickRebookCard } from '../../features/components/dashboard/QuickRebookCard';
import { FavoriteBarbersCard } from '../../features/components/dashboard/FavoriteBarbersCard';
import { Footer } from "../../features/components/footer/Footer";
import { logoutUser } from '../../features/api/userService';
import '../../components/styles/app.css';

const MOCK_USER = {
  firstName: 'Lucas',
  loyaltyPoints: 850,
  nextTier: 1000,
};

const MOCK_APPOINTMENT = {
  date: 'Thursday, Aug 27, 2026',
  time: '14:00',
  service: 'The Full Service',
  barber: 'Marcus',
};

const MOCK_FAVORITE_BARBERS = [
  {
    name: 'Marcus',
    role: 'Master Barber',
    imageUrl: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=150'
  },
  {
    name: 'James',
    role: 'Barber',
    imageUrl: 'https://images.unsplash.com/photo-1618077360395-f3068be8e001?auto=format&fit=crop&q=80&w=150'
  }
];

export default function HomePage() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutUser();
      navigate('/landingpage', { replace: true });
    } catch (error) {
      console.error('Logout failed:', error);
      navigate('/landingpage', { replace: true });
    }
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg)] font-sans text-[var(--color-text-dark)] selection:bg-[var(--color-brown-dark)] selection:text-[var(--color-bg)]">
      
      <AuthenticatedNavbar 
        firstName={MOCK_USER.firstName} 
        onLogout={handleLogout} 
      />

      <main className="max-w-5xl mx-auto px-6 py-12 lg:py-16 space-y-10">
        
        <WelcomeHeader firstName={MOCK_USER.firstName} />
        
        <NextAppointmentCard appointment={MOCK_APPOINTMENT} />
        
        <LoyaltyRewardsCard points={MOCK_USER.loyaltyPoints} nextTier={MOCK_USER.nextTier} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <QuickRebookCard 
            lastCut="Classic Haircut" 
            preferredBarber="Daniel" 
          />
          <FavoriteBarbersCard barbers={MOCK_FAVORITE_BARBERS} />
        </div>

      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}