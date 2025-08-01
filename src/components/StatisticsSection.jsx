import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const StatisticsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const statistics = [
    {
      title: "AI First",
      content:
        "Startups are now beginning to deploy AI Agents instead of hiring staff. What is your ratio of AI agents to employees?",
    },
    {
      title: "Flattening Organizations",
      content:
        "20% of CEOs are planning to eliminate half of middle management positions by the end of 2026. (Gartner)",
    },
    {
      title: "AI Strategists",
      content:
        "89% of CEOs believe an AI can develop a strategic plan that is at least as good as some of their executive team members. (Dataiku)",
    },
    {
      title: "..are 4X better",
      content:
        "50% of CEOs expect an AI could replace four of their executive team members for strategic planning purposes (Dataiku).",
    },
    {
      title: "CEOs will be fired.",
      content:
        "74% of CEOs now believe they will be fired by the board if they do not get results from AI transformation the end of 2026. (Dataiku)",
    },
    {
      title: "Agents everywhere",
      content:
        "57% of enterprises IT leaders report they have implemented AI agents in the last two years. (Cloudera)",
    },
    {
      title: "..very soon",
      content:
        "97% of enterprises are expanding their use of AI Agents (Cloudera)",
    },
    {
      title: "1/4 of workflows",
      content:
        "25% of enterprise workflows expected to be AI-powered by the end of 2025. (IBM)",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === statistics.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? statistics.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom px-14">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[3rem] font-semibold text-gray-700 leading-tight tracking-{-0.015}">
            The pressure is on to change faster
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Research shows a growing urgency to act now
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Carousel Track */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="flex justify-center mb-16"
              >
                <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto border border-gray-100">
                  <div className="text-center space-y-6">
                    {/* Title */}
                    <h3 className="text-2xl font-semibold text-gray-800 leading-tight">
                      {statistics[currentIndex].title}
                    </h3>

                    {/* Content */}
                    <p className="text-xl text-gray-600 leading-relaxed">
                      {statistics[currentIndex].content}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 border border-gray-200"
            aria-label="Previous statistic"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 border border-gray-200"
            aria-label="Next statistic"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {statistics.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? "bg-sunrise-orange scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to statistic ${index + 1}`}
              />
            ))}
          </div>

          {/* Counter */}
          <div className="text-center mt-4">
            <span className="text-sm text-gray-500">
              {currentIndex + 1} of {statistics.length}
            </span>
          </div>
        </div>

        {/* Grid View for Larger Screens */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="hidden lg:block mt-16"
        >
          <div className="grid grid-cols-4 gap-6">
            {statistics.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-200"
              >
                <h4 className="font-bold text-gray-800 text-lg mb-3 leading-tight">
                  {stat.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {stat.content}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default StatisticsSection;
