import type { NextPage } from 'next';
import ModernCountdown from './ModernCountdown';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <ModernCountdown initialSeconds={120} /> {/* Countdown from 2 minutes (120 seconds) */}
    </div>
  );
};

export default Home;
