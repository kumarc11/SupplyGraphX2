import { useState } from "react";

export default ({
  setCreateShipmentModel,
  createShipmentModel,
  createShipment,
}) => {
  const [shipment, setShipment] = useState({
    receiver: "",
    pickupTime: "",
    distance: "",
    price: "",
  });

  const createItem = async () => {
    try {
      await createShipment(shipment);
    } catch (error) {
      console.log("Wrong creating item");
    }
  };

  return createShipmentModel ? (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        className="fixed inset-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={() => setCreateShipmentModel(false)}
      ></div>
      <div className="flex items-center justify-center min-h-screen px-4 py-8">
        <div className="relative w-full max-w-md p-6 mx-auto bg-white rounded-xl shadow-xl transition-all transform">
          <div className="flex justify-end">
            <button
              className="p-2 text-gray-400 rounded-md hover:bg-gray-100"
              onClick={() => setCreateShipmentModel(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 mx-auto"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          <div className="py-2 text-center space-y-2">
            <h4 className="text-2xl font-bold text-gray-800">
              Create Automobile Shipment 📦
            </h4>
            <p className="text-sm text-gray-500">
              Enter Automobile shipment details carefully to generate a tracking ID.
            </p>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-4 space-y-4"
          >
            <div>
              <input
                type="text"
                placeholder="Receiver Address"
                className="w-full px-4 py-2 text-sm text-gray-700 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
                onChange={(e) =>
                  setShipment({ ...shipment, receiver: e.target.value })
                }
              />
            </div>
            <div>
              <input
                type="date"
                placeholder="Pickup Date"
                className="w-full px-4 py-2 text-sm text-gray-700 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
                onChange={(e) =>
                  setShipment({ ...shipment, pickupTime: e.target.value })
                }
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Distance in Km"
                className="w-full px-4 py-2 text-sm text-gray-700 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
                onChange={(e) =>
                  setShipment({ ...shipment, distance: e.target.value })
                }
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Price (POL)"
                className="w-full px-4 py-2 text-sm text-gray-700 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
                onChange={(e) =>
                  setShipment({ ...shipment, price: e.target.value })
                }
              />
            </div>

            <button
              onClick={() => createItem()}
              className="w-full py-3 font-semibold text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg transition duration-200"
            >
              ✅ Create Shipment
            </button>
          </form>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};
