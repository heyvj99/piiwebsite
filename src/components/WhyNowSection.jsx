import { motion } from "framer-motion";
import { Brain, Network, Building2, Factory, Users } from "lucide-react";

const WhyNowSection = () => {
  const features = [
    {
      icon: Users,
      title: "The AI Explosion",
      description:
        "Exponential progress of Al is accelerating science, technology, and creativity. Advanced Al capabilities are now universally available.",
    },

    {
      icon: Building2,
      title: "Autonomous Organizations",
      description:
        "Firms are flatting, evolving faster and becoming Al-native. They may be assembled just-in-time and last seconds, or persist for decades. Al Agents will manage strategy, governance, R&D, and operations, alongside humans where necessary.",
    },
    {
      icon: Network,
      title: "Rapid Decentralization",
      description:
        "Ubiquitous high-speed connectivity and ever-more powerful computing is pushing intelligence, assets, manufacturing, and intelligence to the edge. Firms and supply chains are being reshaped.",
    },
    {
      icon: Factory,
      title: "Industries Reimagined",
      description:
        "Legacy sectors are being restructured, and new industries are rapidly emerging. Barriers between sectors and industries are dissolving, and Al agents will manage supply chains.",
    },
    {
      icon: Factory,
      title: "Human Fulfilment",
      description:
        "Extended lifespans, material abundance, and universal access to personalized education will combine with our mastery of matter to liberate human creativity and potential at unprecedented scale.",
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
              A new civilization is emerging
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
            <div className="text-2xl md:text-3xl font-normal text-gray-800 ">
              A post-industrial civilization is emerging, driven by Al,
              decentralization, and exponential technologies. We need visionary
              leaders to shape what comes next:
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
