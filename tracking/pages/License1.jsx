import React from "react";

const License = () => {
  return (
    <section className="px-6 py-12 max-w-5xl mx-auto text-gray-800">
      <h1 className="text-4xl font-bold mb-8 text-center">License Agreement</h1>

      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-2">1. Grant of License</h2>
          <p>
            We grant you a non-exclusive, non-transferable, revocable license to use our software/service for personal or commercial purposes, subject to these terms.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">2. Restrictions</h2>
          <p>
            You may not modify, reverse-engineer, distribute, sublicense, or exploit the service without our prior written consent. Unauthorized use terminates the license.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">3. Ownership</h2>
          <p>
            All rights, title, and interest in the service and its content remain with the original creators or licensors. This license does not transfer any intellectual property rights.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">4. Termination</h2>
          <p>
            We may suspend or terminate your access at any time if you breach these terms. Upon termination, you must cease all use of the service and destroy any copies.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">5. Disclaimer</h2>
          <p>
            The service is provided "as is" without warranties of any kind. We are not liable for any issues that may arise from your use of the service.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">6. Changes to License</h2>
          <p>
            We reserve the right to update this license at any time. Continued use after changes implies your acceptance of the updated terms.
          </p>
        </div>

        <p className="text-sm text-gray-500 mt-12 text-center">
          Last updated: May 23, 2025
        </p>
      </div>
    </section>
  );
};

export default License;
