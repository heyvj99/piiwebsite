import { motion } from "framer-motion";
import { Bot, Zap, Globe, Brain } from "lucide-react";

const WhyNowSection = () => {
  const features = [
    {
      icon: Bot,
      title: "AI-first productivity and creativity",
      description:
        "Transform how we work and create with cutting-edge AI technologies",
    },
    {
      icon: Zap,
      title: "Autonomous agents transforming workflows",
      description:
        "Streamline operations with intelligent automation and autonomous systems",
    },
    {
      icon: Globe,
      title: "Decentralized infrastructure",
      description:
        "Revolutionary changes in energy, manufacturing, and agriculture",
    },
    {
      icon: Brain,
      title: "New economic and organizational models",
      description:
        "Rethinking how value is created, shared, and governed in a post-industrial world",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom px-14">
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Left Column - Small Heading */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="pt-1 col-span-2"
          >
            <h3 className="text-[3rem] font-semibold text-gray-700 uppercase leading-tight tracking-{-0.015}">
              Why now is the time to act?
            </h3>
          </motion.div>

          {/* Right Column - Main Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12 col-span-3"
          >
            {/* Main Description */}
            <div className="text-2xl md:text-3xl font-medium text-gray-800 ">
              The industrial era reshaped how we worked and lived. Now, a
              post-industrial future is emerging, driven by AI and
              decentralization. Yet outdated models and legacy systems are
              slowing us down. Visionary leaders are needed to rethink and
              rebuild from first principles.
            </div>

            {/* Feature Boxes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 bg-slate-100 rounded-sm flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-sunrise-orange" />
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h4 className="font-bold text-gray-800 text-lg">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyNowSection;
