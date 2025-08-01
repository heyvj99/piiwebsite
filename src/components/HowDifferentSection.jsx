import { motion } from "framer-motion";
import { Users, Globe, Link, Lightbulb, Sparkles, Award } from "lucide-react";
import amicable from "../assets/images/bg/Amicable Professional Interaction.png";

const HowDifferentSection = () => {
  const differences = [
    {
      title: "Real Relationships, No Pitching",
      description:
        "Genuine connections with peers and experts—focused on insight, not selling.",
      icon: Link,
      color: "sunrise-orange",
    },
    {
      title: "Private Space for Brave Ideas",
      description:
        "A discreet, press-free environment to explore bold, future-defining strategies.",
      icon: Lightbulb,
      color: "marian-blue",
    },
    {
      title: "First Look at What's Next",
      description:
        "Early access to emerging tech and breakthrough management thinking.",
      icon: Sparkles,
      color: "fresh-squeezed",
    },
    {
      title: "Diverse Minds, Shared Vision",
      description:
        "Cross-disciplinary conversations that fuel innovation across industries.",
      icon: Users,
      color: "gray-olive",
    },
    {
      title: "Growing Leaders for Tomorrow",
      description:
        "Development focused on leading transformation and shaping the future.",
      icon: Award,
      color: "squid-ink",
    },
    {
      title: "Purpose Beyond the Day-to-Day",
      description:
        "Big-picture dialogue and support from others building a better world.",
      icon: Globe,
      color: "sunrise-orange",
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
            <h2 className="text-[3rem] font-semibold text-white leading-tight tracking-{-0.015} mb-6">
              The Forum gives you an edge
            </h2>
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
