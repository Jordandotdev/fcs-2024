import React from "react";
import FilteredGrid from "./_components/FilteredGrid";

export const metadata = {
  title: "Events | APIIT FCS",
  description:
    "Stay updated with the latest events organized by APIIT Fullstack Computer Society. From hackathons to workshops, we host a variety of events to help you grow your skills and network.",
  keywords: [
    "APIIT FCS events",
    "APIIT events",
    "hackathons",
    "workshops",
    "symposiums",
    "tech events",
  ],
};

const EventsPage = () => {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-75"></div>
        <img
          src="/images/events-hero.jpg"
          alt="APIIT FCS Events"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white text-center">
            APIIT FCS Events
          </h1>
        </div>
      </section>

      <FilteredGrid />

      {/* Newsletter Signup */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-100 mb-8">
            Subscribe to our newsletter to get the latest updates on our events.
          </p>
          <form className="flex flex-col sm:flex-row justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 mb-4 sm:mb-0 sm:mr-4 bg-white text-gray-800 rounded-full w-full sm:w-auto"
            />
            <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-2 px-6 rounded-full">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
