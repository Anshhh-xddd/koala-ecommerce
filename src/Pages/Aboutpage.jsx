import React from "react";

const Aboutpage = () => {
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
              src={`https://au.koala.com/cdn/shop/files/Not_for_you_-_return_it.jpg?v=1728447899&width=1660${feature.title}`}
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
        <h2 className="text-2xl font-semibold mb-4">About us</h2>
        <p className="text-gray-600 mx-auto max-w-2xl mb-8">
        We are offering you our reliable services and a comfortable, high-quality product.       </p>
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
            src="https://au.koala.com/cdn/shop/files/Delivery_4-2Z2IdStw6NVaFd7yZqh1Dv.jpg?v=1725431287&width=1660"
            alt="Furniture worth keeping"
            className="w-full md:w-1/2 rounded-lg"
          />
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4">Free, same-day mattress delivery</h3>
            <p className="text-gray-600">
              Order by 3pm on weekdays and enjoy same-day delivery in metro areas. All mattresses are delivered for free Australia-wide.

              No hidden fees—just fast, free delivery.            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          <img
            src="https://au.koala.com/cdn/shop/files/We_resue_or_recycle.jpg?v=1728448045&width=1660"
            alt="Down with Allen keys"
            className="w-full md:w-1/2 rounded-lg"
          />
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4">We re-use or recycle</h3>
            <p className="text-gray-600">
              Returned products are sent to Koala Second Home, donated to charity, or recycled into carpet underlay.            </p>
          </div>
        </div>
      </div>

      {/* Section: Final Grid */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Furniture that gives a f*ck.</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {[
            { title: "1% for the Planet", desc: "1% of sales are donated to environmental causes.", img: "https://au.koala.com/cdn/shop/files/1200x758_1-_Tile_1_cb73a81b-c2d9-4b32-94f4-30fedce42183.jpg?v=1727394365&width=830" },
            { title: "B Corp Certified", desc: "B Corps make decisions that have a positive impact across their workers, customers, suppliers, community and the environment.", img: "https://au.koala.com/cdn/shop/files/1200x758_BCorp_Tile_2_b4255088-aca9-4b46-927a-c904f81df535.jpg?v=1727394365&width=830" },
            { title: "WWF Partnership", desc: "For most product sales, we make a donation to support koalas! So far, we have donated more than $3M to WWF in support of this partnership.", img: "https://au.koala.com/cdn/shop/files/about_us_koala_wwf_1.png?v=1732583871&width=1496" },
            { title: "Koala Second Home", desc: "At Koala Second Home we take back the returns from our  120 night trial period and refurbish the goods to near new condition. We then sell these at a huge saving off the every-day retail prices!", img: "https://au.koala.com/cdn/shop/files/1200x758_KSH_Tile_4.jpg?v=1727394365&width=830" },
            { title: "100% FSC Timber", desc: "FSC timber is cut from forests managed in a way that preserves biological diversity and benefits the lives of local people and workers.", img: "https://au.koala.com/cdn/shop/files/1200x758_FSC_Tile_5_a5fb08ae-376d-4396-acc9-db13e6c0df20.jpg?v=1727394365&width=830" },
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

export default Aboutpage;
