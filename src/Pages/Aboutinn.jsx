import React from "react";

function Aboutinn() {
  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* Section: Header */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Four reasons to love the Cushy Sofa Bed
      </h1>

      {/* Section: Four Features */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
        {[
          { title: "Easy Fold-out", desc: "Quickly transforms from sofa to bed in seconds." },
          { title: "Sleep Comfort", desc: "Built-in cushioning ensures restful sleep." },
          { title: "Multi-use pillows", desc: "Extra soft pillows for lounging and sleeping." },
          { title: "Supported Back", desc: "Ergonomic design for optimal back support." },
        ].map((feature, index) => (
          <div key={index} className="text-center">
            <img
              src={`https://via.placeholder.com/150?text=${feature.title}`}
              alt={feature.title}
              className="mx-auto mb-2 rounded-lg"
            />
            <h3 className="font-semibold mb-1">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.desc}</p>
          </div>
        ))}
      </div>

      {/* Section: Winner */}
      <div className="text-center mb-16">
        <h2 className="text-2xl font-semibold mb-4">You're onto a winner</h2>
        <p className="text-gray-600 mx-auto max-w-2xl mb-8">
          With award-winning design and unbeatable comfort, the Cushy Sofa Bed is loved by Australians nationwide.
        </p>
        <img
          src="https://via.placeholder.com/800x400"
          alt="Cushy Sofa Bed"
          className="w-full rounded-lg shadow-lg"
        />
      </div>

      {/* Section: Content Blocks */}
      <div className="space-y-12">
        {/* Section 1 */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src="https://via.placeholder.com/400x300"
            alt="Furniture worth keeping"
            className="w-full md:w-1/2 rounded-lg"
          />
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4">Buy furniture worth keeping.</h3>
            <p className="text-gray-600">
              Our furniture is made with timeless design and top-quality materials, ensuring durability for years to come.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          <img
            src="https://via.placeholder.com/400x300"
            alt="Down with Allen keys"
            className="w-full md:w-1/2 rounded-lg"
          />
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4">Down with Allen keys!</h3>
            <p className="text-gray-600">
              No more fumbling with tricky tools. Our furniture is simple to assemble without needing extra effort.
            </p>
          </div>
        </div>
      </div>

      {/* Section: Final Grid */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Furniture that gives a f*ck.</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {[
            { title: "1% for the Planet", desc: "1% of sales are donated to environmental causes.", img: "https://via.placeholder.com/150" },
            { title: "B Corp Certified", desc: "We meet the highest social and environmental standards.", img: "https://via.placeholder.com/150" },
            { title: "WWF Partnership", desc: "Supporting WWF to protect wildlife and the environment.", img: "https://via.placeholder.com/150" },
            { title: "Koala Second Home", desc: "Providing furniture for families in need.", img: "https://via.placeholder.com/150" },
            { title: "100% FSC Timber", desc: "Sustainably sourced wood for all our products.", img: "https://via.placeholder.com/150" },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <img
                src={item.img}
                alt={item.title}
                className="mx-auto mb-4 rounded-lg"
              />
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Aboutinn
