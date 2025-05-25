import images from "../Images/index";
import Image from "next/image";

export default ({
  setOpenProfile,
  setCompleteModal,
  setGetModel,
  setStartModal,
}) => {
  const team = [
    {
      avatar: images.startShipment,
      title: "Start Automobile Shipment",
      description: "Initiate a new shipment after entering the ID and Receiver's Wallet address.",
    },
    {
      avatar: images.getShipment,
      title: "Get Automobile Shipment Details",
      description: "Retrieve details.",
    },
    {
      avatar: images.compShipment,
      title: "Complete Automobile Shipment",
      description: "Mark a shipment as complete. And store in POL blockchain",
    },
    {
      avatar: images.userProfile,
      title: "User Profile",
      description: "View user profile info.",
    },
  ];

  const openModelBox = (text) => {
    if (text === 1) setStartModal(true);
    else if (text === 2) setGetModel(true);
    else if (text === 3) setCompleteModal(true);
    else if (text === 4) setOpenProfile(true);
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">SupplyGraphX: Automobile Supply Chain Management System!</h2>
          <p className="mt-2 text-gray-600">Supply Smarter. Drive Further.</p>
        </div>

        <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-2">
          {team.map((item, i) => (
            <li key={i}>
              <div
                onClick={() => openModelBox(i + 1)}
                className="cursor-pointer bg-white p-4 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 h-full flex flex-col items-center text-center"
              >
                <div className="w-full h-48 mb-4 overflow-hidden rounded-xl">
                  <Image
                    src={item.avatar}
                    className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                    alt={item.title}
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
