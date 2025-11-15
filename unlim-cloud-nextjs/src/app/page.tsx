
'use client';

import { FaArrowRight, FaCloud, FaGift, FaRocket } from 'react-icons/fa';
import Link from 'next/link';
import VersionChecker from '@/components/VersionChecker';
import DonationSection from '@/components/DonationSection';
import { useAppStore } from '@/store';

export default function Home() {
  const { isDonationVisible } = useAppStore();
  const currentVersion = '2.0.0';

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
            Welcome to Unlim Cloud
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Your open-source solution for unlimited, private, and secure cloud storage. Take control of your data.
          </p>
          <Link href="/gallery">
            <a className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-transform transform hover:scale-105">
              Get Started <FaArrowRight className="inline-block ml-2" />
            </a>
          </Link>
        </div>
      </section>

      {/* Features Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800">Why Choose Unlim Cloud?</h2>
            <p className="mt-2 text-lg text-gray-600">Discover the advantages of our platform.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            <div className="text-center p-6">
              <FaCloud className="text-5xl text-blue-500 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Unlimited Storage</h3>
              <p className="text-gray-600">Store all your files without any limits. Your data, your space.</p>
            </div>
            <div className="text-center p-6">
              <FaRocket className="text-5xl text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Open Source</h3>
              <p className="text-gray-600">Built on transparency and community collaboration. Join us on GitHub!</p>
            </div>
            <div className="text-center p-6">
              <FaGift className="text-5xl text-red-500 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Completely Free</h3>
              <p className="text-gray-600">Enjoy all our features at no cost. Donations are welcome!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gray-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">Ready to Take Control of Your Data?</h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Join the Unlim Cloud community today and experience the freedom of open-source cloud storage.
          </p>
          <Link href="/gallery">
            <a className="mt-8 inline-block bg-white text-gray-800 font-bold py-3 px-6 rounded-lg text-lg hover:bg-gray-200 transition-colors">
              Upload Your First File
            </a>
          </Link>
        </div>
      </section>
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <VersionChecker currentVersion={currentVersion} />
        <DonationSection show={isDonationVisible} />
      </div>
    </div>
  );
}
