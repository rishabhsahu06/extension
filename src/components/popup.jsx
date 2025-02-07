import React from "react";
import { X, MessageCircle, Settings } from "lucide-react";

const Popup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white w-[350px] rounded-2xl p-4">
        {/* Header */}
        <div className="flex items-center justify-between bg-green-900 text-white p-3 rounded-lg">
          <span className="text-lg font-semibold">Better buy</span>
          <div className="flex space-x-3">
            <MessageCircle size={20} />
            <Settings size={20} />
            <X size={20} className="cursor-pointer" onClick={onClose} />
          </div>
        </div>

        {/* Overall Grade */}
        <div className="bg-yellow-200 text-center p-5 rounded-lg mt-4">
          <p className="text-lg font-semibold">Overall grade</p>
          <p className="text-4xl font-bold">C</p>
        </div>

        {/* Grades List */}
        <div className="space-y-3 mt-4">
          {[
            { grade: "B", label: "Health", color: "bg-green-200", text: "bg-green-700" },
            { grade: "A", label: "Sustainability", color: "bg-green-300", text: "bg-green-700" },
            { grade: "C", label: "Labor Ethics", color: "bg-yellow-200", text: "bg-yellow-600" },
            { grade: "D", label: "Lifespan", color: "bg-red-300", text: "bg-red-700" },
            { grade: "F", label: "Product Markup", color: "bg-red-400", text: "bg-red-800" },
          ].map((item, index) => (
            <div key={index} className={`flex items-center justify-between ${item.color} p-3 rounded-lg`}>
              <span className={`text-white text-lg font-bold px-3 py-1 rounded ${item.text}`}>
                {item.grade}
              </span>
              <span className="text-lg">{item.label}</span>
              <span className="text-xl cursor-pointer">▼</span>
            </div>
          ))}
        </div>

        {/* Explore Alternatives */}
        <p className="font-semibold mt-5 text-lg">Explore Better Alternative</p>
        <div className="flex space-x-3 mt-3">
          {[
            { name: "Astrorun", brand: "Adidas", img: "/shoe1.png", grade: "A" },
            { name: "Galaxy 6", brand: "Adidas", img: "/shoe2.png", grade: "B" },
            { name: "Spark", brand: "Nike", img: "/shoe3.png", grade: "A" },
          ].map((item, index) => (
            <div key={index} className="bg-gray-100 p-2 rounded-lg w-[90px] text-center">
              <span className="text-white bg-green-700 px-2 py-1 text-sm font-bold rounded">{item.grade}</span>
              <img src={item.img} alt={item.name} className="w-full mt-1 rounded-md" />
              <p className="text-sm font-semibold">{item.name}</p>
              <p className="text-xs text-gray-500">{item.brand}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popup;
