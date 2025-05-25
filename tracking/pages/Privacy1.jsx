import React from "react";

const Privacy = () => {
  return (
    <section className="px-6 py-12 max-w-5xl mx-auto text-gray-800">
      <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>

      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-2">1. Information We Collect</h2>
          <p>
            We collect personal information you provide directly, such as your name, email, and usage data when you access or use our services.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">2. How We Use Information</h2>
          <p>
            Your information is used to operate and improve our services, respond to inquiries, personalize your experience, and send relevant updates.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">3. Sharing of Information</h2>
          <p>
            We do not sell your personal information. It may be shared with trusted third parties only for purposes outlined in this policy and under strict confidentiality agreements.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">4. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, or destruction.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">5. Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal data. Contact us if you wish to make such a request or opt-out of communications.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">6. Changes to this Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We encourage you to review it periodically. Continued use of the service implies acceptance of changes.
          </p>
        </div>

        <p className="text-sm text-gray-500 mt-12 text-center">
          Last updated: May 23, 2025
        </p>
      </div>
    </section>
  );
};

export default Privacy;
