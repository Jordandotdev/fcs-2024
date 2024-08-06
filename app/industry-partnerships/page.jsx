import React from "react";

import IndustryPartnersHero from "./_components/IndustryPartnersHero";
import PartnershipBenefits from "./_components/PartnershipBenefits";
import PartnershipOppurtunities from "./_components/PartnershipOppurtunities";
import PartnerTestimonials from "./_components/PartnerTestimonials";
import PartnerCTA from "./_components/PartnerCTA";

export const metadata = {
  title: "Industry Partnerships | APIIT FCS",
  description:
    "Collaborate with APIIT FCS to shape the future of tech talent and innovation.",
};

const IndustryPartnershipsPage = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      {/* Hero Section */}
      <IndustryPartnersHero />

      {/* Partnership Benefits */}
      <PartnershipBenefits />
      {/* Partnership Opportunities */}
      <PartnershipOppurtunities />

      {/* Testimonials */}
      <PartnerTestimonials />

      {/* Call to Action */}
      <PartnerCTA />
    </div>
  );
};

export default IndustryPartnershipsPage;
