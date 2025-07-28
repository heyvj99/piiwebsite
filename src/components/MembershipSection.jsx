import { motion } from "framer-motion";
import { useState } from "react";

const MembershipSection = () => {
  const [billingPeriod, setBillingPeriod] = useState("yearly");

  const plans = [
    {
      name: "Executive Membership",
      price: billingPeriod === "yearly" ? "$1,450" : "$145",
      period: billingPeriod === "yearly" ? "/year" : "/month",
      features: [
        "Quarterly Sessions, Workshops",
        "Academy course access",
        "Event archive",
        "Online platform and peer roundtables",
      ],
      popular: false,
    },
    {
      name: "Organizational Membership",
      price: billingPeriod === "yearly" ? "$6,500" : "$650",
      period: billingPeriod === "yearly" ? "/year" : "/month",
      features: [
        "3 Executive memberships included",
        "Private working group access",
        "Facilitated intros and event planning support",
        "All Executive benefits",
      ],
      popular: true,
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom px-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[3rem] font-semibold text-gray-700 uppercase leading-tight tracking-{-0.015} mb-6">
            Choose Your Membership
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Select the plan that best fits your organization's needs and goals
          </p>
        </motion.div>

        {/* Billing Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="flex items-center bg-gray-100 rounded-full p-1">
            <button
              onClick={() => setBillingPeriod("yearly")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                billingPeriod === "yearly"
                  ? "bg-slate-800 text-white shadow-sm"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              Yearly
            </button>
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                billingPeriod === "monthly"
                  ? "bg-sunrise-orange text-white shadow-sm"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              Monthly
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative bg-white rounded-lg p-8 shadow-lg border ${
                plan.popular
                  ? "ring-2 ring-sunrise-orange shadow-xl bg-gradient-to-br from-orange-50 to-pink-50"
                  : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-sunrise-orange text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-eerie-black mb-4">
                  {plan.name}
                </h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-eerie-black">
                    {plan.price}
                  </span>
                  <span className="text-xl text-eerie-black">
                    {plan.period}
                  </span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-sunrise-orange rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-eerie-black">{feature}</span>
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-4 px-6 rounded-sm font-semibold transition-all duration-300 bg-eerie-black text-white hover:bg-gray-800 flex items-center justify-center gap-2"
              >
                Apply Now
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
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12 flex flex-row items-center justify-center gap-4"
        >
          <p className="text-lg text-eerie-black">
            Not sure which plan is right for you?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Apply Now
            </motion.button> */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
            >
              Schedule a Call
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MembershipSection;
