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
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-blue-900 to-teal-800 overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${futuristicBg})` }}
      >
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/30"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20 px-14">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-6xl font-semibold mb-6 leading-tight">
              <span className="text-alabaster">
                For Visionary Leaders Building the Future
              </span>
              <br />
              {/* <span className="text-white">Forum</span> */}
            </h1>

            {/* <div className="text-xl md:text-2xl font-light mb-6 text-alabaster">
              Something
            </div> */}

            {/* <motion.div
              key={currentKeyword}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-fresh-squeezed mb-6"
            >
              {keywords[currentKeyword]}
            </motion.div> */}

            <p className="text-lg md:text-xl text-alabaster mb-8 leading-relaxed opacity-90">
              A private community for leaders shaping the next trillion-dollar
              businesses and industries—through AI, decentralization, and
              exponential technologies.
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

          {/* Right Column - Visual Element */}
          {/*
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center items-center"
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 bg-gradient-to-br from-fresh-squeezed/20 to-sunrise-orange/20 rounded-full border border-fresh-squeezed/30"
              />

              <motion.div
                animate={{
                  scale: [1, 0.9, 1],
                  rotate: [0, -360],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-8 bg-gradient-to-br from-marian-blue/30 to-squid-ink/30 rounded-full border border-marian-blue/40"
              />

              <div className="absolute inset-16 bg-gradient-to-br from-white/10 to-transparent rounded-full border border-white/20 flex items-center justify-center">
                <div className="text-6xl">🤖</div>
              </div>

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 w-4 h-4 bg-fresh-squeezed rounded-full opacity-80" />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2 w-4 h-4 bg-sunrise-orange rounded-full opacity-80" />
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 w-4 h-4 bg-marian-blue rounded-full opacity-80" />
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 w-4 h-4 bg-squid-ink rounded-full opacity-80" />
              </motion.div>

              <div className="absolute inset-0 bg-gradient-to-br from-fresh-squeezed/10 to-transparent rounded-full blur-xl" />
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm rounded-full p-2 border border-white/20"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <rect x="6" y="4" width="4" height="16" />
                <rect x="14" y="4" width="4" height="16" />
              </svg>
            </motion.div>
          </motion.div>
          */}
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
