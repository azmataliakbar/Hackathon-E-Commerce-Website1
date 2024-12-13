"use client";

import { useEffect, useState } from "react";
/* import CheckoutForm from "../components/BillingDetails"; */

function CheckoutSummary() {
  const [cart] = useState([
    {
      id: 1,
      name: "Asgaard sofa",
      price: 250000,
      quantity: 1,
    },
  ]);

  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calculateTotals = () => {
      const subtotal = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      setSubtotal(subtotal);
      setTotal(subtotal); // Assuming no additional costs for now
    };

    calculateTotals();
  }, [cart]);

  const handleCheckout = () => {
    console.log("Checkout button clicked");
  };

  return (
    <div className="bg-white p-6 w-full">
      <div className="flex justify-between">
        <div>
          <h2 className="text-2xl font-bold text-black hover:text-blue-500 hover:scale-y-150">Product</h2>
          <p className="font-bold text-black hover:text-green-500 hover:scale-y-150">
            {cart[0].name} x {cart[0].quantity}
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold text-black hover:text-blue-500 hover:scale-y-150">Subtotal</h2>
          <p className="text-gray-700 font-bold hover:text-red-500 hover:scale-y-150">Rs. {subtotal}</p>
        </div>
      </div>

      <div className="mt-4">
        <h2 className="text-xl font-semibold text-black hover:text-blue-500 hover:scale-y-150">Total</h2>
        <p className="text-2xl font-bold text-black hover:text-yellow-500 hover:scale-y-150">Rs. {total}</p>
      </div>

      <div>
        <h4 className="text-gray-700 font-bold hover:text-blue-500 hover:scale-y-150 ml-10 mt-10">
        Direct Bank Transfer
        </h4>
        <p className="text-gray-700 hover:scale-y-125 text-sm mb-4">
        Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
        </p>
        <p className="text-gray-700 hover:scale-y-125 text-sm ">Direct Bank Transfer</p>
        <p className="text-gray-700 hover:scale-y-125 text-sm ">Cash On Delivery</p>
        <p className="text-gray-700 hover:scale-y-125 text-sm mt-4">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
      </div>

      <div className="mt-8 flex justify-center items-center  ">
        <button
          className=" text-black font-bold px-20 py-3 mt-4 border-2 border-gray-300 rounded-2xl hover:bg-blue-300 hover:scale-125"
          onClick={handleCheckout}
        >
          Place Order
        </button>
      </div>

    </div>
  );
}

function CheckoutPage() {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-100">
      {/* Checkout Form */}
      {/* <div className="flex-1">
        <CheckoutForm />
      </div> */}

      {/* Checkout Summary */}
      <div className="flex-1">
        <CheckoutSummary />
      </div>
      
    </div>
  );
}

export default CheckoutPage;
