import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-indigo-700 mb-4">
          Privacy Policy
        </h1>
        <p className="text-gray-600">
          Last Updated: <span className="font-semibold">June 20, 2024</span>
        </p>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          1. Information We Collect
        </h2>
        <p className="text-gray-700 mb-4">
          We collect the following types of information when you use our website
          or attend our events:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            <strong>Personal Data:</strong> Name, email, LinkedIn profile, job
            title.
          </li>
          <li>
            <strong>Event Data:</strong> Attendance, feedback, interactions.
          </li>
          <li>
            <strong>Technical Data:</strong> IP address, browser type, cookies.
          </li>
        </ul>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          2. How We Use Your Data
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>To organize and manage events.</li>
          <li>To send updates and promotional emails (opt-out available).</li>
          <li>To improve our services and user experience.</li>
          <li>To comply with legal obligations.</li>
        </ul>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          3. Data Sharing & Third Parties
        </h2>
        <p className="text-gray-700 mb-4">
          We do not sell your data. We may share it with:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            <strong>Event partners</strong> (only if necessary for event
            coordination).
          </li>
          <li>
            <strong>Service providers</strong> (e.g., email platforms, analytics
            tools).
          </li>
          <li>
            <strong>Legal authorities</strong> (if required by law).
          </li>
        </ul>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          4. Cookies & Tracking
        </h2>
        <p className="text-gray-700 mb-4">We use cookies to:</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Analyze website traffic.</li>
          <li>Remember user preferences.</li>
        </ul>
        <p className="text-gray-700 mt-4">
          You can disable cookies in your browser settings.
        </p>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          5. Your Rights
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            <strong>Access:</strong> Request a copy of your data.
          </li>
          <li>
            <strong>Correction:</strong> Update inaccurate information.
          </li>
          <li>
            <strong>Deletion:</strong> Ask us to delete your data.
          </li>
          <li>
            <strong>Opt-out:</strong> Unsubscribe from marketing emails.
          </li>
        </ul>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          6. Data Security
        </h2>
        <p className="text-gray-700 mb-4">
          We implement industry-standard security measures, including encryption
          and secure servers, to protect your data.
        </p>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          7. Changes to This Policy
        </h2>
        <p className="text-gray-700 mb-4">
          We may update this policy. Changes will be posted here, and
          significant updates will be communicated via email.
        </p>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          8. Contact Us
        </h2>
        <p className="text-gray-700 mb-4">
          For privacy-related questions, contact:
        </p>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-gray-700">
            <span role="img" aria-label="Email">
              📧
            </span>{" "}
            <strong>Email:</strong>{" "}
            <a
              href="mailto:privacy@linkedinlocalhalifax.com"
              className="text-indigo-600 hover:underline"
            >
              privacy@linkedinlocalhalifax.com
            </a>
          </p>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-gray-200">
        <p className="text-gray-600 text-sm">
          By using LinkedIn Local Halifax, you agree to this Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
