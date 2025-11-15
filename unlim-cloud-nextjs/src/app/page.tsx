
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import FileManager from '@/components/FileManager';

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

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState<TelegramUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('telegram_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      router.push('/login');
    }
    setLoading(false);
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('telegram_user');
    setUser(null);
    router.push('/login');
  };

  if (loading || !user) {
    return <p>Loading...</p>; // Or a proper loading spinner
  }

  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <header className="flex justify-between items-center p-4 bg-gray-100 border-b">
        <h1 className="text-xl font-bold">Unlim Cloud</h1>
        <div className="flex items-center">
          <p className="mr-4">Welcome, {user.first_name}!</p>
          <button 
            onClick={handleLogout} 
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          >
            Logout
          </button>
        </div>
      </header>
      
      <main>
        <FileManager />
      </main>
    </div>
  );
}
