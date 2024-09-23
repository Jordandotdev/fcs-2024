import React from "react";
import AboutTabs from "./_components/AboutTabs";
import FeaturesSection from "./_components/FeaturesSection";
import CTASection from "./_components/CTASection";
import config from "../strapi/config";

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
  author: "Randil Withanage & Jordan Ferdinando",
  description:
    "APIIT Fullstack Computer Society is the premier student-led organization dedicated to fostering excellence in IT education and innovation at Asia Pacific Institute of Information Technology.",
};

const fetchAboutPageData = async () => {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.GET_ABOUT_API_TOKEN}`,
    },
    cache: 'no-store',
  };
  const response = await fetch(
    `${config.api}/api/about?populate[History][populate][HistoryRecord][populate]=true`,
    reqOptions
  );
  const resData = await response.json();
  return resData.data; 
};

const AboutPage = async () => {
  const aboutData = await fetchAboutPageData();
  const { Title, Description, History } = aboutData.attributes; 
  const { HistoryRecord } = aboutData.attributes.History;

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
              {Title}
            </span>
          </h2>
          <p className="text-xl text-center text-gray-600">
            {Description[0]?.children[0]?.text} 
          </p>
        </div>

        <AboutTabs History={History} />
      </section>

      {/* Features Section */}
      <FeaturesSection />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default AboutPage;
