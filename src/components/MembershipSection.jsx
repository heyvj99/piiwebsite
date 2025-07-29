import { motion } from "framer-motion";
import { useState } from "react";
import professionalHandshake from "../assets/images/bg/pexels-sevenstormphotography-443383.jpg";

const MembershipSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    linkedinUrl: "",
    title: "",
    lookingFor: "",
    contribute: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Application submitted:", formData);
  };

  console.log("Background image URL:", professionalHandshake);

  return (
    <section
      className="section-padding relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${professionalHandshake})`,
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="container-custom px-14 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[3rem] font-semibold text-white uppercase leading-tight tracking-{-0.015} mb-6">
            Apply for Membership
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Join our exclusive community of industry leaders and innovators.
            Complete the application below to be considered for membership.
          </p>
        </motion.div>

        {/* Application Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-black/70 backdrop-blur-md rounded-lg shadow-lg border border-white/20 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-sunrise-orange focus:border-transparent transition-all duration-200 text-white"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-sunrise-orange focus:border-transparent transition-all duration-200 text-white"
                />
              </div>

              {/* LinkedIn URL */}
              <div>
                <label
                  htmlFor="linkedinUrl"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  LinkedIn URL *
                </label>
                <input
                  type="url"
                  id="linkedinUrl"
                  name="linkedinUrl"
                  value={formData.linkedinUrl}
                  onChange={handleInputChange}
                  required
                  placeholder="https://linkedin.com/in/yourprofile"
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-sunrise-orange focus:border-transparent transition-all duration-200 text-white"
                />
              </div>

              {/* Title */}
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Title in the Organization *
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g., CEO, Director, Manager"
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-sunrise-orange focus:border-transparent transition-all duration-200 text-white"
                />
              </div>

              {/* What are you looking for */}
              <div>
                <label
                  htmlFor="lookingFor"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  What are you looking for from the community? *
                </label>
                <textarea
                  id="lookingFor"
                  name="lookingFor"
                  value={formData.lookingFor}
                  onChange={handleInputChange}
                  required
                  rows="4"
                  placeholder="Describe what you hope to gain from joining our community..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-sunrise-orange focus:border-transparent transition-all duration-200 text-white resize-none"
                />
              </div>

              {/* What can you contribute */}
              <div>
                <label
                  htmlFor="contribute"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  How would you like to engage with and support other members in
                  this network? *
                </label>
                <textarea
                  id="contribute"
                  name="contribute"
                  value={formData.contribute}
                  onChange={handleInputChange}
                  required
                  rows="4"
                  placeholder="Describe your expertise, experience, or unique perspective you can bring..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-sunrise-orange focus:border-transparent transition-all duration-200 text-white resize-none"
                />
              </div>

              <div className="pt-6">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 px-6 rounded-sm font-semibold transition-all duration-300 bg-sunrise-orange text-erie-black hover:bg-gray-800 flex items-center justify-center gap-2"
                >
                  Submit Application
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </motion.button>
              </div>
            </form>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-lg text-white mb-4">
            Applications are reviewed within 5-7 business days
          </p>
          <p className="text-sm text-white/80">* Required fields</p>
        </motion.div>
      </div>
    </section>
  );
};

export default MembershipSection;
