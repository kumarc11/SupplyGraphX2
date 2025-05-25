import React from "react";

const services = [
  {
    title: "Supply Chain Tracking",
    description:
      "Monitor and trace products at every step with real-time blockchain-based tracking.",
    icon: "📦",
  },
  {
    title: "Smart Contracts",
    description:
      "Automate processes using Ethereum smart contracts to ensure trust and transparency.",
    icon: "📝",
  },
  {
    title: "Shipment Analytics",
    description:
      "Get powerful data insights on delivery times, routes, and supply efficiency.",
    icon: "📊",
  },
  {
    title: "POL & ERC20 Token Support",
    description:
      "Integrate and interact with custom tokens for payments and tracking.",
    icon: "💰",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 text-blue-600">
          Our Services
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-700">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
