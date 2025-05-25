import React from "react";

const team = [
  {
    name: "Chetan Kumar",
    role: "Founder & CEO",
    description:
      "Leading the mission to revolutionize Automobile supply chain tracking through blockchain innovation and strategic vision.",
    emoji: "🧑‍💼",
  },
  {
    name: "Chetan Kumar",
    role: "Blockchain Engineer",
    description:
      "Architecting secure smart contracts and backend systems to ensure trust, transparency, and traceability.",
    emoji: "🛠️",
  },
  {
    name: "Hemant",
    role: "UI/UX Designer",
    description:
      "Crafting clean, intuitive, and modern interfaces that enhance the user experience across all platforms.",
    emoji: "🎨",
  },
  {
    name: "Praduman",
    role: "UI/UX Designer",
    description:
      "Focused on design systems and frontend workflows to deliver consistent and engaging visuals.",
    emoji: "💡",
  },
  {
    name: "Amarjeet",
    role: "Data Analyst",
    description:
      "Transforming raw supply data into actionable insights and optimizing the decision-making process.",
    emoji: "📊",
  },
  {
    name: "Chirag Pathania",
    role: "React.js Developer",
    description:
      "Developed core frontend architecture, ensuring responsive design and seamless user interaction.",
    emoji: "⚛️",
  },
];

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6 text-blue-600">
          About Supply Graph X
        </h1>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Supply Graph X is transforming how Automobile supply chains operate and managed. We bring
          blockchain, smart contracts, and analytics together to make global
          logistics **transparent**, **efficient**, and **secure**.
        </p>

        <h2 className="text-3xl font-bold text-center mb-6 text-gray-700">
          Meet Our Team
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition"
            >
              <div className="text-4xl mb-4">{member.emoji}</div>
              <h3 className="text-xl font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-sm text-blue-500 mb-2">{member.role}</p>
              <p className="text-gray-600">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
