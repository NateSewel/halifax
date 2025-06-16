import { useState } from "react";
// import { ChevronDown, ChevronUp } from "lucide-react";
// import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { FaMinus, FaPlus } from "react-icons/fa6";

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
      "You can reach the organizers by emailing info@linkedinlocalhalifax.com or by calling 1800 123 4567. You can also send a message through the contact form on our website, and one of our team members will get back to you promptly.",
  },
  {
    question: "How Do I Become A Sponsor?",
    answer:
      "We offer various sponsorship packages designed to give your organization visibility among our professional audience. Please contact our sponsorship team at sponsors@linkedinlocalhalifax.com for a detailed prospectus and to discuss how we can customize a partnership that aligns with your marketing goals.",
  },
];

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-footer border-1 border-primary1 rounded-lg md:rounded-2xl mb-4 p-3 md:p-5">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left font-medium text-dark2 focus:outline-none"
      >
        <span className="text-dark2 font-bold p-3">{question}</span>
        <div className="bg-linkedin text-primary1 rounded-full p-3">
          {isOpen ? (
            <FaMinus
              size={35}
              className="bg-primary hover:bg-blue-800 p-2 rounded-full cursor-pointer border-4 border-pink-100"
            />
          ) : (
            <FaPlus
              size={35}
              className="bg-primary hover:bg-blue-800 p-2 rounded-full border-4 cursor-pointer border-pink-100"
            />
          )}
        </div>
      </button>

      {isOpen && (
        <div className="mt-1 bg-neutral3">
          <div className="flex-grow h-px md:w-[480px] bg-dark4 ml-3"></div>
          <p className="text-sm text-start font-medium text-dark4 p-4">
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Question submitted:", { name, email, question });
    // Reset the form
    setName("");
    setEmail("");
    setQuestion("");
    alert("Thank you for your question! We'll get back to you soon.");
  };
  return (
    <section className="container mx-auto px-6 md:px-16 py-12">
      <div className="bg-primary w-[50px] h-8 rounded-sm flex items-center justify-center mb-4">
        <span className="text-primary1 p-3 font-medium text-sm">FAQs</span>
      </div>
      <div className="mb-12">
        <h1 className="text-dark1 text-2xl md:text-4xl font-semibold mb-3">
          Frequency Asked Questions
        </h1>
        <p className="text-dark2 md:text-lg max-w-6xl font-normal">
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

        <div className="bg-neutral3 border-1 border-primary1 rounded-lg md:rounded-2xl w-full md:w-[561px] md:h-[570px] md:mt-0 mt-8">
          <div className="p-2 md:p-12">
            <h3 className="text-lg text-dark5 font-bold mb-4">
              ASK YOUR QUESTION
            </h3>
            <div className="flex-grow h-px md:w-[450px] bg-dark4 m-5 ml-0"></div>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-xs font-medium text-dark4 mb-1"
                >
                  NAME
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full px-3 py-3 font-medium text-sm bg-neutral4 border-1 border-primary1 rounded-lg focus:outline-none focus:text-dark5 focus:font-normal"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-xs font-medium text-dark4 mb-1"
                >
                  EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-3 py-3 font-medium text-sm bg-neutral4 border-1 border-primary1 rounded-lg focus:outline-none focus:text-dark5 focus:font-normal"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="question"
                  className="block text-xs font-medium text-dark4 mb-1"
                >
                  YOUR QUESTION
                </label>
                <textarea
                  id="question"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  rows={4}
                  placeholder="Enter Your Question Here ....."
                  className="w-full px-3 py-3 font-medium text-sm bg-neutral4 border-1 border-primary1 rounded-lg focus:outline-none focus:text-dark5 focus:font-normal"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-blue-700 cursor-pointer rounded-lg text-white font-bold py-3"
              >
                SEND YOUR MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
