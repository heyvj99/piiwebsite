import { motion } from "framer-motion";

const CallToActionSection = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-squid-ink via-marian-blue to-eerie-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Shape the Future?
            </h2>

            <p className="text-xl md:text-2xl text-alabaster max-w-3xl mx-auto mb-8 leading-relaxed">
              Join an exclusive community of visionary leaders, entrepreneurs,
              and innovators who are building the next trillion-dollar
              industries.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-squid-ink/50 backdrop-blur-sm rounded-sm p-6 border border-sunrise-orange/20"
              >
                <div className="text-3xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold mb-3 text-fresh-squeezed">
                  Exclusive Access
                </h3>
                <p className="text-alabaster">
                  Private forums, expert insights, and direct connections with
                  industry leaders.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-squid-ink/50 backdrop-blur-sm rounded-sm p-6 border border-sunrise-orange/20"
              >
                <div className="text-3xl mb-4">💡</div>
                <h3 className="text-xl font-semibold mb-3 text-fresh-squeezed">
                  Early Intelligence
                </h3>
                <p className="text-alabaster">
                  Get ahead of emerging trends and technologies before they go
                  mainstream.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-squid-ink/50 backdrop-blur-sm rounded-sm p-6 border border-sunrise-orange/20"
              >
                <div className="text-3xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold mb-3 text-fresh-squeezed">
                  Strategic Partnerships
                </h3>
                <p className="text-alabaster">
                  Connect with potential collaborators and investors in your
                  space.
                </p>
              </motion.div>
            </div>

            <div className="bg-squid-ink/30 backdrop-blur-sm rounded-md p-8 border border-sunrise-orange/30 mb-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-fresh-squeezed">
                  Limited Time: Early Access Program
                </h3>
                <p className="text-lg text-alabaster mb-6">
                  Apply now for our exclusive early access program. Only 100
                  spots available for visionary leaders ready to build the
                  future.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary text-lg px-8 py-4 w-full sm:w-auto"
                  >
                    Apply for Membership
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-secondary text-lg px-8 py-4 w-full sm:w-auto"
                  >
                    Schedule a Call
                  </motion.button>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-sm text-alabaster/70"
            >
              <p>Join 500+ leaders already building the future</p>
              <p className="mt-1">Applications reviewed within 48 hours</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-3 h-3 bg-fresh-squeezed rounded-full opacity-60"
      />
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-10 w-4 h-4 bg-sunrise-orange rounded-full opacity-60"
      />
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-20 w-2 h-2 bg-fresh-squeezed rounded-full opacity-40"
      />
    </section>
  );
};

export default CallToActionSection;
