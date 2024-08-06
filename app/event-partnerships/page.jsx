import React from "react";
import {
  FaMicrophone,
  FaLaptopCode,
  FaUsers,
  FaTrophy,
  FaHandshake,
  FaBullhorn,
} from "react-icons/fa";
import EventPartnershipsHero from "./_components/EventPartnershipsHero";
import EventTypes from "./_components/EventTypes";
import WhyPartnerWithUs from "./_components/WhyPartnerWithUs";
import PastEvents from "./_components/PastEvents";
import Testimonials from "./_components/Testimonials";
import EventsPartnerCTA from "./_components/EventsCTA";

export const metadata = {
  title: "Event Partnerships | APIIT FCS",
  description:
    "Collaborate with APIIT FCS to create impactful tech events and inspire the next generation of developers.",
};

const EventPartnershipsPage = () => {
  const pastEvents = [
    {
      image: "/images/event1.jpg",
      title: "Tech Talk 2023",
      description: "An inspiring talk with industry leaders.",
    },
    {
      image: "/images/event2.jpg",
      title: "APIIT Hackathon",
      description: "A 24-hour hackathon with creative solutions.",
    },
  ];

  const testimonials = [
    {
      quote: "Partnering with APIIT FCS was a fantastic experience!",
      author: "John Doe",
      position: "CEO, TechCompany",
    },
    {
      quote:
        "The event was organized flawlessly and exceeded our expectations.",
      author: "Jane Smith",
      position: "CTO, Innovate Inc.",
    },
  ];

  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <EventPartnershipsHero />
      <EventTypes />
      <WhyPartnerWithUs />
      <PastEvents events={pastEvents} />
      <Testimonials testimonials={testimonials} />
      <EventsPartnerCTA />
    </div>
  );
};

export default EventPartnershipsPage;
