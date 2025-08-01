import { motion } from "framer-motion";
import { Brain, Network, Building2, Factory, Users } from "lucide-react";

const WhyNowSection = () => {
  const features = [
    {
      icon: Users,
      title: "The Rise of Post-Industrial Builders",
      description:
        "We need adaptive, independent thinkers — fluent in technology, bold in vision, and collaborative by nature — to lead and build what's next.",
    },

    {
      icon: Building2,
      title: "Autonomous Organizations",
      description:
        "Future firms will be flatter, faster, and AI-native — with intelligent agents managing strategy, governance, and operations alongside humans.",
    },
    {
      icon: Network,
      title: "Decentralized by Design",
      description:
        "From supply chains to energy grids, decentralized systems powered by AI agents are reshaping how industries function and interconnect.",
    },
    {
      icon: Factory,
      title: "Industries Reimagined",
      description:
        "Legacy sectors are being restructured, while entirely new industries — AI-native manufacturing, synthetic biology, space, climate tech — are emerging.",
    },

    {
      icon: Brain,
      title: "The Age of Low-Cost Intelligence",
      description:
        "AI is accelerating science, strategy, and creativity — making advanced capabilities universally accessible and exponentially faster.",
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
            <h3 className="text-[3rem] font-semibold text-gray-700 leading-tight tracking-{-0.015}">
              Don’t wait for the future — build it
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
              slowing us down. Visionary leaders are needed, those willing to
              start from first principles and shape what comes next.
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
