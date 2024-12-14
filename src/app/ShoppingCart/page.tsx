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


    <div className='bg-[#FFFFFF]'>
    <div className="bg-white px-2 w-[500px] h-[700px] ml-[1040px] ">
      
      <div className='flex'>
      <h2 className="text-3xl font-bold mb-4 text-black hover:scale-y-125 hover:text-red-500">Shopping Cart</h2>
      <Link href="/">
      <Image src="/home1.png" alt="Home logo" width={80} height={5} className='hover:scale-110 ml-20 bg-yellow-100' />
      </Link>
      </div>

      <div className="flex flex-col space-y-4">
        {cart.map((item) => (
          <div key={item.id} className="flex items-center justify-between">
            <div className="flex items-center">
              <Image
                src={item.image}
                alt={item.name}
                width={100}
                height={100}
                className="mr-4 hover:scale-125"
              />
              <div>
                <h3 className="text-lg font-semibold text-black  hover:scale-y-150 hover:text-blue-500">{item.name}</h3>
                <p className="text-gray-600 text-sm hover:scale-125 hover:text-red-500 font-bold">Rs. {item.price}</p>
              </div>
            </div>
            <button
              className="bg-gray-300 text-black px-2 rounded-full mr-20 font-bold hover:scale-150 hover:bg-red-400 border-2 border-gray-400"
              onClick={() => handleRemoveItem(item.id)}
            >
              x
            </button>
          </div>
        ))}
      </div>

      <div className=" flex flex-col mt-[50px] ">
        <h3 className="text-lg font-bold text-black hover:scale-y-150 text-center">Subtotal: <span className="text-red-500">Rs. {subtotal}</span></h3>
        <div className="flex justify-center mt-4 gap-4">
          <Link href="Cart">
          <button className="text-xs text-black px-6 rounded-2xl py-1 border-2 border-gray-300 hover:scale-125  hover:bg-blue-300">
            View Cart
          </button>
          </Link>
          <Link href="ShoppingCart">
          <button className="text-xs text-black px-6 rounded-2xl py-1 border-2 border-gray-300 hover:scale-125  hover:bg-blue-300"
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