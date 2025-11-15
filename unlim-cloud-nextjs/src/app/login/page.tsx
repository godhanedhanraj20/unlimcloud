'use client';

import { useRouter } from 'next/navigation';
import TelegramLoginButton from '@/components/TelegramLoginButton';

// Define the shape of the Telegram user object
interface TelegramUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  photo_url?: string;
  auth_date: number;
  hash: string;
}

const LoginPage = () => {
  const router = useRouter();

  const handleTelegramAuth = (user: TelegramUser) => {
    // Here, you would typically send the user data to your backend for verification and session creation
    console.log('Logged in as:', user);

    // For this example, we'll just store the user in local storage and redirect
    localStorage.setItem('telegram_user', JSON.stringify(user));
    router.push('/');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Login with Telegram</h1>
      <TelegramLoginButton botName="UnlimCloudBot" onAuth={handleTelegramAuth} />
    </div>
  );
};

export default LoginPage;
