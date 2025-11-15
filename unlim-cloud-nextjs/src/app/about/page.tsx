
import React from 'react';
import { FaUsers, FaBullseye, FaLightbulb } from 'react-icons/fa';

export default function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
            About Unlim Cloud
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the story, mission, and vision behind our open-source cloud storage solution.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Our Story Section */}
          <div className="bg-white p-8 rounded-xl shadow-md mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
            <p className="text-gray-600 leading-relaxed">
              Unlim Cloud was born from a simple idea: that everyone deserves access to secure, private, and unlimited cloud storage without the hefty price tag. As developers and tech enthusiasts, we saw a gap in the market for a truly open and community-driven platform. We started this project not just as a business, but as a movement to empower individuals and developers to take control of their data. It&apos;s a journey of collaboration, innovation, and a shared belief in the power of open source.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Our Mission Section */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <FaBullseye className="text-4xl text-blue-500 mr-4" />
                <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Our mission is to provide a free, unlimited, and open-source cloud storage solution that prioritizes user privacy and data ownership. We aim to build a platform that is not only powerful and scalable but also accessible and easy to use for everyone, from individual users to large-scale enterprises.
              </p>
            </div>

            {/* Our Vision Section */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <FaLightbulb className="text-4xl text-yellow-400 mr-4" />
                <h2 className="text-3xl font-bold text-gray-800">Our Vision</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                We envision a future where cloud storage is a democratized resource, free from the constraints of centralized control and profit-driven motives. We see Unlim Cloud becoming the go-to platform for developers to build upon and for users to trust with their most valuable data, fostering a vibrant ecosystem of innovation.
              </p>
            </div>
          </div>

          {/* Our Community Section */}
          <div className="bg-white p-8 rounded-xl shadow-md mt-12">
            <div className="flex items-center mb-4">
              <FaUsers className="text-4xl text-green-500 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Our Community</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              Unlim Cloud is more than just a project; it&apos;s a community. We believe that the best ideas come from collaboration, and we welcome developers, designers, and users from all over the world to contribute. Whether it&apos;s through code, documentation, or feedback, your participation is what makes this project possible.
            </p>
            <a
              href="https://github.com/godhanedhanraj20/unlimcloud"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105"
            >
              Join us on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
