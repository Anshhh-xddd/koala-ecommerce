import React, { useState } from "react";

function Aibutton() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative bg-gray-50 overflow-hidden">
      {/* Floating Button */}
      <button
        onClick={togglePanel}
        className={`
          fixed bottom-10 z-50 w-16 h-16 text-white rounded-full flex items-center justify-center 
          shadow-lg hover:shadow-2xl transition-transform duration-300
          ${isOpen ? "bg-red-500 right-24" : "bg-gray-700 right-10"}
        `}
      >
        <span className="text-2xl font-bold">
          {isOpen ? "✖" : "..."}
        </span>
      </button>

      {/* Sliding Panel */}
      <div
        className={`
          fixed top-0 right-0 h-screen w-80 bg-gray-200 
          rounded-l-3xl shadow-2xl z-40 transition-transform duration-300 
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={togglePanel}
            className="text-gray-600 hover:text-gray-800"
          >
            ✖
          </button>
        </div>

        {/* Panel Content */}
        <div className="p-6 space-y-4">
          {/* Menu Items */}
          <ul className="space-y-4 text-gray-700 text-sm">
            <li className="flex justify-between cursor-pointer hover:font-semibold">
              About Koala <span>&gt;</span>
            </li>
            <li className="flex justify-between cursor-pointer hover:font-semibold">
              Our Products <span>&gt;</span>
            </li>
            <li className="flex justify-between cursor-pointer hover:font-semibold">
              Boxing Day Sale <span>&gt;</span>
            </li>
            <li className="flex justify-between cursor-pointer hover:font-semibold">
              Shipping and Delivery <span>&gt;</span>
            </li>
            <li className="flex justify-between cursor-pointer hover:font-semibold">
              Koala's 120 Night Trial <span>&gt;</span>
            </li>
          </ul>

          {/* Action Buttons */}
          <div className="space-y-4 mt-6">
            {/* Track Orders */}
            <div className="flex items-center gap-2 p-4 bg-gray-300 rounded-lg hover:bg-gray-400 cursor-pointer">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center shadow">
                📦
              </div>
              <span className="text-sm font-semibold">Track and manage my orders</span>
            </div>

            {/* Customer Service Chat */}
            <div className="flex items-center gap-2 p-4 bg-green-300 rounded-lg hover:bg-green-400 cursor-pointer">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center shadow">
                💬
              </div>
              <span className="text-sm font-semibold">Koala Customer Service Chat</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-gray-600">
          Powered by <span className="font-semibold">gorgias</span>
        </div>
      </div>
    </div>
  );
}

export default Aibutton;
