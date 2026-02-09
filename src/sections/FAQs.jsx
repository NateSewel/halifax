import { useState, useEffect } from "react";
// import { ChevronDown, ChevronUp } from "lucide-react";
// import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { FaMinus, FaPlus } from "react-icons/fa6";
import emailjs from "@emailjs/browser";

const faqItems = [
  {
    question: "What is LinkedIn Local Halifax?",
    answer:
      "LinkedIn Local - Halifax is a conference styled meet-up by LinkedIn members in Halifax (organized by hosts, Jerome Nwoga & co), where attendees can meet their LinkedIn connections face to face to build & strengthen lifelong relationships. It will feature a mix of keynotes, breakout sessions, and panel discussions, all with the aim to provide actionable insights, discuss industry trends, and share best practices for using LinkedIn.",
  },
  {
    question: "Why Should I Attend?",
    answer:
      "LinkedIn Local Halifax offers an unparalleled opportunity to transform online connections into meaningful professional relationships. You'll gain insights from industry leaders, expand your network with quality contacts, and learn practical strategies to enhance your LinkedIn presence and professional growth.",
  },
  {
    question: "How Can I Contact The Organizers?",
    answer:
      "You can reach the organizers by emailing info@linkedinlocalhalifax.com. You can also send a message through the contact form on our website, and one of our team members will get back to you promptly.",
  },
  {
    question: "How Do I Become A Sponsor?",
    answer:
      "We offer various sponsorship packages designed to give your organization visibility among our professional audience. Please contact our sponsorship team at info@linkedinlocalhalifax.com for a detailed prospectus and to discuss how we can customize a partnership that aligns with your marketing goals.",
  },
];

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-footer border-1 border-primary1 rounded-lg md:rounded-2xl mb-4 p-3 md:p-5 dark:border-neutral">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left font-medium text-dark2 focus:outline-none"
      >
        <span className="text-dark2 font-bold p-3 dark:text-text">
          {question}
        </span>
        <div className="bg-linkedin text-primary1 rounded-full p-3 dark:text-text">
          {isOpen ? (
            <FaMinus
              size={35}
              className="bg-primary hover:bg-blue-800 p-2 rounded-full cursor-pointer border-4 border-pink-100 dark:border-error-red1 dark:text-white"
            />
          ) : (
            <FaPlus
              size={35}
              className="bg-primary hover:bg-blue-800 p-2 rounded-full border-4 cursor-pointer border-pink-100 dark:border-error-red1 dark:text-white"
            />
          )}
        </div>
      </button>

      {isOpen && (
        <div className="mt-1 bg-neutral3 dark:bg-neutral dark:rounded-lg">
          <div className="flex-grow h-px md:w-[480px] bg-dark4 ml-3"></div>
          <p className="text-sm text-start font-medium text-dark4 p-4 dark:text-white">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};

const FAQs = () => {
  const [question, setQuestion] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(""); // "success" or "error"

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      // Send email using EmailJS
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: name,
          from_email: email,
          question: question,
          to_email: "info@linkedinlocalhalifax.com",
        },
      );

      setSubmitStatus("success");
      // Reset the form
      setName("");
      setEmail("");
      setQuestion("");
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section className="container mx-auto md:px-16 py-12">
      <div className="bg-primary w-[50px] h-8 rounded-sm flex items-center justify-center mb-4">
        <span className="text-primary1 p-3 font-medium text-sm dark:text-text">
          FAQs
        </span>
      </div>
      <div className="mb-12">
        <h1 className="text-dark1 text-2xl md:text-4xl font-semibold mb-3 dark:text-white">
          Frequency Asked Questions
        </h1>
        <p className="text-dark2 md:text-lg max-w-6xl font-normal dark:text-text">
          Got Questions? We’ve Got Answers. Here are some of the most common
          questions about LinkedIn Local Halifax. If you need more info, don’t
          hesitate to reach out!
        </p>
      </div>
      {/* ================Section 2=============== */}
      <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 mt-10">
        <div className="w-full">
          {faqItems.map((item, index) => (
            <FAQItem key={index} {...item} />
          ))}
        </div>

        <div className="bg-neutral3 border-1 border-primary1 rounded-lg md:rounded-2xl w-full md:w-[561px] md:h-[570px] md:mt-0 mt-8 dark:bg-footer1 dark:border-neutral">
          <div className="p-2 md:p-12">
            <h3 className="text-lg text-dark5 font-bold mb-4 dark:text-text">
              ASK YOUR QUESTION
            </h3>
            <div className="flex-grow h-px md:w-[450px] bg-dark4 m-5 ml-0 dark:bg-text"></div>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-xs font-medium text-dark4 mb-1 dark:text-text"
                >
                  NAME
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full px-3 py-3 font-medium text-sm bg-neutral4 border-1 border-primary1 rounded-lg focus:outline-none focus:text-dark5 focus:font-normal dark:text-text dark:focus:text-white dark:border-neutral"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-xs font-medium text-dark4 mb-1 dark:text-text"
                >
                  EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-3 py-3 font-medium text-sm bg-neutral4 border-1 border-primary1 rounded-lg focus:outline-none focus:text-dark5 focus:font-normal dark:text-text dark:focus:text-white dark:border-neutral"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="question"
                  className="block text-xs font-medium text-dark4 mb-1 dark:text-text"
                >
                  YOUR QUESTION
                </label>
                <textarea
                  id="question"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  rows={4}
                  placeholder="Enter Your Question Here ....."
                  className="w-full px-3 py-3 font-medium text-sm bg-neutral4 border-1 border-primary1 rounded-lg focus:outline-none focus:text-dark5 focus:font-normal dark:text-text dark:focus:text-white dark:border-neutral"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-primary hover:bg-blue-700 cursor-pointer rounded-lg text-white font-bold py-3 dark:text-white ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                {isSubmitting ? "SENDING..." : "SEND YOUR MESSAGE"}
              </button>

              {submitStatus === "success" && (
                <p className="mt-4 text-green-600 font-medium text-center">
                  Thank you! Your question has been sent successfully.
                </p>
              )}
              {submitStatus === "error" && (
                <p className="mt-4 text-red-600 font-medium text-center">
                  Failed to send message. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
