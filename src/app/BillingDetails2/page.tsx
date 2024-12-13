"use client";

import { useState, useEffect } from "react";
/* import Header from '../components/Header'; */
import Last from '../components/Footer'

function CheckoutForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    country: "Sri Lanka",
    streetAddress: "",
    city: "",
    province: "Western Province",
    zipCode: "",
    phone: "",
    email: "",
    additionalInfo: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (

    
    <div className="bg-white p-6 w-full">
      

      <div className="w-full">
        <h2 className="text-3xl font-bold mb-4 text-black hover:text-red-500 hover:scale-y-150">
          Billing Details
        </h2>

        <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1">
            <label htmlFor="firstName" className="block text-gray-700 hover:text-blue-500 hover:scale-y-150 font-bold">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full rounded"
            />
          </div>
          <div className="col-span-1">
            <label htmlFor="lastName" className="block text-gray-700 hover:text-blue-500 hover:scale-y-150 font-bold">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full rounded"
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="companyName" className="block text-gray-700 hover:text-blue-500 hover:scale-y-150 font-bold">
              Company Name (Optional)
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full rounded"
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="country" className="block text-gray-700 hover:text-blue-500 hover:scale-y-150 font-bold">
              Country / Region
            </label>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full rounded"
            >
              <option value="Sri Lanka">Pakistan</option>
              {/* Add more country options as needed */}
            </select>
          </div>
          <div className="col-span-2">
            <label htmlFor="streetAddress" className="block text-gray-700 hover:text-blue-500 hover:scale-y-150 font-bold">
              Street address
            </label>
            <input
              type="text"
              id="streetAddress"
              name="streetAddress"
              value={formData.streetAddress}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full rounded"
            />
          </div>
          <div className="col-span-1">
            <label htmlFor="city" className="block text-gray-700 hover:text-blue-500 hover:scale-y-150 font-bold">
              Town / City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full rounded"
            />
          </div>
          <div className="col-span-1">
            <label htmlFor="province" className="block text-gray-700 hover:text-blue-500 hover:scale-y-150 font-bold">
              Province
            </label>
            <select
              id="province"
              name="province"
              value={formData.province}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full rounded"
            >
              <option value="Western Province">Western Province</option>
              {/* Add more province options as needed */}
            </select>
          </div>
          <div className="col-span-2">
            <label htmlFor="zipCode" className="block text-gray-700 hover:text-blue-500 hover:scale-y-150 font-bold">
              ZIP code
            </label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full rounded"
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="phone" className="block text-gray-700 hover:text-blue-500 hover:scale-y-150 font-bold">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full rounded"
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="email" className="block text-gray-700 hover:text-blue-500 hover:scale-y-150 font-bold">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full rounded"
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="additionalInfo" className="block text-gray-700 hover:text-blue-500 hover:scale-y-150 font-bold">
              Additional information
            </label>
            <textarea
              id="additionalInfo"
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full rounded h-24"
            />
          </div>
        </div>

        <div className="mt-4">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-red-400  hover:scale-125 font-bold"
          >
            Place Order
          </button>
        </div>
      </form>

      </div>
      <Last />
    </div>
  );
}

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
      <div className="flex-1">
        <CheckoutForm />
      </div>

      {/* Checkout Summary */}
      <div className="flex-1">
        <CheckoutSummary />
      </div>
      
    </div>
  );
}

export default CheckoutPage;


/* hello */