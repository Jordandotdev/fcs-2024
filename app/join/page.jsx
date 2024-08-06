import React from "react";
import JoinHero from "./_components/JoinHero";
import JoinEvents from "./_components/JoinEvents";
import CommunityBenefits from "./_components/CommunityBenefits";
import JoinForm from "./_components/JoinForm";
import FunFacts from "./_components/FunFacts";
import JoinCTA from "./_components/JoinCTA";

export const metadata = {
  title: "Join APIIT FCS",
  description:
    "Join APIIT Fullstack Computer Society and be part of a vibrant community of tech enthusiasts. Get access to workshops, networking opportunities, and career resources.",
  keywords: [
    "APIIT FCS",
    "Fullstack Computer Society",
    "APIIT",
    "APIIT Colombo",
    "student-led organization",
    "tech community",
    "tech enthusiasts",
    "innovation in IT",
  ],
};

const JoinPage = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      {/* Hero Section */}
      <JoinHero />

      {/* Events Section */}
      <JoinEvents />

      {/* Community Benefits Section */}

      <CommunityBenefits />
      {/* Fun Facts Section */}
      <FunFacts />

      {/* Join FCS Form Section */}
      <JoinForm />

      {/* Call to Action */}
      <JoinCTA />
    </div>
  );
};

export default JoinPage;
