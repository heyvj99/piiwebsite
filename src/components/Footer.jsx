import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaYoutube, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "About", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms", href: "#" },
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: FaLinkedin, href: "#" },
    { name: "Twitter", icon: FaTwitter, href: "#" },
    { name: "YouTube", icon: FaYoutube, href: "#" },
    { name: "Newsletter", icon: FaEnvelope, href: "#" },
  ];

  return (
    <footer className="relative bg-eerie-black text-white py-16 overflow-hidden">
      {/* Background overlay for depth */}
      <div className="absolute inset-0"></div>

      <div className="container-custom px-14 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-sunrise-orange mb-4">
                Post-Industrial Forum
              </h3>
              <p className="text-alabaster mb-6 leading-relaxed opacity-90">
                A private community for leaders shaping industries and
                organizations of tomorrow.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 backdrop-blur-sm border border-slate-600/50 rounded-lg flex items-center justify-center text-white hover:bg-sunrise-orange hover:border-sunrise-orange transition-all duration-300 shadow-lg"
                      title={social.name}
                    >
                      <IconComponent className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4 text-sunrise-orange">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {footerLinks.map((link, index) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-alabaster hover:text-sunrise-orange transition-colors duration-300 opacity-90 hover:opacity-100"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4 text-sunrise-orange">
                Contact
              </h4>
              <div className="space-y-3 text-alabaster opacity-90">
                <p className="hover:text-sunrise-orange transition-colors duration-300">
                  info@postindustrialforum.com
                </p>
                <p className="hover:text-sunrise-orange transition-colors duration-300">
                  +1 (555) 123-4567
                </p>
                <p className="hover:text-sunrise-orange transition-colors duration-300">
                  Silicon Valley, CA
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-slate-700/50 mt-12 pt-8 text-center text-alabaster"
        >
          <p className="text-sm opacity-90">
            © 2004–{currentYear} Post-Industrial Institute. All rights reserved.
          </p>
          <p className="text-xs mt-2 opacity-60">
            Building the future, one leader at a time.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
