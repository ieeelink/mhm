
import Footer from '../Footer/Footer';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';


const Posters = () => {
    const location = useLocation();

  useEffect(() => {
    // Scroll to the top when the component mounts or the route changes
    window.scrollTo(0, 0);
  }, [location.pathname]);
    const styles = {
        overflow: 'hidden',
        
      };

    const cardCompactStyle = {
          transition: 'transform 0.3s ease-in-out',
        };
      
        const cardCompactHoverStyle = {
          transform: 'scale(1.05)',
        };   
  return (
    <div className='Posters w-full relative'>
      <Navbar/>
      <h1 className="text-5xl font-bold text-center mt-5 pt-4" style={{
                fontFamily: "Aloevera Outline"
            }}  >Event Posters</h1>
     <style>
    {
 ` .card-compact {
    transition: transform 0.3s ease-in-out;
    z-index:1;
  }

  .card-compact:hover,
  .card-compact:active {
    transform: scale(1.2);
    z-index:2;
  }`}
</style>
   
        <div className="flex flex-wrap justify-center item-center pt-5 pb-1 mt-3 mb-4 ">
        <div className="card card-compact w-80 bg-base-100 shadow-xl mx-4 rounded lg:m-12  mt-3">
            
    <figure><img src="/p8.jpg" className="rounded" alt="Shoes" /></figure>
   
    </div>
    <div className="card card-compact w-80 bg-base-100 shadow-xl ml-5 mx-4 rounded mt-5 lg:m-12">
    <figure><img src="/p10.jpg"  className="rounded" alt="Shoes" /></figure>
   
    </div>
    <div className="card card-compact w-80 bg-base-100 shadow-xl rounded ml-5 mx-4 mt-5 lg:m-12">
    <figure><img src="/p9.jpg" className="rounded"alt="Shoes" /></figure>
   
    </div></div>

    <div className="flex flex-wrap justify-center item-center pt-1 pb-2 mt-1 mb-4 ">
    <div className="card card-compact w-80 rounded bg-base-100 shadow-xl ml-5 mx-4 mt-5 lg:m-12">
    <figure><img src="/p4.jpg" clasName="rounded" alt="Shoes" /></figure>
    
      
 

    </div>
    
    <div className="card card-compact w-80 bg-base-100 rounded shadow-xl ml-5 mx-4 mt-5 lg:m-12">
    <figure><img src="/p2.jpg" clasName="rounded" alt="Shoes" /></figure>
    </div>
    <div className="card card-compact w-80 bg-base-100 rounded shadow-xl ml-5 mx-4 mt-5 lg:m-12">
    <figure><img src="/p1.jpg" clasName="rounded" alt="Shoes" /></figure>
        </div></div>

        <div className="flex flex-wrap justify-center rounded item-center  pb-2 mt-1 mb-4 ">

        <div className="card card-compact w-80 bg-base-100 rounded shadow-xl ml-5 mx-4 mt-5 lg:m-12">
    <figure><img src="/p7.jpg" clasName="rounded" alt="Shoes" /></figure>
        </div> 
        <div className="card card-compact w-80 bg-base-100 rounded shadow-xl ml-5 mx-4 mt-5 lg:m-12">
    <figure><img src="/p5.jpg" clasName="rounded" alt="Shoes" /></figure>
        </div>  
        <div className="card card-compact w-80 rounded bg-base-100 shadow-xl ml-5 mx-4 mt-5 lg:m-12">
    <figure><img src="/p6.jpg" clasName="rounded" alt="Shoes" /></figure>
        </div>    
        </div>
        <Footer />


    </div>
  )
}

export default Posters;
