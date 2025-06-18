import React, { useEffect, useState, useCallback } from "react";
import MainLayout from "../layout/MainLayout";
import { FaRegEnvelope } from "react-icons/fa6";
import { BsTelephone } from "react-icons/bs";
import { CiLocationOn, CiLinkedin, CiTwitter } from "react-icons/ci";
import { LuUserRound } from "react-icons/lu";
import { RiFacebookCircleLine } from "react-icons/ri";
import Envelop from "../assets/envelop.png";
import User from "../assets/user.png";
import Gps from "../assets/gps.png";
import Telephone from "../assets/telephone.png";

// AOS
import Aos from "aos";
import "aos/dist/aos.css"; // Import AOS styles

// Constants for validation and icons
const VALIDATION_RULES = {
  firstName: {
    required: true,
    minLength: 2,
    message: "First name must be at least 2 characters",
  },
  lastName: {
    required: true,
    minLength: 2,
    message: "Last name must be at least 2 characters",
  },
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: "Please enter a valid email address",
  },
  phone: {
    pattern: /^[+]?[\d\s\-()]{10,}$/,
    message: "Please enter a valid phone number",
  },
  message: {
    required: true,
    minLength: 10,
    message: "Message must be at least 10 characters",
  },
};

const ICONS = {
  firstName: <img src={User} alt="user icon" width={46} height={46} />,
  email: <img src={Envelop} alt="email icon" width={46} height={46} />,
  phone: <img src={Telephone} alt="phone icon" width={46} height={46} />,
};

const INITIAL_FORM_DATA = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};

