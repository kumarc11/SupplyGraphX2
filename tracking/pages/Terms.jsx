import React from "react";

const Terms = () => {
  return (
    <section className="px-6 py-12 max-w-5xl mx-auto text-gray-800">
      <h1 className="text-4xl font-bold mb-8 text-center">Terms & Conditions</h1>

      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-2">1. Acceptance of Terms</h2>
          <p>
            By accessing and using this website or service, you agree to be bound by these terms and conditions. If you do not agree to them, please do not use this service.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">2. Use of the Service</h2>
          <p>
            You may use our service only for lawful purposes and in accordance with these terms. Unauthorized use may result in termination of access.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">3. Intellectual Property</h2>
          <p>
            All content, design elements, trademarks, and data are owned by or licensed to us. No part of the content may be copied or reproduced without prior written permission.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">4. Limitation of Liability</h2>
          <p>
            We shall not be held responsible for any damages arising from your use of the service, including but not limited to data loss, unauthorized access, or interruptions.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">5. Modifications</h2>
          <p>
            We reserve the right to modify these terms at any time. Continued use of the service after any changes constitutes your acceptance of the revised terms.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">6. Governing Law</h2>
          <p>
            These terms are governed by the laws of the applicable jurisdiction. Any disputes will be handled in the courts of that jurisdiction.
          </p>
        </div>

        <p className="text-sm text-gray-500 mt-12 text-center">
          Last updated: May 23, 2025
        </p>
      </div>
    </section>
  );
};

export default Terms;
