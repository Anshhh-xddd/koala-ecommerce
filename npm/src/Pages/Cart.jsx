import React, { useState } from "react";

export default function PaymentMethods() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Blue denim shirt",
      color: "blue",
      size: "M",
      price: 17.99,
      quantity: 1,
      image: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp",
    },
    {
      id: 2,
      name: "Red hoodie",
      color: "red",
      size: "M",
      price: 17.99,
      quantity: 1,
      image: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/13a.webp",
    },
  ]);

  const handleQuantityChange = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(0, item.quantity + delta) }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <section className="h-full bg-gradient-to-r from-purple-700 via-indigo-600 to-blue-600 py-10">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-2/3 lg:w-3/5 mb-6">
            <div className="bg-white rounded-lg shadow-lg mb-6">
              <div className="p-4 border-b border-gray-200">
                <h5 className="text-xl font-bold">Cart - {cartItems.length} items</h5>
              </div>
              <div className="p-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex flex-col md:flex-row items-center mb-4">
                    <div className="w-full md:w-1/4 mb-4 md:mb-0">
                      <div className="relative overflow-hidden rounded-lg">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full"
                        />
                      </div>
                    </div>
                    <div className="w-full md:w-1/3 px-4">
                      <p className="text-lg font-semibold">{item.name}</p>
                      <p className="text-gray-500">Color: {item.color}</p>
                      <p className="text-gray-500">Size: {item.size}</p>
                      <div className="flex items-center mt-2 space-x-2">
                        <button
                          className="text-gray-600 hover:text-red-600"
                          onClick={() => handleRemoveItem(item.id)}
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>
                    </div>
                    <div className="w-full md:w-1/3 flex items-center justify-between md:justify-start md:space-x-4">
                      <button
                        className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded"
                        onClick={() => handleQuantityChange(item.id, -1)}
                      >
                        <i className="fas fa-minus"></i>
                      </button>
                      <input
                        type="number"
                        value={item.quantity}
                        readOnly
                        className="w-12 text-center border border-gray-200 rounded"
                      />
                      <button
                        className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded"
                        onClick={() => handleQuantityChange(item.id, 1)}
                      >
                        <i className="fas fa-plus"></i>
                      </button>
                      <p className="text-lg font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg mb-6 p-4">
              <p className="text-lg font-semibold">Expected shipping delivery</p>
              <p className="text-gray-500">12.10.2020 - 14.10.2020</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-4">
              <p className="text-lg font-semibold mb-2">We accept</p>
              <div className="flex space-x-2">
                {[
                  "https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg",
                  "https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg",
                  "https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg",
                  "https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png",
                ].map((src, idx) => (
                  <img key={idx} src={src} alt="Payment Method" className="w-12 h-8 object-contain" />
                ))}
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/3 lg:w-1/4">
            <div className="bg-white rounded-lg shadow-lg">
              <div className="p-4 border-b border-gray-200">
                <h5 className="text-xl font-bold">Summary</h5>
              </div>
              <div className="p-4">
                <ul className="space-y-4">
                  <li className="flex justify-between">
                    <span>Products</span>
                    <span>${totalAmount.toFixed(2)}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Shipping</span>
                    <span>Gratis</span>
                  </li>
                  <li className="flex justify-between font-bold">
                    <div>
                      <p>Total amount</p>
                      <p className="text-sm text-gray-500">(including VAT)</p>
                    </div>
                    <span>${totalAmount.toFixed(2)}</span>
                  </li>
                </ul>

                <button className="mt-6 w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg">
                  Go to checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
