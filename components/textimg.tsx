import React from 'react'


const textimg = () => {
  return ( 
  <div className="image-container">
  <img src="/image 03.png" alt="Background" className="image " />
  <div className="text-overlay">
    <h1>Meet Our <br />  Athletic Wear Specialist</h1>
     <p className="image subhead">Get 20% discount</p> 
     <button className="ebutton">
        Ladies
      </button>
      <button className="ebutton">
        Gents
      </button>
      <p className="ltext">Till 30th september</p> 

     {/* <p className="image footer">Till 30th september</p>   */}
    {/* <button className="text-black bg-white min-w-[130px] py-2 px-4 rounded">
        Let's try
      </button>
      <br></br>
      <button className="text-black bg-white min-w-[130px] py-2 px-4 rounded">
        Let's try
      </button> */}
  </div>
  </div>
  );
};
  

export default textimg