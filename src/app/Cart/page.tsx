"use client"

import { useState, useEffect } from 'react';
import Header1 from '../components/Header1';
import Last from '../components/Footer'
import Image from 'next/image';
import Link from "next/link";

function ShoppingCart() {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: 'Asgaard sofa',
      price: 250000,
      image: '/sofacart.png', // Replace with your image path
      quantity: 1,
    },
  ]);

  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calculateTotals = () => {
      const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
      const total = subtotal; // Assuming no taxes or shipping for now
      setSubtotal(subtotal);
      setTotal(total);
    };

    calculateTotals();
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

    <div className="bg-white">
      <Header1 />

      {/* Shop section - 1 */}
      <div className="relative">
        <Image
          src="/shop11.png"
          alt="Shop Banner"
          width={1520}
          height={400}
          className=""
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <Image src="/shop1logo.png" alt="Shop1logo" width={60} height={60} className='hover:scale-150 ml-10'/>
          <h1 className="text-5xl font-bold text-black hover:scale-150 hover:text-red-500">Cart</h1>
          <p className="text-lg text-black font-bold hover:scale-150 hover:text-blue-500">Home &gt; Cart</p>
        </div>
      </div>

      <div className='flex gap-10'>
        <div>
        <div className="flex bg-[#FFF9E5] w-[650px] h-[50px] pl-10 ml-40 pt-2 mt-8 rounded">
          <div className="w-1/4">
            <h2 className="text-xl font-semibold text-black hover:scale-y-150 hover:text-blue-500">Product</h2>
          </div>
          <div className="w-1/4">
            <h2 className="text-xl font-semibold text-black hover:scale-y-150 hover:text-blue-500">Price</h2>
          </div>
          <div className="w-1/4">
            <h2 className="text-xl font-semibold text-black hover:scale-y-150 hover:text-blue-500">Quantity</h2>
          </div>
          <div className="w-1/4">
            <h2 className="text-xl font-semibold text-black hover:scale-y-150 hover:text-blue-500">Subtotal</h2>
          </div>
        </div>

        
      <div className="flex justify-between mt-6">
        {cart.map((item) => (
          <div key={item.id} className="flex w-[650px] h-[50px] items-center mt-10 gap-10 ml-40">
            <div className="w-1/4 ml-6">
              <Image
                src={item.image}
                alt={item.name}
                width={100}
                height={100}
                className="mr-4 hover:scale-150"
              />
              <p className="text-black text-sm font-bold mt-2 hover:text-blue-500 hover:scale-150">{item.name}</p>
            </div>
            <div className="w-1/4">
              <p className="text-gray-700 ml-2 text-sm font-bold hover:scale-150 hover:text-red-500">Rs. {item.price}</p>
            </div>
            <div className="w-1/4">
              <p className="text-gray-700 ml-10 font-bold hover:scale-150 hover:text-blue-500">{item.quantity}</p>
            </div>
            
            <div className="w-1/4 flex gap-4">
              <p className="text-gray-700 text-sm font-bold hover:scale-150 hover:text-red-500">Rs. {item.price * item.quantity}</p>
              <button
                className="bg-red-500 text-white px-4 font-extrabold rounded-[50%] hover:scale-150"
                onClick={() => handleRemoveItem(item.id)}
              >
                x
              </button>
            </div>
          </div>
        ))}
      </div>
      </div>
      


      <div className="flex flex-col justify-between items-center w-[350px] h-[400px] bg-[#FFF9E5] ml-40 mt-8 p-6">
  {/* Title */}
  <div className="">
    <h2 className="text-black text-xl font-bold hover:text-red-500 hover:scale-150">
      Cart Totals
    </h2>
  </div>

  {/* Subtotal */}
  <div className="mt-4">
    <p className="text-gray-700 text-sm font-bold hover:text-blue-500 hover:scale-150">
      Subtotal: Rs. {subtotal}
    </p>
  </div>

  {/* Total */}
  <div className="mt-4">
    <p className="text-gray-700 text-sm font-bold hover:text-blue-500 hover:scale-150">
      Total: Rs. {total}
    </p>
  </div>

  {/* Button */}
  <div className="mt-4">
    <Link href="/ShoppingCart">
    <button
      className="text-black px-4 py-1 rounded-lg mt-4 border-2 border-gray-300 font-bold hover:bg-blue-300 hover:scale-125"
      onClick={handleCheckout}
    >
      Check Out
    </button>
    </Link>
  </div>
</div>
      </div>

      {/* Shop section - 4 */}

      <div className="bg-[#FAF4F4] p-4">
  <div className="flex justify-between">
    <div className="text-center">
      <h3 className="text-xl font-bold mb-2 text-black hover:text-red-500 hover:scale-150">Free Delivery</h3>
      <p className="text-sm text-gray-500 hover:text-blue-600 hover:scale-110">For all orders over $50, consectetur adipiscing elit.</p>
    </div>
    <div className="text-center">
      <h3 className="text-xl font-bold mb-2 text-black hover:text-red-500 hover:scale-150">90 Days Return</h3>
      <p className="text-sm text-gray-500 hover:text-blue-600 hover:scale-110">If goods have problems, consectetur adipiscing elit.</p>
    </div>
    <div className="text-center">
      <h3 className="text-xl font-bold mb-2 text-black hover:text-red-500 hover:scale-150">Secure Payment</h3>
      <p className="text-sm text-gray-500 hover:text-blue-600 hover:scale-110">100% secure payment, consectetur adipiscing elit.</p>
    </div>
  </div>
</div>



      <Last />
    </div>
  );
}

export default ShoppingCart;