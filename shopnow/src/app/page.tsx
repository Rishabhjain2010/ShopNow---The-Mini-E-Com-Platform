import Image from "next/image";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
    // <Homepage />
    <>
      <Navbar /> 
    <main className="pt-24 max-w-7xl mx-auto px-6">
      <section className="flex flex-col md:flex-row items-center justify-between gap-10 py-16">
        <div className="flex-1">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
            Discover Your Style
          </h1>
          <p className="text-gray-600 mb-6">
            Shop the latest fashion trends and exclusive collections with
            amazing discounts.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Shop Now
          </button>
        </div>

        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800"
            alt="Shopping"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </section>

=      <section className="py-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((id) => (
            <div
              key={id}
              className="border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              <img
                src={`https://picsum.photos/seed/${id}/400/300`}
                alt={`Product ${id}`}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">Product {id}</h3>
                <p className="text-gray-600 text-sm mt-1">
                  $ {(id * 20).toFixed(2)}
                </p>
                <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
    </>
  );
}
