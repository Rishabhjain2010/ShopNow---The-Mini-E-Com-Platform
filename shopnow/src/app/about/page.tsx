import React from 'react'
import Navbar from '../components/Navbar'

function About() {
  return (
    <>
    <Navbar />
    <main className="pt-24 max-w-7xl mx-auto px-6">
      <section className="py-16">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">About ShopNow</h1>
        <p className="text-gray-600 mb-4">
          ShopNow is your mini e-commerce platform dedicated to providing a seamless online shopping experience for hardware enthusiasts. From sensors to microcontrollers and more, we offer a wide range of products to meet your needs.
        </p>
        <p className="text-gray-600 mb-4">
          Our mission is to make online shopping easy, efficient, and enjoyable. We are committed to offering high-quality products at competitive prices, along with exceptional customer service.
        </p>
        <p className="text-gray-600">
          Thank you for choosing ShopNow as your go-to destination for all your hardware product needs. We look forward to serving you!
        </p>
      </section>
    </main>
    </>
    
  )
}

export default About