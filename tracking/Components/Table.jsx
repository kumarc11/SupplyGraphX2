import React, { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default ({ setCreateShipmentModel, allShipmentsdata }) => {
  const [showChart, setShowChart] = useState(false);

  const converTime = (time) => {
    const newTime = new Date(time);
    const dataTime = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(newTime);

    return dataTime;
  };

  const exportToCSV = () => {
    const headers = [
      "Sender",
      "Receiver",
      "Pickup Time",
      "Distance",
      "Price",
      "Delivery Time",
      "Paid",
      "Status",
    ];
    const rows = allShipmentsdata.map((shipment) => [
      shipment.sender,
      shipment.receiver,
      new Date(shipment.pickupTime).toLocaleDateString(),
      shipment.distance,
      shipment.price,
      shipment.deliveryTime,
      shipment.isPaid ? "Completed" : "Not Complete",
      shipment.status === 0
        ? "Pending"
        : shipment.status === 1
        ? "IN_TRANSIT"
        : "Delivered",
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers, ...rows].map((e) => e.join(",")).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "shipments_data.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const chartData = allShipmentsdata?.map((shipment, idx) => ({
    name: `#${idx + 1}`,
    value: Number(shipment.price),
  }));

  const COLORS = [
    "#8884d8",
    "#82ca9d",
    "#ffc658",
    "#ff8042",
    "#8dd1e1",
    "#a4de6c",
    "#d0ed57",
    "#ffc0cb",
    "#d88884",
    "#84d8d8",
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-12">
      
      <div className="flex gap-4 mb-6">
        <button
          onClick={exportToCSV}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-green-500"
        >
          📤 Export CSV
        </button>
        <button
          onClick={() => setShowChart((prev) => !prev)}
          className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-500"
        >
          📊 {showChart ? "Hide Graph" : "Show Graph"}
        </button>
      </div>

      {/* Chart Display */}
      {showChart && (
        <div className="bg-white p-4 mb-10 rounded shadow">
          <h2 className="text-xl font-bold mb-4">Automobile Shipment Data</h2>
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={120}
                fill="#8884d8"
                label={({ name, value }) => `${name}: ${value} POL`}
              >
                {chartData.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      )}

      <div className="items-start justify-between md:flex">
        <div className="max-w-lg">
          <h3 className="text-gray-900 text-3xl font-bold sm:text-4xl">
            Create Automotive Tracking 🚗 
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
