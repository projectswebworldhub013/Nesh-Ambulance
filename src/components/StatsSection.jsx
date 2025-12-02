// src/components/StatsSection.jsx
import React from "react";
import {
  FaMapMarkerAlt,
  FaBuilding,
  FaTruck,
  FaUsers,
  FaSatelliteDish,
  FaLightbulb,
  FaWarehouse,
  FaEye,
  FaClipboardCheck,
} from "react-icons/fa";

const statsData = [
  { icon: <FaMapMarkerAlt />, title: "Service Locations", value: "1264+" },
  { icon: <FaBuilding />, title: "Branches PAN India", value: "140+" },
  { icon: <FaTruck />, title: "Moves Annually", value: "132060+" },
  { icon: <FaUsers />, title: "Trained Manpower", value: "" },
  { icon: <FaTruck />, title: "Trucking Cube (Container)", value: "3000+" },
  { icon: <FaSatelliteDish />, title: "GPS Enabled Vehicles", value: "1600+" },
  { icon: <FaLightbulb />, title: "Innovative Technology", value: "" },
  { icon: <FaWarehouse />, title: "Warehouse Space", value: "25 Lac sq. ft" },
  { icon: <FaEye />, title: "Online Consignment Tracking", value: "" },
  { icon: <FaClipboardCheck />, title: "Free Pre-Move Survey", value: "" },
];

const StatsSection = () => {
  return (
    <section className="bg-white py-12 px-6">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#453C6C]">
          Why Choose Instant Packers & Movers?
        </h2>
        <div className="w-24 h-1 bg-[#F9A730] mx-auto mt-3 rounded-full"></div>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Delivering trust and efficiency through strong infrastructure, expert manpower, 
          and innovative solutions across India.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2">
        {statsData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-white rounded-lg border border-gray-200 p-6 text-center hover:border-[#F9A730] transition-all"
          >
            <div className="text-3xl text-[#F9A730] mb-2">{item.icon}</div>
            <h3 className="text-base font-medium text-[#453C6C]">
              {item.title}
            </h3>
            {item.value && (
              <p className="text-sm text-gray-500 mt-1">{item.value}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
