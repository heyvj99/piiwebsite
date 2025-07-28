import { motion } from "framer-motion";
import { useState } from "react";

const SocialProofSection = () => {
  const companies = [
    { name: "NVIDIA", logo: "🖥️", description: "AI Computing Leader" },
    { name: "SRI", logo: "🔬", description: "Research & Innovation" },
    { name: "Salesforce", logo: "☁️", description: "Cloud Platform" },
    { name: "Cisco", logo: "🌐", description: "Networking Solutions" },
    { name: "Swisscom", logo: "📡", description: "Telecommunications" },
  ];

  const testimonials = [
    {
      quote:
        "The Forum helped me move from hype to clarity. I connected with strategic partners, reframed my org model, and found language to attract top-tier talent.",
      author: "Amara Collins",
      role: "Creative Director of Visual Narratives",
      company: "Lighthouse",
      icon: "⚡",
      avatar: "👩‍🎨",
    },
    {
      quote:
        "In a world full of AI noise, this is one of the few places where the conversation is both intellectually honest and practically useful. The relationships here compound over time.",
      author: "Kai Sterling",
      role: "CEO",
      company: "Urban Nest",
      icon: "📍",
      avatar: "👨‍💼",
    },
    {
      quote:
        "This isn’t just a tech forum. It’s a space to question assumptions, co-create frameworks, and reimagine leadership for autonomous systems. I walk away challenged every time.",
      author: "Lena Harper",
      role: "Chief Innovation Officer",
      company: "The Loft",
      icon: "🏢",
      avatar: "👩‍🔬",
    },
  ];

  const topRowPartners = [
    { name: "Swisscom", logo: "📡" },
    { name: "NVIDIA", logo: "🖥️" },
    { name: "Cisco", logo: "🌐" },
    { name: "Salesforce", logo: "☁️" },
    { name: "Google", logo: "🔍" },
    { name: "Archetype AI", logo: "🤖" },
    { name: "Stanford University", logo: "🎓" },
    { name: "HP Tech Ventures", logo: "💻" },
    { name: "Microsoft", logo: "🪟" },
    { name: "Amazon", logo: "📦" },
    { name: "Meta", logo: "👥" },
    { name: "Apple", logo: "🍎" },
  ];

  const bottomRowPartners = [
    { name: "Outpost", logo: "🏢" },
    { name: "Skyfire", logo: "🔥" },
    { name: "Nordic Innovation", logo: "❄️" },
    { name: "Digital Twin Consortium", logo: "🔄" },
    { name: "Bardeen", logo: "🎭" },
    { name: "People.ai", logo: "👥" },
    { name: "ARES", logo: "⚡" },
    { name: "RVC", logo: "🏛️" },
    { name: "Opaque", logo: "🔒" },
    { name: "Think with AI", logo: "🧠" },
    { name: "W", logo: "⚪" },
    { name: "Tech Mahindra", logo: "🏢" },
    { name: "OpenAI", logo: "🤖" },
    { name: "Anthropic", logo: "🧠" },
    { name: "Palantir", logo: "🔮" },
    { name: "Databricks", logo: "💎" },
  ];

  // Duplicate partners arrays multiple times to create seamless loops
  const duplicatedTopPartners = [
    ...topRowPartners,
    ...topRowPartners,
    ...topRowPartners,
    ...topRowPartners,
  ];
  const duplicatedBottomPartners = [
    ...bottomRowPartners,
    ...bottomRowPartners,
    ...bottomRowPartners,
    ...bottomRowPartners,
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <section className="section-padding bg-slate-900">
      <div className="container-custom flex flex-col gap-8">
        {/* Trusted Partners Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <h3 className="text-[3rem] font-semibold text-gray-200 uppercase leading-tight tracking-{-0.015} mb-4">
            Participating Organizations
          </h3>
          <p className="text-lg text-white opacity-80 mb-12 max-w-3xl mx-auto">
            Over the last five years our speakers and attendees have included
            senior leaders from a “who is who” among leading organizations:
          </p>

          {/* Moving Banner Rows */}
          <div className="overflow-y-visible overflow-x-hidden mb-8">
            {/* Top Row - Moving Left */}
            <div className="flex mb-6 relative">
              <motion.div
                className="flex"
                animate={{ x: [0, -500] }}
                transition={{
                  duration: 200,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{ width: "max-content" }}
              >
                {duplicatedTopPartners.map((partner, index) => (
                  <div
                    key={`top-${index}`}
                    className="bg-slate-800 rounded-md p-4 mx-3 shadow-md hover:shadow-lg transition-all duration-300 border border-slate-700 flex-shrink-0"
                    style={{ minWidth: "120px" }}
                  >
                    <div className="text-2xl mb-2 text-center">
                      {partner.logo}
                    </div>
                    <span className="font-semibold text-white text-xs text-center block">
                      {partner.name}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Bottom Row - Moving Right */}
            <div className="flex relative">
              <motion.div
                className="flex"
                animate={{ x: [-500, 0] }}
                transition={{
                  duration: 200,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{ width: "max-content" }}
              >
                {duplicatedBottomPartners.map((partner, index) => (
                  <div
                    key={`bottom-${index}`}
                    className="bg-slate-800 rounded-md p-4 mx-3 shadow-md hover:shadow-lg transition-all duration-300 border border-slate-700 flex-shrink-0"
                    style={{ minWidth: "120px" }}
                  >
                    <div className="text-2xl mb-2 text-center">
                      {partner.logo}
                    </div>
                    <span className="font-semibold text-white text-xs text-center block">
                      {partner.name}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by Leaders from:
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Join a network of executives and innovators from leading
            organizations
          </p>
        </motion.div> */}

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="my-16 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-b border-slate-700 pt-8 pb-8"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-slate-300 mb-2">500+</div>
            <div className="text-white">Active Members</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-slate-300 mb-2">50+</div>
            <div className="text-white">Fortune 500 Companies</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-slate-300 mb-2">95%</div>
            <div className="text-white">Member Satisfaction</div>
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-lg shadow-xl p-12 relative">
            {/* Large Quote Mark */}
            <div className="absolute top-8 left-8 text-8xl font-bold text-black opacity-20">
              "
            </div>

            {/* Main Testimonial Content */}
            <div className="relative z-10">
              <blockquote className="text-2xl md:text-3xl text-black font-medium leading-relaxed mb-8 pl-16">
                {testimonials[activeTestimonial].quote}
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center gap-4 mb-12">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-slate-400 to-slate-600 flex items-center justify-center text-white text-2xl">
                  {testimonials[activeTestimonial].avatar}
                </div>
                <div>
                  <div className="text-xl font-bold text-black">
                    {testimonials[activeTestimonial].author}
                  </div>
                  <div className="text-gray-600">
                    {testimonials[activeTestimonial].role}
                  </div>
                </div>
              </div>

              {/* Navigation Cards */}
              <div className="flex gap-4 justify-center">
                {testimonials.map((testimonial, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`p-4 rounded-sm border transition-all duration-300 ${
                      index === activeTestimonial
                        ? "bg-gray-100 border-gray-300"
                        : "bg-white border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="text-black font-medium mb-1">
                      {testimonial.author}
                    </div>
                    <div className="flex items-center gap-1 text-gray-600 text-sm">
                      <span>{testimonial.icon}</span>
                      <span>{testimonial.company}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofSection;