export default function Contact() {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  // Memoized validation function
  const validateForm = useCallback(() => {
    const newErrors = {};

    Object.keys(formData).forEach((field) => {
      const value = formData[field].trim();
      const rules = VALIDATION_RULES[field];

      if (!rules) return;

      if (rules.required && !value) {
        newErrors[field] = `${
          field.charAt(0).toUpperCase() + field.slice(1)
        } is required`;
      } else if (rules.minLength && value.length < rules.minLength) {
        newErrors[field] = rules.message;
      } else if (
        rules.pattern &&
        value &&
        !rules.pattern.test(value.replace(/\s/g, ""))
      ) {
        newErrors[field] = rules.message;
      }
    });

    return newErrors;
  }, [formData]);

  // Handle input changes
  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));

      // Clear error when user starts typing
      if (errors[name]) {
        setErrors((prev) => ({
          ...prev,
          [name]: "",
        }));
      }
    },
    [errors]
  );
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Success - you would replace this with actual API call
      console.log("Form submitted:", formData);
      setSubmitStatus("success");

      // Reset form
      setFormData(INITIAL_FORM_DATA);
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Form field component to reduce repetition
  const FormField = ({
    name,
    label,
    type = "text",
    placeholder,
    isTextarea = false,
    icon,
  }) => (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 dark:text-text mb-2"
      >
        {label}
      </label>
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-0 flex items-center pointer-events-none">
            {icon}
          </div>
        )}
        {isTextarea ? (
          <textarea
            id={name}
            name={name}
            rows={6}
            value={formData[name] || ""}
            onChange={handleChange}
            placeholder={placeholder}
            className={`w-full px-4 py-3 rounded-lg bg-blue-50 focus:outline-none resize-none ${
              errors[name] ? "border-red-500" : "border-none"
            }`}
          />
        ) : (
          <input
            type={type}
            id={name}
            name={name}
            value={formData[name] || ""}
            onChange={handleChange}
            placeholder={placeholder}
            className={`w-full ${
              icon ? "pl-13" : "pl-4"
            } pr-4 py-3 rounded-lg bg-blue-50 focus:outline-none transition-colors ${
              errors[name] ? "border-red-500" : "border-none"
            }`}
          />
        )}
      </div>
      {errors[name] && (
        <p className="mt-1 text-sm text-red-600">{errors[name]}</p>
      )}
    </div>
  );

  useEffect(() => {
    Aos.init({
      duration: 3000,
    });
  }, []);
  return (
    <div>
      <MainLayout>
        <section className="mx-auto mt-4">
          <div className="mt-20">
            {/* Sponsors Contents */}
            <div className="md:p-5 md:ml-15" data-aos="fade-up">
              <div className="bg-primary w-[65px] h-8 items-center justify-center rounded-sm md:mt-20 mb-4 m-5">
                <button className="text-primary1 font-medium text-sm items-center justify-center p-1 dark:text-text">
                  Contact
                </button>
              </div>
              <div className="m-5">
                <h1 className="text-dark1 text-2xl md:text-4xl font-semibold dark:text-white">
                  Contact Us
                </h1>
                <p className="text-dark2 md:text-lg md:max-w-7xl font-normal mt-3 dark:text-text">
                  Have questions about LinkedIn Local Lagos 3.0? Interested in
                  partnering with us or becoming a sponsor? We’d love to hear
                  from you!
                </p>
              </div>
            </div>
          </div>
          {/* Contact form */}
          <div className="grid m-3 lg:grid-cols-3 gap-12 md:p-5 md:ml-15 ">
            <div
              className="lg:col-span-2 bg-neutral3 border-3 border-primary1 rounded-lg md:rounded-2xl dark:bg-footer1 dark:border-neutral"
              data-aos="fade-up"
            >
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-xl shadow-sm p-8 text-sm dark:bg-footer1 dark:border-neutral"
              >
                <div className="space-y-6">
                  {/* Name Fields Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      name="firstName"
                      label="First Name"
                      placeholder="Enter First Name"
                      icon={ICONS.firstName}
                    />
                    <FormField
                      name="lastName"
                      label="Last Name"
                      placeholder="Enter Last Name"
                      icon={ICONS.firstName} // Reusing the same icon
                    />
                  </div>

                  {/* Email and Phone Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      name="email"
                      label="Email"
                      type="email"
                      placeholder="Enter your Email"
                      icon={ICONS.email}
                    />
                    <FormField
                      name="phone"
                      label="Phone"
                      type="tel"
                      placeholder="Enter Phone Number"
                      icon={ICONS.phone}
                    />
                  </div>

                  {/* Message */}
                  <FormField
                    name="message"
                    label="Message"
                    placeholder="Enter your Message"
                    isTextarea={true}
                  />

                  {/* Submit Button */}
                  <div className="flex justify-center pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`px-8 py-3 rounded-lg font-medium transition-all duration-200 ${
                        isSubmitting
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-primary hover:bg-blue-600 transform cursor-pointer"
                      } text-white shadow-lg`}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        "SEND YOUR MESSAGE"
                      )}
                    </button>
                  </div>

                  {/* Status Messages */}
                  {submitStatus === "success" && (
                    <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-green-800 text-center">
                        ✅ Your message has been sent successfully!
                      </p>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-red-800 text-center">
                        ❌ Something went wrong. Please try again.
                      </p>
                    </div>
                  )}
                </div>
              </form>
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1" data-aos="fade-up">
              <ContactInfoSidebar />
            </div>
          </div>
        </section>
      </MainLayout>
    </div>
  );
}

// Extracted sidebar component for better organization
const ContactInfoSidebar = () => {
  const contactItems = [
    {
      icon: (
        <div className="pl-0">
          <img src={Envelop} alt="email icon" width={50} height={50} />
        </div>
      ),
      text: "support@halifax.com",
    },
    {
      icon: (
        <div className="pl-0">
          <img src={Telephone} alt="email icon" width={50} height={50} />
        </div>
      ),
      text: "+91 00000 00000",
    },
    {
      icon: (
        <div className="pl-0">
          <img src={Gps} alt="email icon" width={50} height={50} />
        </div>
      ),
      text: "Some where in the World",
    },
  ];

  const socialIcons = [
    {
      icon: <RiFacebookCircleLine className="w-5 h-5" />,
    },
    {
      icon: <CiTwitter className="w-5 h-5" />,
    },
    {
      icon: <CiLinkedin className="w-5 h-5" />,
    },
  ];

  return (
    <div>
      <div className="shadow-sm p-6 space-y-6 bg-neutral3 border-1 border-primary1 rounded-lg md:rounded-2xl">
        {contactItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center space-x-1 p-4 bg-blue-50 rounded-lg"
          >
            <div className="flex-shrink-0">{item.icon}</div>
            <span className="text-gray-700 text-sm">{item.text}</span>
          </div>
        ))}
      </div>
      <div className="justify-center items-center mt-5 shadow-sm p-6 bg-neutral3 border-1 border-primary1 rounded-lg md:rounded-2xl">
        <h3 className="text-sm font-medium text-gray-700 mb-4 text-center dark:text-text">
          Follow Us on Social Media
        </h3>
        <div className="flex space-x-3 text-center justify-center">
          {socialIcons.map((social, index) => (
            <a
              key={index}
              href="#"
              className="w-10 h-10 bg-blue-100 text-form rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
