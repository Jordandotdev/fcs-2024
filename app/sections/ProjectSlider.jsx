"use client";
import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const EventCard = ({ event, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="relative">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p className="text-white text-sm font-semibold">{event.date}</p>
          <p className="text-gray-200 text-xs">{event.location}</p>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{event.title}</h3>
        <p className="text-gray-600 mb-4">{event.description}</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gray-600 text-white font-bold py-2 px-4 rounded-full text-sm hover:bg-gray-700 transition duration-300"
        >
          Learn More
        </motion.button>
      </div>
    </motion.div>
  );
};

const EventsSection = () => {
  const originalEvents = [
    {
      title: "Annual Hackathon 2024",
      description: "48-hour coding marathon to solve real-world problems.",
      image: "/images/ausentt.jpeg",
      date: "March 15-17, 2024",
      location: "Main Campus Arena",
    },
    {
      title: "Tech Talk Series",
      description: "Weekly seminars featuring industry leaders and innovators.",
      image: "/images/skf.jpeg",
      date: "Every Thursday",
      location: "Virtual & Auditorium",
    },
    {
      title: "AI & ML Workshop",
      description:
        "Hands-on workshop on the latest in artificial intelligence.",
      image: "/images/bringo.jpeg",
      date: "April 5, 2024",
      location: "Computer Science Building",
    },
    // Add more events as needed
  ];

  const events = [
    ...originalEvents.slice(-1),
    ...originalEvents,
    ...originalEvents.slice(0, 1),
  ];
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiper = swiperRef.current.swiper;

    const handleResize = () => {
      if (window.innerWidth < 640) {
        swiper.params.slidesPerView = 1;
      } else if (window.innerWidth < 1024) {
        swiper.params.slidesPerView = 2;
      } else {
        swiper.params.slidesPerView = 3;
      }
      swiper.update();
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="bg-gray-100 py-20 px-4 overflow-hidden min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <motion.h2
          className="text-5xl md:text-7xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span>Completed Events</span>
        </motion.h2>

        <Swiper
          ref={swiperRef}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          {events.map((event, index) => (
            <SwiperSlide key={index}>
              <EventCard event={event} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default EventsSection;
