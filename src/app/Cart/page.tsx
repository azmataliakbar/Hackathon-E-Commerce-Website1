"use client";

import { useState, useEffect } from "react";
import Header1 from "../components/Header1";
import Last from "../components/Footer";
import Image from "next/image";
import Link from "next/link";

function ShoppingCart() {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Asgaard sofa",
      price: 250000,
      image: "/sofacart.png",
      quantity: 1,
    },
  ]);

  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calculateTotals = () => {
      const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
      setSubtotal(subtotal);
      setTotal(subtotal);
    };

    calculateTotals();
  }, [cart]);

  const handleRemoveItem = (itemId: string | number) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  };

  const handleCheckout = () => {
    console.log("Checkout button clicked");
  };

  return (
    <div className="bg-white">
      <Header1 />

      {/* Banner */}
      <div className="relative">
        <Image
          src="/shop11.png"
          alt="Shop Banner"
          width={1520}
          height={400}
          className="w-full h-[300px] object-cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <Image src="/shop1logo.png" alt="Shop1logo" width={60} height={60} className='hover:scale-150 ml-10'/>
          <h1 className="text-4xl sm:text-5xl font-bold text-black hover:scale-150 hover:text-red-500">Cart</h1>
          <p className="text-lg sm:text-xl text-black font-bold hover:scale-150 hover:text-blue-500">Home &gt; Cart</p>
        </div>
      </div>

      {/* Cart Items */}
      <div className="flex flex-col lg:flex-row gap-6 px-4 lg:px-20 mt-6">
        {/* Cart List */}
        <div className="flex-1">
          <div className="flex bg-[#FFF9E5] w-full py-4 rounded">
            <div className="w-1/4 text-center">
              <h2 className="text-xs md:text-xl font-semibold text-black hover:text-blue-500">
                Product
              </h2>
            </div>
            <div className="w-1/4 text-center">
              <h2 className="text-xs md:text-xl font-semibold text-black hover:text-blue-500">
                Price
              </h2>
            </div>
            <div className="w-1/4 text-center">
              <h2 className="text-xs md:text-xl font-semibold text-black hover:text-blue-500">
                Quantity
              </h2>
            </div>
            <div className="w-1/4 text-center">
              <h2 className="text-xs md:text-xl font-semibold text-black hover:text-blue-500">
                Subtotal
              </h2>
            </div>
          </div>

          {cart.map((item) => (
            <div key={item.id} className="flex flex-wrap justify-between items-center mt-6 gap-0 bg-gray-100 md:py-10 lg:py-10 py-2 rounded">
              <div className="w-1/4">
                <Image src={item.image} alt={item.name} width={80} height={80} className="hover:scale-110 lg:ml-10 md:ml-10 w-10 h-10" />
                <p className="text-[10px] md:text-sm lg:text-sm font-bold mt-2 text-center text-black hover:text-blue-500">{item.name}</p>
              </div>
              <div className="w-1/4 text-center text-[15px] md:text-[20px] lg:text-[20px]">
                <p className=" text-gray-700 font-bold hover:text-red-500">Rs. {item.price}</p>
              </div>
              <div className="w-1/4 text-center">
                <p className="text-gray-700 font-bold hover:text-blue-500">{item.quantity}</p>
              </div>
              <div className="w-1/4 flex-col lg:flex-row md:flex text-[15px] md:text-[20px] lg:text-[20px] ">
                <p className="text-gray-700 font-bold hover:text-red-500 mt-8 lg:mt-0 mb-2 lg:mb-0 md:ml-8 lg:ml-8">
                  Rs. {item.price * item.quantity}
                </p>
                <button
                  className="bg-red-500 text-white px-3 lg:px-1 py-0 lg:py-0 ml-4 rounded-[100%]  hover:scale-110"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  x
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Totals */}
        <div className="w-full lg:w-1/3 bg-[#FFF9E5] p-6 rounded">
          <h2 className="text-black text-xl font-bold mb-4 hover:text-red-500 text-center md:text-left lg:text-left ">Cart Totals</h2>
          <p className="text-gray-700 font-bold mb-2 hover:text-blue-500 text-center md:text-left lg:text-left">
            Subtotal: Rs. {subtotal}
          </p>
          <p className="text-gray-700 font-bold mb-4 hover:text-blue-500 text-center md:text-left lg:text-left">
            Total: Rs. {total}
          </p>
          <div className="flex justify-center lg:justify-start items-center">
  <Link href="/ShoppingCart">
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded hover:scale-125"
      onClick={handleCheckout}
    >
      Check Out
    </button>
  </Link>
</div>

        </div>
      </div>

      {/* Info Section */}
      <div className="bg-[#FAF4F4] p-4 mt-6 text-center md:text-left">
        <div className="flex flex-wrap justify-center md:justify-between gap-4 md:px-20 lg:px-20">
          <div>
            <h3 className="text-lg font-bold mb-2 text-black hover:text-red-500">Free Delivery</h3>
            <p className="text-sm text-gray-500 hover:text-blue-600">
              For all orders over $50.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2 text-black hover:text-red-500">90 Days Return</h3>
            <p className="text-sm text-gray-500 hover:text-blue-600">
              If goods have problems.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2 text-black hover:text-red-500">Secure Payment</h3>
            <p className="text-sm text-gray-500 hover:text-blue-600">
              100% secure payment.
            </p>
          </div>
        </div>
      </div>

      <Last />
    </div>
  );
}

export default ShoppingCart;
