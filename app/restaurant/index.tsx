"use client";

import React from 'react';
import Image from 'next/image';

export default function Restaurant() {
  return (
    <main className="font-serif text-2xl">
      <div className="flex flex-col md:flex-row bg-[#fff9ef] p-4 md:p-8 gap-4 md:gap-96">
  <div className="mx-4 md:mx-[100px] mt-4 md:mt-[5%] mr-2 md:mr-[10px]">
    <h1 className="font-bold text-3xl md:text-5xl">Enjoy Delicious</h1>
    <h1 className="font-bold text-3xl md:text-5xl">Food in <b className="text-[#FFC624]">Healthy Life</b></h1>
    <p className="w-full md:w-10/12 mt-4">Tandoori masala is an Indian spice blend consisting of a variety of spices.</p>
    <button className="my-4 md:my-[60px] bg-yellow-500 text-neutral-100 w-60 md:min-w-[200px] text-amber-500 min-h-[65px] text-xl md:text-[25px] rounded-lg">ORDER NOW</button>
  </div>
  <Image src="/images/chickenn.png" className="w-full md:w-auto mt-4 md:mt-0" alt="Chicken dish" width={500} height={500} />
</div>

      <div className="text-center font-bold my-8">
        <p>Online store</p>
        <h3 className="font-bold text-3xl md:text-4xl">Popular Foods</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-4 md:mx-[100px] mt-8">
        {['Chickendish', 'FruitDish', 'SeaFood', 'Pizza'].map((dish, index) => (
          <div key={index} className="text-center">
            <Image src={`/images/${dish}.png`} className="mx-auto" alt={dish} width={300} height={300} />
            <h1 className="mt-2">{dish === 'Chickendish' ? 'Fruit dish' : dish}</h1>
            <p>Dinko Food</p>
            <p>&#11088;&#11088;&#11088;&#11088;&#11088;</p>
            <button className="bg-yellow-500 text-neutral-100 w-full max-w-[200px] text-amber-500 min-h-[40px] text-[15px] rounded-lg mt-2">Add to Cart $696</button>
          </div>
        ))}
      </div>

      <div className="bg-[#fff9ef] py-8 mt-8">
        <div className="flex flex-col md:flex-row mx-4 md:mx-[100px]">
          <div className="mb-4 md:mb-0">
            <h1 className="font-bold text-3xl md:text-4xl">Our Special Offer</h1>
            <p className="w-full md:w-7/12 mt-4">Best cooks and best delivery guys all at your service. Hot tasty food will reach you in 60 minutes.</p>
            <button className="mt-4 bg-yellow-500 text-neutral-100 min-w-[140px] text-amber-500 min-h-[40px] text-[15px] rounded-lg">See All Menu</button>
          </div>
          <div className="mt-4 md:mt-0">
            <Image src="/images/dishes.jpeg" className="w-full md:ml-[-60%]" alt="Special dishes" width={500} height={500} />
          </div>
        </div>
      </div>

      <div className="text-center mt-8">
        <p>Quality Food</p>
        <h1 className="font-bold text-3xl md:text-4xl mt-2">Get The Best Offers</h1>
        <p className="mx-auto w-11/12 md:w-3/4 lg:w-1/2 mt-4">The food at your doorstep. Why starve when you have us. Your hunger partner. Straight out of the oven to your doorstep.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-4 md:mx-40 mt-8">
        {[
          { title: 'Any day offer', desc: 'New Phenomena Burger Taste', img: 'Hamburger' },
          { title: 'Other flavors', desc: 'Save room. We made salads', img: 'veges' },
          { title: 'Find a poco store near you', desc: '', img: 'poco' }
        ].map((offer, index) => (
          <div key={index} className="flex items-center">
            <div>
              <h1 className="font-bold">{offer.title}</h1>
              <p>{offer.desc}</p>
              {index !== 2 && <p className="text-[#FFC624]">$12.90</p>}
            </div>
            <Image src={`/images/${offer.img}.png`} className="ml-4" alt={offer.title} width={100} height={100} />
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <h1 className="font-bold text-3xl md:text-4xl">Our Service</h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mx-4 md:mx-40 mt-8">
        {[
          { Image: 'pop', title: '55+ Restaurants' },
          { Image: 'goodquality', title: 'Good Quality' },
          { Image: 'discount system', title: 'Discount System' },
          { Image: 'delivery', title: 'Fast Delivery' }
        ].map((service, index) => (
          <div key={index} className="text-center mt-8">
            <Image src={`/images/${service.Image}.png`} className="mx-auto" alt={service.title} width={100} height={100} />
            <h1 className="mt-2">{service.title}</h1>
          </div>
        ))}
      </div>

      <div className="text-center mt-8 p-6">
        <p>Testimonials</p>
        <h1 className="font-bold text-3xl md:text-4xl mt-2">What Our Clients Say</h1>
        <p className="mx-auto w-11/12 md:w-3/4 lg:w-1/2 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 mt-8">
  {['mitch', 'Peter', 'Benjamin', 'Adam', 'John'].map((person, index) => (
    <Image 
      key={index} 
      src={`/images/${person}.jpeg`} 
      className="w-24 md:w-32 lg:w-40 rounded-full"
      alt={person} 
      width={100} 
      height={100} 
    />
  ))}
</div>

      <div className="text-center mt-4">
        <p className="font-bold text-2xl md:text-4xl">Mitchell Marsh</p>
        <p>CEO, Bexon Agency</p>
        <div className="flex justify-center items-center mt-4">
          <Image src="/images/left arrow.png" className="w-12 md:w-20" alt="Left arrow" width={50} height={50} />
          <Image src="/images/rightarrow.jpeg" className="w-12 md:w-20" alt="Right arrow" width={50} height={50} />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center bg-[#fff9ef] p-4 md:p-8 mt-8">
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <Image src="/images/iphone.png" className="mx-auto md:mx-0" alt="iPhone app" width={300} height={300} />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="font-bold text-xl md:text-2xl text-[#FFC624]">Download Our App</p>
          <h1 className="font-bold text-3xl md:text-4xl mt-2">It&apos;s all here</h1>
          <h1 className="font-bold text-3xl md:text-4xl">All in one app.</h1>
          <p className="w-full md:w-8/12 mt-4">Discover local, on-demand delivery or pickup from restaurants, nearly grocery and convenience stores, and more.</p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start mt-4">
            <button className="bg-black text-white min-w-[200px] min-h-[65px] text-[25px] rounded-lg mb-2 sm:mb-0 sm:mr-4">App Store</button>
            <button className="bg-black text-white min-w-[200px] min-h-[65px] text-[25px] rounded-lg">Google Play</button>
          </div>
        </div>
      </div>

      <div className="bg-[#fff9ef] py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mx-4 md:mx-[100px]">
          <div className="mb-4 md:mb-0">
            <p className="font-bold text-2xl md:text-4xl">Subscribe Our Newsletter</p>
            <p>Subscribe to our newsletter to get our news</p>
          </div>
          <div className="flex flex-col sm:flex-row">
            <input
              type="email"
              placeholder="Your Email Address"
              className="bg-white text-black min-w-[200px] md:min-w-[300px] min-h-[40px] text-[15px] rounded-lg p-2 mb-2 sm:mb-0 sm:mr-2"
            />
            <button className="bg-yellow-500 text-neutral-100 min-w-[140px] text-amber-500 min-h-[40px] text-[15px] rounded-lg">Subscribe</button>
          </div>
        </div>
      </div>

      <div className="bg-[#180606] text-white py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 px-4 md:px-40 text-center">
          <div>
            <h1 className="font-bold text-2xl mb-4">FoodHouse</h1>
            <p className="w-60 ml-10">Best cooks and best delivery guys all at your service. Hot tasty food will reach you in 60minutes.</p>
            <Image src="/images/icons.png" alt="Social icons" className='ml-10' width={100} height={100} />
          </div>
          <div>
            <p className="font-bold text-2xl mb-4">Company</p>
            <p>Career</p>
            <p>About us</p>
            <p>Blog</p>
            <p>Press Info</p>
            <p>Features</p>
          </div>
          <div>
            <p className="font-bold text-2xl mb-4">Fudo</p>
            <p>Why Fudo</p>
            <p>How it works</p>
            <p>Why choose Us</p>
            <p>Client stories</p>
            <p>Gallery</p>
          </div>
          <div>
            <p className="font-bold text-2xl mb-4">Menu</p>
            <p>Breakfast</p>
            <p>Lunch</p>
            <p>Dinner</p>
            <p>Fast Foods</p>
            <p>Drinks</p>
          </div>
        </div>
      </div>

      <div className="bg-amber-400 py-4">
        <div className="flex flex-col sm:flex-row justify-center items-center text-white gap-4">
          <p>Copyright 2021 Besnik All Rights Reserved</p>
          <p>Terms</p>
          <p>Privacy</p>
          <p>Security</p>
        </div>
      </div>
    </main>
  );
}
