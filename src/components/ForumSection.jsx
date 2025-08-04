import { motion } from "framer-motion";
import { useState } from "react";
import {
  Target,
  GraduationCap,
  Users,
  Wrench,
  MessageCircle,
  BookOpen,
} from "lucide-react";

const ForumSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const benefits = [
    {
      title: "Summit",
      icon: Target,
      description:
        "Attend our annual Post-Industrial Summit in Silicon Valley at privileged member pricing",
      details: "Next: Nov 5–6, 2025 — Focus: Autonomous Organizations.",
      color: "#FF6B6B",
      illustration: Target,
    },
    {
      title: "Future-Facing Leadership Sessions",
      icon: Users,
      description:
        "Quarterly events with industry leaders (SRI, NVIDIA, Cisco, etc.)",
      details: "Live stream & recordings available",
      color: "#FF6B6B",
      illustration: Users,
    },
    {
      title: "Roundtables",
      icon: MessageCircle,
      description: "Small peer groups, meeting quarterly",
      details: "Candid, high-trust discussions",
      color: "#FF6B6B",
      illustration: MessageCircle,
    },
    {
      title: "Post-Industrial Academy",
      icon: GraduationCap,
      description:
        "Foundational course on the evolution of organizations and the future of leadership",
      details: "Unlock early access for upcoming executive programs",
      color: "#FF6B6B",
      illustration: GraduationCap,
    },
    {
      title: "Knowledge Vault",
      icon: BookOpen,
      description:
        "Access every publication, session, and resource in our archive since 2020",
      details: "Research papers, case studies, and insights",
      color: "#FF6B6B",
      illustration: BookOpen,
    },
    {
      title: "Workshops & Working Groups",
      icon: Wrench,
      description: "In-person & remote co-creation sessions",
      details: "Topics: AI Agents, Org Dev, Leadership",
      color: "#FF6B6B",
      illustration: Wrench,
    },
  ];

  return (
    <section className="section-padding bg-eerie-black">
      <div className="container-custom grid grid-cols-5 gap-8 px-14 py-14">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-left mb-16 col-span-2"
        >
          <h2 className="text-[3rem] font-semibold text-white leading-tight tracking-{-0.015} mb-6">
            Connect. <br />
            Learn. <br />
            Implement.
          </h2>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 col-span-3 bg-white border border-gray-200 rounded-xl shadow-xl">
          {/* Left Column - Tab Navigation */}
          <div className="lg:col-span-2">
            <div className="p-6">
              <div className="space-y-1">
                {benefits.map((benefit, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`w-full flex items-start space-x-4 px-4 py-4 rounded-lg transition-all duration-300 ${
                      activeTab === index
                        ? "bg-gray-50 border-l-4 border-sunrise-orange text-sunrise-orange shadow-sm"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-800"
                    }`}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <div className="text-2xl">
                      {(() => {
                        const IconComponent = benefit.icon;
                        return <IconComponent className="w-5 h-5" />;
                      })()}
                    </div>
                    <div className="text-left">
                      <span className="font-medium text-sm block">
                        {benefit.title}
                      </span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Tab Content */}
          <div className="lg:col-span-3">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl p-8 h-full"
            >
              <div className="flex flex-col gap-6 h-full">
                {/* top: Illustration */}
                <div className="flex justify-center lg:justify-start">
                  <div className="text-sunrise-orange opacity-90">
                    {(() => {
                      const IconComponent = benefits[activeTab].illustration;
                      return <IconComponent className="w-20 h-20" />;
                    })()}
                  </div>
                </div>

                {/* bottom: Content */}
                <div className="space-y-5">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {benefits[activeTab].title}
                  </h3>
                  <p className="text-base text-gray-700 leading-relaxed">
                    {benefits[activeTab].description}
                  </p>
                  <div className="bg-gray-50 border border-gray-200 p-5 rounded-lg">
                    <p className="text-sm text-gray-800 font-medium">
                      {benefits[activeTab].details}
                    </p>
                  </div>
                  <motion.button
                    className="px-6 py-3 bg-sunrise-orange text-erie-black font-medium rounded-lg shadow-sm hover:bg-gray-800 hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Learn More
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForumSection;
