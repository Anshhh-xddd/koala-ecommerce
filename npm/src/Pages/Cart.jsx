import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity } from "../Redux/CartSlice";

export default function PaymentMethods() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const [recentlyAdded, setRecentlyAdded] = useState(null);

  useEffect(() => {
    if (recentlyAdded) {
      const timeout = setTimeout(() => {
      }, 3000); // Show notification for 3 seconds
        setRecentlyAdded(null);
      return () => clearTimeout(timeout);
    }
  }, [recentlyAdded]);

  const handleQuantityChange = (id, delta) => {
    dispatch(updateQuantity({ id, quantity: Math.max(0, cartItems.find(item => item.id === id).quantity + delta) }));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleAddToCart = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
    setRecentlyAdded(item);
  };

  return (
    <section className="h-[100vh] bg-gradient-to-r from-purple-700 via-indigo-600 to-blue-600 py-10">
      <div className="container mx-auto px-4 ">
        <div className="flex flex-wrap justify-center">
          {/* Left Side - Cart Items */}
          <div className="w-full md:w-2/3 lg:w-3/5 xl:w-2/3 mb-6 bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-4 border-b border-gray-200">
              <h5 className="text-xl font-bold">Cart - {cartItems.length} items</h5>
            </div>
            <div className="p-4 overflow-y-auto max-h-96">
              {cartItems.length === 0 ? (
                <div className="p-10 text-center">
                  <p className="text-lg text-gray-500">Your cart is currently empty.</p>
                  <button className="mt-4 py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                    Continue Shopping
                  </button>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="flex flex-col md:flex-row items-center mb-4">
                    <div className="w-full md:w-1/4 mb-4 md:mb-0">
                      <div className="relative overflow-hidden rounded-lg">
                        <img src={item.image} alt={item.name} className="w-full" />
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
                          <i className="fas fa-trash"></i> Remove
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
                ))
              )}
            </div>
          </div>

          {/* Right Side - Summary */}
          <div className="w-full md:w-1/3  lg:w-1/4 xl:w-1/4">
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

      {/* Recently Added Notification */}
      {recentlyAdded && (
        <div className="fixed bottom-6 right-6 bg-white p-4 rounded-lg shadow-lg flex items-center space-x-4 transition-opacity duration-300 ease-in-out opacity-100">
          <img
            src={recentlyAdded.image}
            alt={recentlyAdded.name}
            className="w-12 h-12 rounded-md object-cover border"
          />
          <div>
            <p className="text-gray-800 font-medium">{recentlyAdded.name}</p>
            <p className="text-sm text-gray-500">Added to your cart</p>
          </div>
        </div>
      )}
    </section>
  );
}
