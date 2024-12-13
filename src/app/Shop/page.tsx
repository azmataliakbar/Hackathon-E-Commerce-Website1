import Image from 'next/image';
import Header1 from '../components/Header1';
import Last from '../components/Footer';
import ShopSection from "./Components/ShopSection";

export default function Shop() {

  const products = [
    {
      image: '/shopsofa1.png',
      title: 'Trenton modular sofa, 3 seater',
      price: 'Rs. 25,000.00',
    },
    {
      image: '/shopchairset1.png',
      title: 'Trenton modular sofa, 3 seater',
      price: 'Rs. 25,000.00',
    },
    {
      image: '/shopchairset2.png',
      title: 'Trenton modular sofa, 3 seater',
      price: 'Rs. 25,000.00',
    },
    {
      image: '/shopmirror.png',
      title: 'Trenton modular sofa, 3 seater',
      price: 'Rs. 25,000.00',
    },
    {
      image: '/shoptable1.png',
      title: 'Trenton modular sofa, 3 seater',
      price: 'Rs. 25,000.00',
    },
    {
      image: '/shoptable2.png',
      title: 'Trenton modular sofa, 3 seater',
      price: 'Rs. 25,000.00',
    },
    {
      image: '/shoptable3.png',
      title: 'Trenton modular sofa, 3 seater',
      price: 'Rs. 25,000.00',
    },
    {
      image: '/shoptable4.png',
      title: 'Trenton modular sofa, 3 seater',
      price: 'Rs. 25,000.00',
    },
    {
      image: '/shoptable5.png',
      title: 'Trenton modular sofa, 3 seater',
      price: 'Rs. 25,000.00',
    },
    {
      image: '/shopcloset1.png',
      title: 'Trenton modular sofa, 3 seater',
      price: 'Rs. 25,000.00',
    },
    {
      image: '/shopchairset3.png',
      title: 'Trenton modular sofa, 3 seater',
      price: 'Rs. 25,000.00',
    },
    {
      image: '/shopchairset4.png',
      title: 'Trenton modular sofa, 3 seater',
      price: 'Rs. 25,000.00',
    },
    {
      image: '/shoptable6.png',
      title: 'Trenton modular sofa, 3 seater',
      price: 'Rs. 25,000.00',
    },
    {
      image: '/shopsofa2.png',
      title: 'Trenton modular sofa, 3 seater',
      price: 'Rs. 25,000.00',
    },
    {
      image: '/shopsofa3.png',
      title: 'Trenton modular sofa, 3 seater',
      price: 'Rs. 25,000.00',
    },
    {
      image: '/shopsofa4.png',
      title: 'Trenton modular sofa, 3 seater',
      price: 'Rs. 25,000.00',
    },
    // ... other products
  ];

  return (
    <div>
      <Header1 />
      
      {/* Shop section - 1 */}
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
          <h1 className="text-4xl sm:text-5xl font-bold text-black hover:scale-150 hover:text-red-500">Shop</h1>
          <p className="text-lg sm:text-xl text-black font-bold hover:scale-150 hover:text-blue-500">Home &gt; Shop</p>
        </div>
      </div>

      {/* Shop section - 2 */}
      <div className="bg-[#FAF4F4] p-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
          <div className="flex items-center space-x-4">
            <Image
              src="/shopfilter1.png"
              alt="Shop Banner"
              width={30}
              height={30}
              className="hover:scale-150"
            />
            <button className="text-black text-xl sm:text-2xl font-bold hover:scale-125 hover:text-blue-600">
              Filter
            </button>
            <Image
              src="/shopfilter2.png"
              alt="Shop Banner"
              width={30}
              height={30}
              className="hover:scale-150"
            />
            <Image
              src="/shopfilter3.png"
              alt="Shop Banner"
              width={30}
              height={30}
              className="hover:scale-150"
            />
            <Image
              src="/shopfilter4.png"
              alt="Shop Banner"
              width={4}
              height={2}
              className="hover:scale-125"
            />
          </div>
          <div className="text-black font-bold hover:scale-150 hover:text-blue-600">
            Showing 1-16 of 32 results
          </div>
          <div className="flex flex-col sm:flex-row items-center space-x-4 gap-4 sm:gap-0">
            <button className="text-black font-bold hover:scale-125 hover:text-blue-600">Show</button>
            <input type="text" placeholder="16" className="border border-gray-300 px-1 py-1 w-[40px] rounded-md text-center text-sm" />
            <button className="text-black font-bold hover:scale-125 hover:text-blue-600">Sort By</button>
            <input type="text" placeholder="Default" className="border border-gray-300 px-1 py-1 w-[80px] rounded-md text-center text-sm" />
          </div>
        </div>
      </div>

      {/* Shop section - 3 */}
      <div className="bg-white min-h-screen">
        <main className="container mx-auto py-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-center text-black hover:text-red-500 hover:scale-125 md:hover:scale-150 lg:hover:scale-150">Our Products</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => ( 
              <div key={product.title} className="text-center">
                <Image src={product.image} alt={product.title} width={300} height={300} className='hover:scale-110 ml-4' />
                <h3 className="text-sm sm:text-base font-bold mt-4 text-black hover:text-blue-600 hover:scale-125">{product.title}</h3>
                <p className="text-lg sm:text-xl font-bold text-black hover:text-red-500 hover:scale-125">{product.price}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <button className="bg-yellow-100 hover:bg-yellow-300 text-black font-bold py-1 px-2 rounded">1</button>
            <button className="bg-yellow-100 hover:bg-yellow-300 text-black font-bold py-1 px-2 rounded">2</button>
            <button className="bg-yellow-100 hover:bg-yellow-300 text-black font-bold py-1 px-2 rounded">3</button>
            <button className="bg-yellow-100 hover:bg-yellow-300 text-black font-bold py-1 px-2 rounded">Next</button>
          </div>
        </main>
      </div>

      {/* Shop section - 4 */}
      <div className="bg-[#FAF4F4] p-4">
        <div className="flex justify-between">
          <div className="text-center">
            <section id="returns">
              <ShopSection />
            </section>
          </div>
        </div>
      </div>
      
      <Last />
    </div>
  );
}
