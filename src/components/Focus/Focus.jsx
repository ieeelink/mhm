import focus from "../../assets/images/focus.jpg"
import BackgroundMesh from "../BackgroundMesh/BackgroundMesh";

import Speaker from "../Speaker/Speaker";

import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Focus = () => {
    const navigate = useNavigate();

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
        <div className="focus w-full relative mt-20" >

            <h1 className="text-5xl font-bold text-center" style={{
                fontFamily: "Aloevera Outline"
            }}  >Focus</h1>
            <h1 className=" px-2 text-3xl font-bold text-center" >Why should you join the event ?</h1>

            {/* <div className="flex flex-wrap justify-center w-full h-auto items-center p-12 ">
                <img src={focus} className="border-2 shadow-xl rounded-lg lg:w-1/3 " alt="" />
            </div> */}


            <div className="flex flex-wrap justify-center w-full h-auto items-center">

                <div className="card card-side bg-base-100 shadow-xl m-2 lg:m-12">
                    <figure className="pl-4 w-16 lg:p-12 lg:w-36 flex justify-center items-center lg:bg-primary lg:hover:bg-[#69afff]">
                        <svg className="lg:fill-[#f2f2f2]" xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 512 512"><path d="M267.4 211.6c-25.1 23.7-40.8 57.3-40.8 94.6 0 29.3 9.7 56.3 26 78L203.1 434c-4.4-1.6-9.1-2.5-14-2.5-10.8 0-20.9 4.2-28.5 11.8-7.6 7.6-11.8 17.8-11.8 28.6s4.2 20.9 11.8 28.5c7.6 7.6 17.8 11.6 28.5 11.6 10.8 0 20.9-3.9 28.6-11.6 7.6-7.6 11.8-17.8 11.8-28.5 0-4.2-.6-8.2-1.9-12.1l50-50.2c22 16.9 49.4 26.9 79.3 26.9 71.9 0 130-58.3 130-130.2 0-65.2-47.7-119.2-110.2-128.7V116c17.5-7.4 28.2-23.8 28.2-42.9 0-26.1-20.9-47.9-47-47.9S311.2 47 311.2 73.1c0 19.1 10.7 35.5 28.2 42.9v61.2c-15.2 2.1-29.6 6.7-42.7 13.6-27.6-20.9-117.5-85.7-168.9-124.8 1.2-4.4 2-9 2-13.8C129.8 23.4 106.3 0 77.4 0 48.6 0 25.2 23.4 25.2 52.2c0 28.9 23.4 52.3 52.2 52.3 9.8 0 18.9-2.9 26.8-7.6l163.2 114.7zm89.5 163.6c-38.1 0-69-30.9-69-69s30.9-69 69-69 69 30.9 69 69-30.9 69-69 69z" /></svg>
                    </figure>
                    <div className="card-body w-64 lg:w-96">
                        <h2 className="card-title">Talk sessions and Panel Discussions</h2>
                        <p>Talks and panel discussions are sure to provide that extra and necessary push to help you succeed.</p>
                    </div>
                </div>

                <div className="card card-side bg-base-100 shadow-xl m-2 lg:m-12">
                    <figure className="pl-4 w-16 lg:p-12 lg:w-36 flex justify-center items-center lg:bg-primary lg:hover:bg-[#69afff]">
                        <svg className="lg:fill-[#f2f2f2]" xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 384 512"><path d="M192 0C139 0 96 43 96 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z" /></svg>
                    </figure>
                    <div className="card-body w-64 lg:w-96">
                        <h2 className="card-title">Best in Class Speakers</h2>
                        <p>To listen to the best individuals at hand in their respective domains. </p>
                    </div>
                </div>

                <div className="card card-side bg-base-100 shadow-xl m-2 lg:m-12">
                    <figure className="pl-4 w-16 lg:p-12 lg:w-36 flex justify-center items-center lg:bg-primary lg:hover:bg-[#69afff]">
                        <svg className="lg:fill-[#f2f2f2]" xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 384 512"><path d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z" /></svg>                    </figure>
                    <div className="card-body w-64 lg:w-96">
                        <h2 className="card-title">Technical Workshops</h2>
                        <p>Sharpen your technical skills with the various sets of workshops arranged.</p>
                    </div>
                </div>

                <div className="card card-side bg-base-100 shadow-xl m-2 lg:m-12">
                    <figure className="pl-4 w-16 lg:p-12 lg:w-36 flex justify-center items-center lg:bg-primary lg:hover:bg-[#69afff]">
                        <svg className="lg:fill-[#f2f2f2]" xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 640 512"><path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z" /></svg>
                    </figure>
                    <div className="card-body w-64 lg:w-96">
                        <h2 className="card-title">One-to-one mentorship opportunity</h2>
                        <p>Reboot your thoughts through a one-to-one mentorship program with industrial experts.</p>
                    </div>
                </div>

                <div className="card card-side bg-base-100 shadow-xl m-2 lg:m-12">
                    <figure className="pl-4 w-16 lg:p-12 lg:w-36 flex justify-center items-center lg:bg-primary lg:hover:bg-[#69afff]">
                        <svg className="lg:fill-[#f2f2f2]" xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 448 512"><path d="M159.3 5.4c7.8-7.3 19.9-7.2 27.7 .1c27.6 25.9 53.5 53.8 77.7 84c11-14.4 23.5-30.1 37-42.9c7.9-7.4 20.1-7.4 28 .1c34.6 33 63.9 76.6 84.5 118c20.3 40.8 33.8 82.5 33.8 111.9C448 404.2 348.2 512 224 512C98.4 512 0 404.1 0 276.5c0-38.4 17.8-85.3 45.4-131.7C73.3 97.7 112.7 48.6 159.3 5.4zM225.7 416c25.3 0 47.7-7 68.8-21c42.1-29.4 53.4-88.2 28.1-134.4c-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5c-16.5-21-46-58.5-62.8-79.8c-6.3-8-18.3-8.1-24.7-.1c-33.8 42.5-50.8 69.3-50.8 99.4C112 375.4 162.6 416 225.7 416z" /></svg>
                    </figure>
                    <div className="card-body w-64 lg:w-96">
                        <h2 className="card-title">Cultural night</h2>
                        <p>A cultural night where all of us can get together and fill our souls. </p>
                    </div>
                </div>

                <div className="card card-side bg-base-100 shadow-xl m-2 lg:m-12">
                    <figure className="pl-4 w-16 lg:p-12 lg:w-36 flex justify-center items-center lg:bg-primary lg:hover:bg-[#69afff]">
                        <svg className="lg:fill-[#f2f2f2] bi bi-person-walking" xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 16 16">
                            <path d="M9.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M6.44 3.752A.75.75 0 0 1 7 3.5h1.445c.742 0 1.32.643 1.243 1.38l-.43 4.083a1.8 1.8 0 0 1-.088.395l-.318.906.213.242a.8.8 0 0 1 .114.175l2 4.25a.75.75 0 1 1-1.357.638l-1.956-4.154-1.68-1.921A.75.75 0 0 1 6 8.96l.138-2.613-.435.489-.464 2.786a.75.75 0 1 1-1.48-.246l.5-3a.75.75 0 0 1 .18-.375l2-2.25Z" />
                            <path d="M6.25 11.745v-1.418l1.204 1.375.261.524a.8.8 0 0 1-.12.231l-2.5 3.25a.75.75 0 1 1-1.19-.914zm4.22-4.215-.494-.494.205-1.843.006-.067 1.124 1.124h1.44a.75.75 0 0 1 0 1.5H11a.75.75 0 0 1-.531-.22Z" />
                        </svg>
                    </figure>
                    <div className="card-body w-64 lg:w-96">
                        <h2 className="card-title">Trekking</h2>
                        <p>A thrilling trek through scenic trails, rugged terrains, and breathtaking natural beauty</p>
                    </div>
                </div>
            </div>

            {/* <Speaker /> */}

            {/* <h1 className=" px-2 text-3xl font-semibold text-center pt-5"  style={{color:'#11735b',fontSize:'33px', paddingTop:'3rem'}}>Event Posters</h1>
              <div className="card rounded m-auto py-10 lg:w-1/3 flex justify-center w-full h-auto items-center  ">
                
                
                <Link to="/poster">
                  <figure className="mx-auto ">
                    <video  autoPlay loop muted  style={{ maxWidth: '90%', height: 'auto'}}>
                      <source src="g2.mp4" type="video/mp4"></source>
                     Your browser does not support the video tag.
                    </video>
                  </figure>
                </Link>
  
    
       
            </div>
            <Link to="/contact">
              <div className="flex flex-col mx-auto justify-center items-center">
                <button className="btn w-5/6 lg:w-3/4 mr-4 my-4 justify-center items-center border-black" style={{
                  background: 'linear-gradient(90deg, #11735b, #010a0a)',
                  fontSize: '22px',
                  color: '#fff',
                  border: 'none',
                }} >Reach  Us</button>
              </div>
            </Link> */}
        </div>

    )
}

export default Focus;