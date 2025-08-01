import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import futuristicBg from "../assets/images/bg/Futuristic Data Display.png";

const HeroSection = () => {
  const [currentKeyword, setCurrentKeyword] = useState(0);
  const keywords = [
    "AI",
    "Autonomy",
    "Decentralization",
    "Innovation",
    "Future",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentKeyword((prev) => (prev + 1) % keywords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-padding relative min-h-screen flex items-start justify-start bg-gradient-to-br from-slate-900 via-blue-900 to-teal-800 overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${futuristicBg})` }}
      >
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/30"></div>
      </div>

      <div className="container-custom relative z-10 mx-0">
        <div className="flex items-start justify-start min-h-screen py-20 px-14">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white w-full"
          >
            <h1 className="text-4xl md:text-6xl font-semibold mb-6 leading-tight">
              <span className="text-alabaster">
                The Bold. <br /> The Visionaries. <br /> The Architects of
                what's next.
              </span>
              <br />
              {/* <span className="text-white">Forum</span> */}
            </h1>

            <p className="w-full max-w-[600px] text-lg md:text-xl text-alabaster mb-8 leading-relaxed opacity-90">
              A private community for leaders leveraging AI and decentralization
              to build and transfer trillion dollar industries of the future.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-sunrise-orange text-white px-8 py-4 rounded-md font-semibold hover:bg-sunrise-orange/90 transition-all duration-300"
              >
                Apply for Membership
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-eerie-black backdrop-blur-sm border border-gray-700 text-white px-8 py-4 rounded-md font-semibold hover:bg-slate-700/80 transition-all duration-300"
              >
                Explore the Forum
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-4 h-4 bg-fresh-squeezed rounded-full opacity-60"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-10 w-6 h-6 bg-sunrise-orange rounded-full opacity-60"
      />
    </section>
  );
};

export default HeroSection;
