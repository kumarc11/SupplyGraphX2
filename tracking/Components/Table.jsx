export default ({ setCreateShipmentModel, allShipmentsdata }) => {
  const converTime = (time) => {
    const newTime = new Date(time);
    const dataTime = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(newTime);

    return dataTime;
  };

  console.log(allShipmentsdata);

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-12">
      <div className="items-start justify-between md:flex">
        <div className="max-w-lg">
          <h3 className="text-gray-900 text-3xl font-bold sm:text-4xl">
            🚗 Create Automotive Tracking
          </h3>
          <p className="text-gray-600 mt-3 text-base leading-relaxed">
            Easily create and track shipments in real-time. Monitor every move
            across the automotive supply chain with blockchain-backed transparency.
          </p>
        </div>
        <div className="mt-6 md:mt-0">
          <p
            onClick={() => setCreateShipmentModel(true)}
            href="javascript:void(0)"
            className="inline-block px-6 py-3 text-white font-semibold bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 transition rounded-lg shadow-md cursor-pointer"
          >
            ➕ Add Tracking
          </p>
        </div>
      </div>

      <div className="mt-12 overflow-x-auto bg-white border border-gray-200 rounded-2xl shadow-sm">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-indigo-50 text-gray-700 font-semibold uppercase text-xs tracking-wider">
            <tr>
              <th className="py-4 px-6">Sender</th>
              <th className="py-4 px-6">Receiver</th>
              <th className="py-4 px-6">Pickup Time</th>
              <th className="py-4 px-6">Distance</th>
              <th className="py-4 px-6">Price</th>
              <th className="py-4 px-6">Delivery Time</th>
              <th className="py-4 px-6">Paid</th>
              <th className="py-4 px-6">Status</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 divide-y divide-gray-100">
            {allShipmentsdata?.map((shipment, idx) => (
              <tr
                key={idx}
                className="hover:bg-indigo-50 transition duration-150"
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  {shipment.sender.slice(0, 15)}...
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {shipment.receiver.slice(0, 15)}...
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {converTime(shipment.pickupTime)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {shipment.distance} Km
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                   {shipment.price} POL
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {shipment.deliveryTime}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                      shipment.isPaid
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {shipment.isPaid ? "Completed" : "Not Complete"}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                      shipment.status === 0
                        ? "bg-yellow-100 text-yellow-700"
                        : shipment.status === 1
                        ? "bg-blue-100 text-blue-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {shipment.status === 0
                      ? "Pending"
                      : shipment.status === 1
                      ? "IN_TRANSIT"
                      : "Delivered"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
