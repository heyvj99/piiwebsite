import { motion } from "framer-motion";
import { Zap, Target, Link, TrendingUp, Star } from "lucide-react";
import amicable from "../assets/images/bg/Amicable Professional Interaction.png";

const HowDifferentSection = () => {
  const differences = [
    {
      title: "Action-Oriented Sessions",
      description: "Every session is built to generate outcomes, not just talk",
      icon: Zap,
      color: "sunrise-orange",
    },
    {
      title: "Selective Community",
      description: "Members chosen for mindset and momentum",
      icon: Target,
      color: "marian-blue",
    },
    {
      title: "Cross-Boundary Learning",
      description: "Strategy, product, people, and technology intersect",
      icon: Link,
      color: "fresh-squeezed",
    },
    {
      title: "Compounding Knowledge",
      description: "Patterns, frameworks, and insights accumulate",
      icon: TrendingUp,
      color: "gray-olive",
    },
    {
      title: "Influence-Building",
      description: "Opportunity to co-author tools and publish insights",
      icon: Star,
      color: "squid-ink",
    },
  ];

  return (
    <section
      className="section-padding relative"
      style={{
        backgroundImage: `url(${amicable})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="container-custom px-14 relative z-10">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16">
          {/* First Cell - Main Heading Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2 flex flex-col justify-start"
          >
            <h2 className="text-[3rem] font-semibold text-white uppercase leading-tight tracking-{-0.015} mb-6">
              What Makes the Forum Different?
            </h2>
            <p className="text-xl text-white leading-relaxed">
              We're not just another networking group. Here's what sets us
              apart.
            </p>
          </motion.div>

          {/* Remaining 5 Cells - Difference Cards in 2x3 Grid */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differences.map((difference, index) => (
              <motion.div
                key={difference.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/30 backdrop-blur-sm rounded-md p-6 hover:shadow-xl transition-all duration-300 border border-slate-600/50 hover:border-sunrise-orange"
              >
                {/* Top border line */}
                <div className="w-full h-0.5 bg-slate-500/60 mb-4"></div>

                {/* Icon */}
                <div className="mb-4 text-sunrise-orange">
                  <difference.icon className="w-8 h-8" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-medium text-white mb-3">
                  {difference.title}
                </h3>

                {/* Description */}
                <p className="text-white text-sm leading-relaxed opacity-90">
                  {difference.description}
                </p>

                {/* Arrow icon */}
                <div className="mt-4 flex justify-end">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-slate-900"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 17l9.2-9.2M17 17V7H7"
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowDifferentSection;
