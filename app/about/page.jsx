import React from "react";
import AboutTabs from "./_components/AboutTabs";
import FeaturesSection from "./_components/FeaturesSection";
import CTASection from "./_components/CTASection";

export const metadata = {
  title: "About APIIT FCS",
  keywords: [
    "APIIT FCS",
    "Fullstack Computer Society",
    "APIIT",
    "APIIT Colombo",
    "IT education",
    "student-led organization",
    "innovation in IT",
    "Asia Pacific Institute of Information Technology",
  ],
  author: "Randil Withanage",
  description:
    "APIIT Fullstack Computer Society is the premier student-led organization dedicated to fostering excellence in IT education and innovation at Asia Pacific Institute of Information Technology.",
};

const AboutPage = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-75"></div>
        <img
          src="/images/fcs-tean.jpg"
          alt="APIIT FCS"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white text-center">
            About APIIT FCS
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(to right, #2563EB, #8B5CF6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Shaping the Future of IT
            </span>
          </h2>
          <p className="text-xl text-center text-gray-600">
            APIIT Fullstack Computer Society is the premier student-led
            organization dedicated to fostering excellence in IT education and
            innovation at Asia Pacific Institute of Information Technology. We
            empower students with cutting-edge knowledge, practical skills, and
            invaluable networking opportunities, preparing them for successful
            careers in the ever-evolving tech landscape.
          </p>
        </div>

        {/* Tabs */}
        <AboutTabs />
      </section>

      {/* Features Section */}

      <FeaturesSection />
      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default AboutPage;
