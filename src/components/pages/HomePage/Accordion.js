
import React, { useState } from "react";

export const Accordion = (): JSX.Element => {
  const [activeElement, setActiveElement] = useState("");

  const handleClick = (value: string) => {
    setActiveElement(value === activeElement ? "" : value);
  };

  const faqData = [
    {
      question: "How Does the One Connection at a Time Feature Work?",
      answer:
        "Once you match with someone on Tulip, you can focus solely on that individual, promoting more meaningful conversations and connections. You won't be able to make another connection until you decide to move on or the connection naturally fades, ensuring a dedicated and focused dating experience.",
    },
    {
      question: "Is Tulip Safe to Use?",
      answer: "Safety is our top priority. Tulip incorporates robust security features and protocols to ensure the privacy and safety of our users. We encourage a respectful and kind interaction space and have measures in place to report and block malicious users."
    },
    {
      question: "How Do I Set Up My Profile on Tulip?",
      answer: "Setting up your profile is simple. Download the Tulip app, follow the on-screen instructions to create an account, and fill in your profile information. You can customize your profile to showcase your personality, interests, and what you’re looking for in a connection."
    },
    {
      question: "What type of relationships does Tulip promote?",
      answer: "Tulip encourages users to form serious and meaningful one-to-one relationships based on honesty and deep connection. Our platform is tailored to support individuals seeking committed partnerships and those who value authenticity and genuine interactions."
    }
    
    // ... Add other FAQs here
  ];

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <h2 className="mb-8 text-4xl tracking-tight text-center font-extrabold text-gray-900 dark:text-white">
          Frequently Asked Questions 🤔
        </h2>
        <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
          {faqData.map((faq, index) => (
            <div key={index} className="mb-10">
              <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                <svg
                  className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                {faq.question}
              </h3>
              <div
                className={`${
                  activeElement === `element${index}` ? "block" : "hidden"
                } text-gray-500 dark:text-gray-400`}
              >
                {faq.answer}
              </div>
              <button
                onClick={() => handleClick(`element${index}`)}
                aria-expanded={activeElement === `element${index}`}
                aria-controls={`faq${index}`}
                className="text-primary-600 dark:text-primary-500 hover:underline"
              >
                {activeElement === `element${index}` ? "Less" : "More"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
