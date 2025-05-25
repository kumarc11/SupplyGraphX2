import { useState } from "react";

export default ({ getModel, setGetModel, getShipment }) => {
  const [index, setIndex] = useState(0);
  const [singleShipmentData, setSingleShipmentData] = useState();

  const getshipmentData = async (index) => {
    const getData = await getShipment(index);
    setSingleShipmentData(getData);
    console.log(getData);
  };

  const converTime = (time) => {
    if (!time) return "Invalid Date";
    const newTime = new Date(time);
    const dataTime = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }).format(newTime);
    return dataTime;
  };

  return getModel ? (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        className="fixed inset-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={() => setGetModel(false)}
      ></div>
      <div className="flex items-center justify-center min-h-screen px-4 py-8">
        <div className="relative w-full max-w-lg p-6 mx-auto bg-white rounded-xl shadow-xl transition-all transform">
          <div className="flex justify-end">
            <button
              className="p-2 text-gray-400 rounded-md hover:bg-gray-100"
              onClick={() => setGetModel(false)}
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
              Tracking Details 🚚 
            </h4>
            <p className="text-sm text-gray-500">
              Enter shipment ID to get full tracking info.
            </p>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-4 space-y-4"
          >
            <div>
              <input
                type="number"
                placeholder="Shipment ID"
                className="w-full px-4 py-2 text-sm text-gray-700 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
                onChange={(e) => setIndex(e.target.value)}
              />
            </div>

            <button
              onClick={() => getshipmentData(index)}
              className="w-full py-3 font-semibold text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg transition duration-200"
            >
              🔍 Get Details
            </button>
          </form>

          {singleShipmentData && (
            <div className="mt-6 text-left space-y-2 bg-gray-50 p-4 rounded-lg text-sm text-gray-700">
              <p>
                <strong>Sender:</strong>{" "}
                {singleShipmentData.sender.slice(0, 25)}...
              </p>
              <p>
                <strong>Receiver:</strong>{" "}
                {singleShipmentData.receiver.slice(0, 25)}...
              </p>
              <p>
                <strong>Pickup Time:</strong>{" "}
                {converTime(singleShipmentData.pickupTime)}
              </p>
              <p>
                <strong>Delivery Time:</strong>{" "}
                {converTime(singleShipmentData.pickupTime)} {/* Same as pickup */}
              </p>
              <p>
                <strong>Distance:</strong> {singleShipmentData.distance} km
              </p>
              <p>
                <strong>Price:</strong> POL{singleShipmentData.price}
              </p>
              <p>
                <strong>Status:</strong> {singleShipmentData.status}
              </p>
              <p>
                <strong>Payment:</strong>{" "}
                {singleShipmentData.isPaid ? "✅ Complete" : "❌ Not Complete"}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};
