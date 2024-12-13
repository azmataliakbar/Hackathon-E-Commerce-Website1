"use client";
import Image from 'next/image';
import CheckoutForm from "../components/BillingDetails"; // Code-1
import CheckoutSummary from "../components/ItemDetails"; // Code-2
import Header1 from "../components/Header1"; // Header component
import Last from "../components/Footer"; // Footer component

function CheckoutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <Header1 />
      {/* Shop section - 1 */}
      <div className="relative">
        <Image
          src="/shop1.png"
          alt="Shop Banner"
          width={1520}
          height={400}
          className=""
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <Image src="/shop1logo.png" alt="Shop1logo" width={60} height={60} className='hover:scale-150 ml-20'/>
          <h1 className="text-5xl font-bold text-black hover:scale-150 hover:text-red-500">Checkout</h1>
          <p className="text-lg text-black font-bold hover:scale-150 hover:text-blue-500">Home &gt; Checkout</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-grow justify-center items-start gap-8 p-6">
        {/* Left Section - Code-1 */}
        <div className="w-1/2">
          <CheckoutForm />
        </div>

        {/* Right Section - Code-2 */}
        <div className="w-1/2">
          <CheckoutSummary />
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
      {/* Footer */}
      <Last />
    </div>
  );
}

export default CheckoutPage;
