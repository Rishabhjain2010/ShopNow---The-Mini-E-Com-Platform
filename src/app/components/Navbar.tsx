import React from 'react'
import About from '../pages/About'

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-gray-800">ShopNow</div>
        <div className="space-x-6">
          <a href="/" className="text-gray-600 hover:text-gray-800">
            Home
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Products
          </a>
          <a href="/about" className="text-gray-600 hover:text-gray-800">
            About
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Contact
          </a>
        </div>
        <div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Login
            </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar