import React from "react";
import { Link } from "react-router";

const TermsOfService = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 dark:text-white">
      <div className="mb-10 text-center dark:text-white">
        <h1 className="text-4xl font-bold text-indigo-700 mb-4">
          Terms of Service
        </h1>
        <p className="text-gray-600">
          Last Updated: <span className="font-semibold">June 20, 2024</span>
        </p>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          1. Privacy Policy
        </h2>
        <p className="text-gray-700 mb-4">
          Your privacy is important to us. Our{" "}
          <a href="/privacy-policy" className="text-indigo-600 hover:underline">
            Privacy Policy
          </a>{" "}
          explains how we collect, use, and protect your personal data. By using
          our services, you consent to our privacy practices.
        </p>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          2. Rules for User Behavior
        </h2>
        <p className="text-gray-700 mb-4">
          To maintain a positive and professional community, all users must
          adhere to the following:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            <strong>Be respectful</strong> – Harassment, discrimination, or
            offensive behavior will not be tolerated.
          </li>
          <li>
            <strong>No spam or self-promotion</strong> – Engage meaningfully;
            excessive solicitation is prohibited.
          </li>
          <li>
            <strong>Comply with laws</strong> – Illegal activities or content
            are strictly forbidden.
          </li>
          <li>
            <strong>Event conduct</strong> – Disruptive behavior at our
            in-person or virtual events may result in removal.
          </li>
        </ul>
        <p className="text-gray-700 mt-4">
          Violations may lead to account suspension or termination.
        </p>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          3. Copyright Rules
        </h2>
        <p className="text-gray-700 mb-4">
          All content on our website (text, logos, graphics, event materials) is
          owned by <strong>LinkedIn Local Halifax</strong> or licensed to us.
          You may not:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            Reproduce, distribute, or modify our content without permission.
          </li>
          <li>Use our branding for unauthorized commercial purposes.</li>
          <li>Scrape or misuse data from our website.</li>
        </ul>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          4. Limitations on Liability & Disclaimers
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            <strong>No guarantees</strong> – We provide networking opportunities
            but do not guarantee job placements or business outcomes.
          </li>
          <li>
            <strong>Third-party links</strong> – We are not responsible for
            external websites linked from our platform.
          </li>
          <li>
            <strong>Event risks</strong> – Attendees participate in events at
            their own risk; we are not liable for injuries or damages.
          </li>
          <li>
            <strong>"As-is" service</strong> – We do not warrant uninterrupted
            or error-free access to our website.
          </li>
        </ul>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          5. Payment and Refund Details
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            <strong>Event tickets</strong> – Some events may require payment;
            details will be provided at registration.
          </li>
          <li>
            <strong>Refunds</strong> – Refund eligibility (if any) will be
            stated at checkout. No refunds for no-shows unless specified.
          </li>
          <li>
            <strong>Changes/cancellations</strong> – We reserve the right to
            modify or cancel events, with refunds issued if applicable.
          </li>
        </ul>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          6. Dispute Resolution
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            <strong>Negotiation first</strong> – Any disputes should first be
            discussed with us in good faith.
          </li>
          <li>
            <strong>Mediation/Arbitration</strong> – If unresolved, disputes may
            be settled through mediation or binding arbitration in Halifax, NS.
          </li>
          <li>
            <strong>Governing law</strong> – These Terms are governed by Nova
            Scotia laws.
          </li>
        </ul>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          7. Contact Information
        </h2>
        <p className="text-gray-700 mb-4">
          For questions or concerns regarding these Terms, please reach out to:
        </p>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-gray-700">
            <span role="img" aria-label="Email">
              📧
            </span>{" "}
            <strong>Email:</strong>{" "}
            <a
              href="mailto:contact@linkedinlocalhalifax.com"
              className="text-indigo-600 hover:underline"
            >
              contact@linkedinlocalhalifax.com
            </a>
          </p>
          <p className="text-gray-700 mt-2">
            <span role="img" aria-label="Address">
              📍
            </span>{" "}
            <strong>Address:</strong> [Arthur Irving Entrepreneurship Centre @
            Saint Mary's University – 5907 Gorsebrook Ave, Halifax. ]
          </p>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-gray-200">
        <p className="text-gray-600 text-sm">
          <strong>Note:</strong> We may update these Terms; changes will be
          posted here. Continued use means acceptance.
        </p>
        <p className="text-gray-600 text-sm mt-2">
          By participating in <strong>LinkedIn Local Halifax</strong>, you agree
          to these Terms.
        </p>
      </div>
      <div className="m-1">
        <Link to="/">
          <button className="border rounded-2xl w-1/2 p-2 m-2 hover: cursor-pointer hover:bg-primary hover:text-white border-primary font-bold">
            Go to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TermsOfService;
