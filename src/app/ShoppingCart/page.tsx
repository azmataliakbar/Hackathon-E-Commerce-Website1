"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from "next/link";

function ShoppingCart() {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: 'Asgaard sofa',
      price: 250000,
      image: '/sofa77.png', // Replace with your image path
      quantity: 1,
    },
    {
      id: 2,
      name: 'Sigle Seat sofa',
      price: 25000,
      image: '/sofa1.png', // Replace with your image path
      quantity: 1,
    },
    {
      id: 3,
      name: 'Comfort sofa',
      price: 20000,
      image: '/sofa3.png', // Replace with your image path
      quantity: 1,
    },
    {
      id: 4,
      name: 'Corner sofa',
      price: 25000,
      image: '/sofa2.png', // Replace with your image path
      quantity: 1,
    },
    
  ]);

  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    const calculateSubtotal = () => {
      const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
      setSubtotal(total);
    };

    calculateSubtotal();
  }, [cart]);

  const handleRemoveItem = (itemId: string | number) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  };

  const handleCheckout = () => {
    // Implement your checkout logic here, e.g., redirect to payment page
    console.log('Checkout button clicked');
  };

  return (
    <div className="bg-[#FFFFFF]">
      <div className="bg-white pt-2 pb-14 pr-10 pl-4 w-full max-w-[500px] h-auto mx-auto lg:ml-[1040px]">
        {/* Header */}
        <div className="flex justify-between items-center mt-8 mb-4">
          <h2 className="text-2xl lg:text-3xl font-bold text-black hover:scale-y-125 hover:text-red-500">
            Shopping Cart
          </h2>
          <Link href="/">
            <Image
              src="/home1.png"
              alt="Home logo"
              width={50}
              height={50}
              className="hover:scale-110 bg-yellow-100"
            />
          </Link>
        </div>
  
        {/* Cart Items */}
        <div className="flex flex-col space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between">
              <div className="flex items-center">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="mr-4 hover:scale-125"
                />
                <div className=''>
                  <h3 className="text-base lg:text-lg font-semibold text-black hover:scale-y-150 hover:text-blue-500">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 text-sm hover:scale-125 hover:text-red-500 font-bold">
                    Rs. {item.price}
                  </p>
                </div>
              </div>
              <button
                className="bg-gray-300 text-black px-2 rounded-full font-bold hover:scale-150 hover:bg-red-400 border-2 border-gray-400"
                onClick={() => handleRemoveItem(item.id)}
              >
                x
              </button>
            </div>
          ))}
        </div>
  
        {/* Subtotal and Buttons */}
        <div className="flex flex-col mt-6">
          <h3 className="text-center text-base lg:text-lg font-bold text-black hover:scale-y-150">
            Subtotal: <span className="text-red-500">Rs. {subtotal}</span>
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center mt-10 gap-4">
            <Link href="Cart">
              <button className="text-xs text-black px-8 rounded-2xl py-2 border-2 border-gray-300 hover:scale-125 hover:bg-blue-300">
                View Cart
              </button>
            </Link>
            <Link href="ShoppingCart">
              <button
                className="text-xs text-black px-8 rounded-2xl py-2 border-2 border-gray-300 hover:scale-125 hover:bg-blue-300"
                onClick={handleCheckout}
              >
                Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
  
}

export default ShoppingCart;