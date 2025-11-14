'use client';

import Header from '@/components/Header';
import VersionChecker from '@/components/VersionChecker';
import DonationSection from '@/components/DonationSection';
import Footer from '@/components/Footer';
import { useAppStore } from '@/store';

export default function Home() {
  const { isDonationVisible } = useAppStore();
  const currentVersion = '2.0.0';

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Header />
        
        <div className="mt-12 space-y-8">
          <VersionChecker
            currentVersion={currentVersion}
          />
          
          <DonationSection show={isDonationVisible} />
        </div>
        
        <Footer />
      </div>
    </main>
  );
}
