import { motion } from "framer-motion";
import personaImage1 from "../assets/images/persona/pexels-fauxels-3184405.jpg";
import personaImage2 from "../assets/images/persona/pexels-kampus-8428066.jpg";

const WhoItsForSection = () => {
  const sections = [
    {
      type: "Builder",
      tag: "Startup & Innovation",
      headline:
        "Startup founders and innovation leaders creating AI-first ventures.",
      description:
        "Join leaders who are actively shaping the future of work and technology. Get strategic talent, advisors, and a standout brand in an AI-saturated world.",
      background: "bg-purple-100",
      backgroundImage: personaImage1,
      person: {
        name: "Sarah Chen",
        role: "AI Startup Founder",
        image: "👩‍💼",
        shirtColor: "bg-blue-200",
      },
      speechBubbles: [
        "We're building an AI-first product. Need strategic guidance on talent and branding.",
      ],
    },
    {
      type: "Transformer",
      tag: "Enterprise Leadership",
      headline:
        "Enterprise leaders reshaping legacy organizations for the AI era.",
      description:
        "Re-architect your organization for autonomy. We help with culture change, new mental models, and execution allies for your transformation journey.",
      background: "bg-green-100",
      backgroundImage: personaImage2,
      person: {
        name: "Marcus Rodriguez",
        role: "Chief Innovation Officer",
        image: "👨‍💼",
        shirtColor: "bg-green-200",
      },
      speechBubbles: ["Help us transform our legacy systems for AI adoption."],
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-custom px-14">
        {/* Top Row - Title and Description */}
        <div className="grid grid-cols-5 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="col-span-2"
          >
            <h2 className="text-[3rem] font-semibold text-gray-700 uppercase leading-tight tracking-{-0.015} mb-6">
              Post-Industrialists are the builders and transformers of the
              future.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-3"
          >
            <p className="text-xl text-gray-600 leading-relaxed">
              They are visionary leaders who challenge outdated systems and
              pioneer new ways of thinking, building, and operating. Unbound by
              traditional industry lines, Post-Industrialists reimagine how the
              world works—driven by purpose, enabled by technology, and grounded
              in first principles.
            </p>
          </motion.div>
        </div>

        {/* Bottom Row - Two Persona Cards */}
        <div className="grid grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.type}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              {/* Top Image Section */}
              <div
                className="h-64 bg-cover bg-center bg-no-repeat relative"
                style={{
                  backgroundImage: `url(${section.backgroundImage})`,
                  backgroundPosition: "top center",
                }}
              >
                {/* Tag positioned on top of image */}
                <div className="absolute top-6 left-6 z-10">
                  <div className="inline-block px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-sunrise-orange shadow-sm">
                    {section.tag}
                  </div>
                </div>
              </div>

              {/* White Background Content Section */}
              <div className="p-8 flex flex-col justify-between gap-8">
                {/* Top content - Headline */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-medium text-eerie-black leading-tight">
                    {section.headline}
                  </h3>

                  <p className="text-base text-gray-600 leading-relaxed">
                    {section.description}
                  </p>
                </div>

                {/* Bottom content - Speech bubbles and Person */}
                <div className="space-y-4">
                  {/* Speech bubbles */}
                  <div className="space-y-3">
                    {section.speechBubbles.map((bubble, bubbleIndex) => (
                      <motion.div
                        key={bubbleIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: bubbleIndex * 0.2 }}
                        viewport={{ once: true }}
                        className="relative"
                      >
                        <div className="bg-gray-50 rounded-sm p-3 shadow-sm max-w-xs border border-gray-200">
                          <div className="flex items-start gap-2">
                            {bubbleIndex === 1 && (
                              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                            )}
                            <p className="text-sm text-eerie-black">{bubble}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Person */}
                  {/* <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="flex justify-end"
                  >
                    <div className="relative">
                      <div
                        className={`w-16 h-16 ${section.person.shirtColor} rounded-full flex items-center justify-center text-2xl`}
                      >
                        {section.person.image}
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center border border-gray-200">
                        <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                  </motion.div> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoItsForSection;
