import { motion } from "framer-motion";

const InvitedSpeakers = () => {
  const speakers = [
    {
      name: "Stefan Petzov",
      title: "VP Innovation and Partnerships",
      company: "Swisscom",
    },
    {
      name: "Dr. Suresh Sunderrajan",
      title: "President, Commercialization Group",
      company: "SRI International",
    },
    {
      name: "Jay Onda",
      title: "Venture Advisor",
      company: "Investor",
    },
    {
      name: "Dr. Artem Harutyunyan",
      title: "Co-Founder and CTO",
      company: "Bardeen Inc.",
    },
    {
      name: "Alison McCauley",
      title: "Founder and CEO",
      company: "Unblocked Future",
    },
    {
      name: "Angelo Del Priore",
      title: "Founding Partner",
      company: "HP Tech Ventures",
    },
    {
      name: "Dušan Vuksanovic",
      title: "CEO, Silicon Valley Outpost",
      company: "Swisscom",
    },
    {
      name: "Laureen Knudsen",
      title: "Chief Transformation Officer",
      company: "Broadcom",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom px-14">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-6">
            Invited Speakers
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            More than a hundred speakers have shared their thinking with our
            attendees, including the following:
          </p>
        </motion.div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-sm p-6 hover:shadow-lg transition-all duration-300"
            >
              {/* Speaker Image Placeholder */}
              <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>

              {/* Speaker Info */}
              <div className="text-center mb-4">
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {speaker.name}
                </h3>
                <p className="text-sm text-gray-600 mb-1">{speaker.title}</p>
                <p className="text-sm text-gray-500">{speaker.company}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 bg-white border border-gray-300 text-gray-700 px-3 py-2 rounded-sm text-sm font-medium hover:bg-gray-50 transition-colors duration-200"
                >
                  Bio
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 bg-white border border-gray-300 text-gray-700 px-3 py-2 rounded-sm text-sm font-medium hover:bg-gray-50 transition-colors duration-200"
                >
                  in
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvitedSpeakers;
