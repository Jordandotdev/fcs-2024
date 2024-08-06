import React from "react";
import CollaborationSection from "./_components/CollaborationSection";
import ContactInformation from "./_components/ContactInformation";
import ContactForm from "./_components/ContactForm";
import ContactCTA from "./_components/ContactCTA";
import ContactHero from "./_components/ContactHero";

export const metadata = {
  title: "Contact Us | APIIT FCS",
  description: "Contact us for any queries or collaborations.",
};

const ContactPage = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <ContactHero />
      <CollaborationSection />
      <section className="max-w-6xl mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ContactInformation />
          <ContactForm />
        </div>
      </section>
      <ContactCTA />
    </div>
  );
};

export default ContactPage;
