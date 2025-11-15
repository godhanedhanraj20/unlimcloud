
import React from 'react';
import { FaCloudUploadAlt, FaShareAlt, FaLock, FaCodeBranch } from 'react-icons/fa';

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
    <div className="flex items-center mb-4">
      {icon}
      <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
    </div>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

export default function FeaturesPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
            Features of Unlim Cloud
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the powerful features that make Unlim Cloud the ultimate open-source storage solution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <FeatureCard
            icon={<FaCloudUploadAlt className="text-4xl text-blue-500 mr-4" />}
            title="Unlimited File Storage"
            description="Store as many files as you need without worrying about storage limits. From documents to high-resolution videos, we've got you covered."
          />
          <FeatureCard
            icon={<FaShareAlt className="text-4xl text-green-500 mr-4" />}
            title="Seamless File Sharing"
            description="Share files and folders with anyone, anywhere. Generate secure links and manage permissions with ease, making collaboration a breeze."
          />
          <FeatureCard
            icon={<FaLock className="text-4xl text-red-500 mr-4" />}
            title="Privacy and Security"
            description="Your privacy is our top priority. With end-to-end encryption and a commitment to data ownership, you can rest assured that your files are safe and secure."
          />
          <FeatureCard
            icon={<FaCodeBranch className="text-4xl text-purple-500 mr-4" />}
            title="Truly Open Source"
            description="Unlim Cloud is built on open-source principles. Contribute to the project on GitHub, customize it to your needs, and be a part of a transparent and community-driven ecosystem."
          />
        </div>

        <div className="text-center mt-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join the Unlim Cloud community today and experience the future of cloud storage.
          </p>
          <a
            href="/gallery"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-transform transform hover:scale-105"
          >
            Upload Your First File
          </a>
        </div>
      </div>
    </div>
  );
}
