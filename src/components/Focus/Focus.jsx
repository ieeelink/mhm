import focus from "../../assets/images/focus.jpg"
import BackgroundMesh from "../BackgroundMesh/BackgroundMesh";

const Focus = () => {
    const styles = {
        overflow: 'hidden',
        
      };
    return (
        <div className="focus w-full relative" >
            
            <h1 className="text-5xl font-bold text-center" style={{
                fontFamily: "Aloevera Outline"
            }}  >Focus</h1>
            <h1 className=" px-2 text-3xl font-bold text-center" >Why should you join the event ?</h1>

            <div className="flex flex-wrap justify-center w-full h-auto items-center p-12 ">
                <img src={focus} className="border-2 shadow-xl rounded-lg lg:w-1/3 " alt="" />
            </div>


            <div className="flex flex-wrap justify-center w-full h-auto items-center">

                <div className="card card-side bg-base-100 shadow-xl m-2 lg:m-12">
                    <figure className="pl-4 w-16 lg:p-12 lg:w-36 flex justify-center items-center lg:bg-primary lg:hover:bg-[#3FFEC1]">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 512 512"><path d="M267.4 211.6c-25.1 23.7-40.8 57.3-40.8 94.6 0 29.3 9.7 56.3 26 78L203.1 434c-4.4-1.6-9.1-2.5-14-2.5-10.8 0-20.9 4.2-28.5 11.8-7.6 7.6-11.8 17.8-11.8 28.6s4.2 20.9 11.8 28.5c7.6 7.6 17.8 11.6 28.5 11.6 10.8 0 20.9-3.9 28.6-11.6 7.6-7.6 11.8-17.8 11.8-28.5 0-4.2-.6-8.2-1.9-12.1l50-50.2c22 16.9 49.4 26.9 79.3 26.9 71.9 0 130-58.3 130-130.2 0-65.2-47.7-119.2-110.2-128.7V116c17.5-7.4 28.2-23.8 28.2-42.9 0-26.1-20.9-47.9-47-47.9S311.2 47 311.2 73.1c0 19.1 10.7 35.5 28.2 42.9v61.2c-15.2 2.1-29.6 6.7-42.7 13.6-27.6-20.9-117.5-85.7-168.9-124.8 1.2-4.4 2-9 2-13.8C129.8 23.4 106.3 0 77.4 0 48.6 0 25.2 23.4 25.2 52.2c0 28.9 23.4 52.3 52.2 52.3 9.8 0 18.9-2.9 26.8-7.6l163.2 114.7zm89.5 163.6c-38.1 0-69-30.9-69-69s30.9-69 69-69 69 30.9 69 69-30.9 69-69 69z" /></svg>
                    </figure>
                    <div className="card-body w-64 lg:w-96">
                        <h2 className="card-title">Talk sessions and Panel Discussions</h2>
                        <p>Talks and panel discussions are sure to provide that extra and necessary push to help you succeed.</p>
                    </div>
                </div>

                <div className="card card-side bg-base-100 shadow-xl m-2 lg:m-12">
                    <figure className="pl-4 w-16 lg:p-12 lg:w-36 flex justify-center items-center lg:bg-primary lg:hover:bg-[#3FFEC1]">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 384 512"><path d="M192 0C139 0 96 43 96 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z" /></svg>
                    </figure>
                    <div className="card-body w-64 lg:w-96">
                        <h2 className="card-title">Best in Class Speakers</h2>
                        <p>To listen to the best individuals at hand in their respective domains. </p>
                    </div>
                </div>

                <div className="card card-side bg-base-100 shadow-xl m-2 lg:m-12">
                    <figure className="pl-4 w-16 lg:p-12 lg:w-36 flex justify-center items-center lg:bg-primary lg:hover:bg-[#3FFEC1]">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 384 512"><path d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z" /></svg>                    </figure>
                    <div className="card-body w-64 lg:w-96">
                        <h2 className="card-title">Technical Workshops</h2>
                        <p>Sharpen your technical skills with the various sets of workshops arranged.</p>
                    </div>
                </div>

                <div className="card card-side bg-base-100 shadow-xl m-2 lg:m-12">
                    <figure className="pl-4 w-16 lg:p-12 lg:w-36 flex justify-center items-center lg:bg-primary lg:hover:bg-[#3FFEC1]">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 640 512"><path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z" /></svg>
                    </figure>
                    <div className="card-body w-64 lg:w-96">
                        <h2 className="card-title">One-to-one mentorship opportunity</h2>
                        <p>Reboot your thoughts through a one-to-one mentorship program with industrial experts.</p>
                    </div>
                </div>

                <div className="card card-side bg-base-100 shadow-xl m-2 lg:m-12">
                    <figure className="pl-4 w-16 lg:p-12 lg:w-36 flex justify-center items-center lg:bg-primary lg:hover:bg-[#3FFEC1]">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 448 512"><path d="M159.3 5.4c7.8-7.3 19.9-7.2 27.7 .1c27.6 25.9 53.5 53.8 77.7 84c11-14.4 23.5-30.1 37-42.9c7.9-7.4 20.1-7.4 28 .1c34.6 33 63.9 76.6 84.5 118c20.3 40.8 33.8 82.5 33.8 111.9C448 404.2 348.2 512 224 512C98.4 512 0 404.1 0 276.5c0-38.4 17.8-85.3 45.4-131.7C73.3 97.7 112.7 48.6 159.3 5.4zM225.7 416c25.3 0 47.7-7 68.8-21c42.1-29.4 53.4-88.2 28.1-134.4c-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5c-16.5-21-46-58.5-62.8-79.8c-6.3-8-18.3-8.1-24.7-.1c-33.8 42.5-50.8 69.3-50.8 99.4C112 375.4 162.6 416 225.7 416z" /></svg>
                    </figure>
                    <div className="card-body w-64 lg:w-96">
                        <h2 className="card-title">Cultural night</h2>
                        <p>A cultural night where all of us can get together and fill our souls. </p>
                    </div>
                </div>

                <div className="card card-side bg-base-100 shadow-xl m-2 lg:m-12">
                    <figure className="pl-4 w-16 lg:p-12 lg:w-36 flex justify-center items-center lg:bg-primary lg:hover:bg-[#3FFEC1]">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 576 512"><path d="M346.3 271.8l-60.1-21.9L214 448H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H544c17.7 0 32-14.3 32-32s-14.3-32-32-32H282.1l64.1-176.2zm121.1-.2l-3.3 9.1 67.7 24.6c18.1 6.6 38-4.2 39.6-23.4c6.5-78.5-23.9-155.5-80.8-208.5c2 8 3.2 16.3 3.4 24.8l.2 6c1.8 57-7.3 113.8-26.8 167.4zM462 99.1c-1.1-34.4-22.5-64.8-54.4-77.4c-.9-.4-1.9-.7-2.8-1.1c-33-11.7-69.8-2.4-93.1 23.8l-4 4.5C272.4 88.3 245 134.2 226.8 184l-3.3 9.1L434 269.7l3.3-9.1c18.1-49.8 26.6-102.5 24.9-155.5l-.2-6zM107.2 112.9c-11.1 15.7-2.8 36.8 15.3 43.4l71 25.8 3.3-9.1c19.5-53.6 49.1-103 87.1-145.5l4-4.5c6.2-6.9 13.1-13 20.5-18.2c-79.6 2.5-154.7 42.2-201.2 108z" /></svg>
                    </figure>
                    <div className="card-body w-64 lg:w-96">
                        <h2 className="card-title">Beach Visit</h2>
                        <p>An immersive beach visit, offering a serene escape and joyful camaraderie amidst the sun, sand, and sea.</p>
                    </div>
                </div>
            </div>
            <h1 className=" px-2 text-3xl font-semibold text-center pt-5"  style={{color:'#11735b',fontSize:'33px' , paddingTop:'3rem'}}>Our Speakers</h1>
            
         <div className="flex lg:ml-5 pt-5 pb-4" style={{ overflowX: 'scroll', whiteSpace: 'nowrap', paddingTop:'3rem','-webkit-overflow-scrolling': 'touch', position: 'relative'}}>
         <style>
    {`
      ::-webkit-scrollbar {
        display: none;
      }
    `}
  </style>
         <div className="card w-120 bg-base-100 shadow-xl pt-2 m-3 lg:m-12 sm:ml-2 lg:ml-5" style={{ float:'left',marginLeft:'1rem' }}>
            <div className=" card card-side ml-5"> <figure className="w-32  rounded-full ring ring-[#5F9F7C] ring-offset-base-100 ring-offset-2" ><img src="/sp223.jpg" alt="Shoes" /></figure>
            <svg xmlns="http://www.w3.org/2000/svg" style={{marginLeft:'1rem'}} height="1rem" viewBox="0 0 448 512"><path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"/></svg>
            <h1 className="my-auto pt-3  text-primary" style={{fontWeight:'400', fontSize:'18px',paddingRight:'1rem'}}>Blender<br/>3D - Modeling,<br/>Animation,Texturing</h1>
            
           
            
            </div>
        
      
        <div className="card-body">
        
        <h2 className="card-title pl-1" style={{color:'0f0f0f'}}>
         Aswin Lal M
      
       </h2>
       
       <p className="pl-1">CPO Soft Served Web.</p>
       
       
       <div className="card-actions justify-end ">
        <div className="primary"><a href="https://www.instagram.com/aswnss/"><svg xmlns="http://www.w3.org/2000/svg" style={{color:'green'}} height="1.2em" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg></a></div>
      <div><a href="https://www.linkedin.com/in/aswnss/"><svg xmlns="http://www.w3.org/2000/svg" height="1.2em" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg></a></div> 
      
       </div>
      
     </div></div>
     <div className="card w-96  bg-base-100 shadow-xl mb-3  m-3 lg:m-12" style={{ float:'left' }}>
            <div className=" card card-side ml-5"> <figure className="w-32  rounded-full ring ring-[#5F9F7C] ring-offset-base-100 ring-offset-2" ><img src="/sp3322.JPG" alt="Shoes" /></figure>
            <svg xmlns="http://www.w3.org/2000/svg" style={{marginLeft:'1rem',marginTop:'1rem'}} height="1rem" viewBox="0 0 448 512"><path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"/></svg>
            <h1 className="pl-5 my-auto text-primary" style={{fontWeight:'400', fontSize:'20px', paddingLeft:'2rem'}}><h className='text-black' style={{fontWeight:'400',fontSize:'18px'}}></h>UI/UX<br/>Design<br/></h1>
            </div>
        
      
        <div className="card-body">
        
        <h2 className="card-title pl-1" style={{color:'0f0f0f'}}>
         Akarsh B
      
       </h2>
       
       <p className="pl-1">UI/UX Designer, Hexnode | Mitsogo Inc.</p>
       
       
       <div className="card-actions justify-end ">
        <div className="primary"><a href="https://instagram.com/_.aakarsh._?igshid=NXc5emdjNDE5d2wx"><svg xmlns="http://www.w3.org/2000/svg" style={{color:'green'}} height="1.2em" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg></a></div>
      <div><a href="https://www.linkedin.com/in/aakarshb/"><svg xmlns="http://www.w3.org/2000/svg" height="1.2em" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg></a></div> 
      
       </div>
      
     </div></div>
     
     <div className="card w-104  bg-base-100 shadow-xl  m-3 lg:m-12" style={{ float:'left' }}>
            <div className=" card card-side ml-5"> <figure className="w-32  rounded-full ring ring-[#5F9F7C] ring-offset-base-100 ring-offset-2" ><img src="/sp1.jpg" alt="Shoes" /></figure>
            <svg xmlns="http://www.w3.org/2000/svg" style={{marginLeft:'1rem',paddingTop:'0.5rem'}} height="1.5rem" viewBox="0 0 448 512"><path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"/></svg>
            <h1 className="pr-1 my-auto  text-primary" style={{fontWeight:'400', fontSize:'18px',paddingRight:'1rem' }}><br/>Python  Microservice<br/>Using GraphQL<br/> and Fast Api</h1>
            </div>
        
      
        <div className="card-body">
        
        <h2 className="card-title pl-1" style={{color:'0f0f0f'}}>
         Abhinand C
      
       </h2>
       
       <p className="pl-1">Product Engineer @ UST.</p>
       
       
       <div className="card-actions justify-end ">
        <div className="primary"><a href="https://instagram.com/abhinandc.nandu?igshid=MXBsZnlzdm5jZW4xMw=="><svg xmlns="http://www.w3.org/2000/svg" style={{color:'green'}} height="1.2em" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg></a></div>
      <div><a href="https://www.linkedin.com/in/abhinand-c/"><svg xmlns="http://www.w3.org/2000/svg" height="1.2em" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg></a></div> 
      
       </div>
      
     </div></div>
     <div className="card w-110  bg-base-100 shadow-xl  m-3 lg:m-12 p-2" style={{ float:'left', marginRight:'2.5rem' }}>
            <div className=" card card-side ml-4"> <figure className="w-32  rounded-full ring ring-[#5F9F7C] ring-offset-base-100 ring-offset-2" ><img src="/sp4.jpg" alt="Shoes" /></figure>
            <svg xmlns="http://www.w3.org/2000/svg" style={{marginLeft:'1rem'}} height="1rem" viewBox="0 0 448 512"><path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"/></svg>
            <h1 className=" my-auto text-primary" style={{fontWeight:'400',color:'#o1doao', fontSize:'18px' ,paddingRight:'1.5rem'}}><br/>Growing Passion<br/>For Tech<br/>With IEEE</h1>
            </div>
        
      
        <div className="card-body">
        
        <h2 className="card-title pl-1" style={{color:'0f0f0f'}}>
         Basil Reji
      
       </h2>
       
       <p className="pl-1">Mentor, IEEE LINK .</p>
       
       
       <div className="card-actions justify-end ">
        <div className="primary"><a href="https://instagram.com/_basil_reji_?igshid=MWRsZHR2b2xvcXFkdA=="><svg xmlns="http://www.w3.org/2000/svg" style={{color:'green'}} height="1.2em" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg></a></div>
      <div><a href="https://www.linkedin.com/in/basilreji/"><svg xmlns="http://www.w3.org/2000/svg" height="1.2em" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg></a></div> 
      
       </div>
      
     </div></div>
     
     

     
     
     </div>
        </div>
        
    )
}

export default Focus;