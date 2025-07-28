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
      description: "Annual event in Silicon Valley with 50% discount",
      details: "Next: Nov 5–6, 2025 — Focus: Autonomous Organizations",
      color: "#FF6B6B",
      illustration: Target,
    },
    {
      title: "Post-Industrial Academy",
      icon: GraduationCap,
      description: "Free course on organizational history and futures",
      details: "Discounts on future executive education",
      color: "#FF6B6B",
      illustration: GraduationCap,
    },
    {
      title: "Quarterly Executive Sessions",
      icon: Users,
      description:
        "Evening events with industry leaders (SRI, NVIDIA, Cisco, etc.)",
      details: "Live stream & recordings available",
      color: "#FF6B6B",
      illustration: Users,
    },
    {
      title: "Workshops & Working Groups",
      icon: Wrench,
      description: "In-person & remote co-creation sessions",
      details: "Topics: AI Agents, Org Dev, Leadership",
      color: "#FF6B6B",
      illustration: Wrench,
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
      title: "Digital Library",
      icon: BookOpen,
      description: "Access to all archives since 2020",
      details: "Research papers, case studies, and insights",
      color: "#FF6B6B",
      illustration: BookOpen,
    },
  ];

  return (
    <section className="section-padding bg-slate-900">
      <div className="container-custom grid grid-cols-5 gap-8 px-14">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-left mb-16 col-span-2"
        >
          <h2 className="text-[3rem] font-semibold text-white uppercase leading-tight tracking-{-0.015} mb-6">
            Membership Includes Access To Benefits
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Comprehensive resources and experiences designed for
            forward-thinking leaders
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 col-span-3 bg-alabaster rounded-sm p-1">
          {/* Left Column - Tab Navigation */}
          <div className="lg:col-span-1">
            <div className="p-1">
              <div className="space-y-2">
                {benefits.map((benefit, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`w-full flex items-start space-x-4 px-2 py-4 rounded-sm transition-all duration-300 ${
                      activeTab === index
                        ? "bg-slate-50 border-l-4 border-[#FF6B6B] text-[#FF6B6B]"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="text-2xl">
                      {(() => {
                        const IconComponent = benefit.icon;
                        return <IconComponent className="w-6 h-6" />;
                      })()}
                    </div>
                    <div className="text-left">
                      <span className="font-semibold text-sm block">
                        {benefit.title}
                      </span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Tab Content */}
          <div className="lg:col-span-2">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-alabaster rounded-sm p-8 h-full"
            >
              <div className="flex flex-col gap-4 h-full">
                {/* top: Illustration */}
                <div className="flex justify-center lg:justify-start">
                  <div className="text-[#FF6B6B] opacity-80">
                    {(() => {
                      const IconComponent = benefits[activeTab].illustration;
                      return <IconComponent className="w-24 h-24" />;
                    })()}
                  </div>
                </div>

                {/* bottom: Content */}
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-gray-700">
                    {benefits[activeTab].title}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {benefits[activeTab].description}
                  </p>
                  <div className="bg-gray-100 p-4 rounded-sm">
                    <p className="text-lg text-gray-800 font-medium">
                      {benefits[activeTab].details}
                    </p>
                  </div>
                  <motion.button
                    className="px-8 py-3 border border-slate-800 text-slate-800 font-semibold rounded-sm shadow-md hover:shadow-md transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    DETAILS
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
