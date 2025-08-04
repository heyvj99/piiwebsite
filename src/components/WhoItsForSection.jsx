import { motion } from "framer-motion";
import personaImage1 from "../assets/images/persona/Startup_collaboration.jpg";
import personaImage2 from "../assets/images/persona/big_tech_collaboration.jpg";

const WhoItsForSection = () => {
  const sections = [
    {
      type: "Builder",
      headline: "Building AI-first Ventures",
      description:
        "Visionary leaders who launch and scale ventures fundamentally built around AI technologies. These leaders prioritize innovation, agility, and bold strategies to drive transformative impact in rapidly evolving markets.",
      background: "bg-purple-100",
      backgroundImage: personaImage1,
      person: {
        name: "Sarah Chen",
        role: "AI Startup Founder",
        image: "👩‍💼",
        shirtColor: "bg-blue-200",
      },
    },
    {
      type: "Transformer",
      headline: "Transforming Organizations of Today",
      description:
        "Ambitious, forward-thinking executives in large enterprises who leverage AI and innovative business thinking to drive rapid transformation. They seek to unlock new growth from existing industries while building the industries of the future.",
      background: "bg-green-100",
      backgroundImage: personaImage2,
      person: {
        name: "Marcus Rodriguez",
        role: "Chief Innovation Officer",
        image: "👨‍💼",
        shirtColor: "bg-green-200",
      },
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-custom px-14 py-14">
        {/* Top Row - Title and Description */}
        <div className="grid grid-cols-5 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="col-span-2"
          >
            <h2 className="text-[3rem] font-semibold text-gray-700 leading-tight tracking-{-0.015} mb-6">
              The future will be built by Post-Industrialists.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-3"
          >
            <p className="text-2xl md:text-3xl font-normal text-gray-800">
              Bold in vision and collaborative in nature, Post-Industrialists{" "}
              <span className=" text-sunrise-orange">
                combine AI and exponential technologies with new management
                thinking
              </span>{" "}
              to pioneer new ways of building and operating. They{" "}
              <span className="text-sunrise-orange">
                imagine the future then build it from first principles.
              </span>
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
              ></div>

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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoItsForSection;
