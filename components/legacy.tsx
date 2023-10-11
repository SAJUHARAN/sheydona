"use client";

import Image from 'next/image';
import { CustomButton } from '.';
import Textimg from './textimg';
import Fimage from './fimage';
import ProductCard from "./ProductCard";



const productsData = [
  {
    img: "/image 01.png",
    title: "Legacy Sports Bra",
    desc: "Slim Fit",
    price: "50.00",
  },
  {
    img: "/image 02.png",
    title: "Legacy Sports Bra",
    desc: "Slim Fit",
    price: "50.00",

  },

  {
    img: "/image 01.png",
    title: "Legacy Sports Bra",
    desc: "Slim Fit",
    price: "50.00",
  },
  {
    img: "/image 02.png",
    title: "Legacy Sports Bra",
    desc: "Slim Fit",
    price: "50.00",
  },

];


const legacy = () => {
  const handleScroll = () => { }
  return (

    <div className="legacy">
      <div className="relative">
        <div className="legacy">
          
          <div className="legacy__image-container">

          <img src="01.png" alt="Your Image" className="img"/>  
          <img src="visa.png" alt="Visa Image" className="img2"/>
          <img src="master.png" alt="Visa Image" className="img3"/>
          <img src="apple-pay.png" alt="Visa Image" className="img4"/>
          
         
            <div className="text-overlay">
            <h3>Grab your fav one <br/>HERE </h3>
       
            <h4>DREAM <br/> WEAR</h4>
            <h5>In publishing and grauhic design, Lorem<br/>
                ipsum is a placeholder text commonly<br/>
                used to demonstrate the visual form of a<br/>
                document or a typeface withmn relying on<br/>
                meaningful content. Lorem ipsum be<br/>
                used as a Dlaceholder before final cow is<br/>
                available</h5>
                
            <h6>Checkout with</h6>  
            
       
        </div>
       
            <div className="background">
              <h1 className="legacy__tittle">Great things start with little changes</h1>
              <p className="legacy__subtittle">Then don't wait for something new</p>
              <button className="text-black bg-white min-w-[130px] py-1 px-2 rounded-full border border-white font-normal text-base mr-10 ">
                Let's try
              </button>
            </div>
          </div>
        </div>

      </div>

      <div className="sm:flex-row sm:justify-center sm:items-center h-20 flex flex-col ">
  <button className="text-black bg-white min-w-[130px] py-1 px-2 rounded-full border border-black font-normal text-base mr-10">
    Casual
  </button>
  <button className="text-black bg-white min-w-[130px] py-1 px-2 rounded-full border border-black font-normal text-base mr-10">
    Athleisure
  </button>
  <button className="text-black bg-white min-w-[130px] py-1 px-2 rounded-full border border-black font-normal text-base mr-10">
    Authentic
  </button>
</div>


      <div>
        <div>
          <div className=" min-h-screen pt-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <h2 className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-22 px-6 py-4 font-bold text-2xl">
              Latest Arrivals</h2>
            <button className='max-w-[1440px] mx-auto flex justify-end items-center sm:px-16 px-6 py-4 right-0 mr-10'> see all</button>

            <div className="grid grid-cols-1 place-items-center sm:place-items-center sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-5 xl:gap-x-20 xl:gap-y-5">
              {productsData.map((item, index) => (
                <ProductCard
                  key={index}
                  img={item.img}
                  title={item.title}
                  desc={item.desc}
                  price={item.price} onClick={function (): void {
                    throw new Error('Function not implemented.');
                  } }                />
              ))}
            </div>
          </div>
        </div>
        <Textimg />
        
      </div>

    </div>

  )
}

export default legacy