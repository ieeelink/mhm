import Footer from '../Footer/Footer';
import {useState} from 'react';
import React, { useEffect } from 'react';
import {useLocation} from 'react-router-dom';
import logo from '../../assets/logos/mhm.png';




const contact = () => {
  const location = useLocation();
  useEffect(() => {
    // Scroll to the top when the component mounts or the route changes
    window.scrollTo(0, 0);
  }, [location.pathname]);
  const styles = {
    overflow: 'hidden',
  };
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
  };
return(
  

<div>
<div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a href='/'>Home</a></li>
                        <li><a href='/#about'>About</a></li>
                        <li><a href='/#glimpses'>Glimpses</a></li>
                        <li><a href='/#faq'>FAQ</a></li>
                        <li><a href='/#footer'>Contact</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl"><img src={logo} className='w-28' /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a href='/'>Home</a></li>
                    <li><a href='/#about'>About</a></li>
                    <li><a href='/#glimpses'>Glimpses</a></li>
                    <li><a href='/#faq'>FAQ</a></li>
                    <li><a href='/#footer'>Contact</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-diabled" href='/#get-ticket'>
                    <p className='text-xs'>
                       Sold Out
                    </p>
                </a>
            </div>
        </div>
  <h1 className="text-5xl font-bold text-center m-3" style={{
                fontFamily: "Aloevera Outline"
            }}  > Reach Us </h1>
            

<div className="card  bg-base-100 shadow-xl  justify-center ml-12 mr-12 ">
  <div className="card-body">
    <h2 className="card-title"></h2>
    <div className="contact    flex flex-wrap lg:m-12  justify-center">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13408.78442274818!2d75.37250592158327!3d11.980583394700242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba43e5eaa1932c3%3A0xa686759a5aa8afa5!2sGCE%20KANNUR!5e0!3m2!1sen!2sin!4v1699935343834!5m2!1sen!2sin" width="1300" height="450" style={{border:0}}s allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <p class="m-2">The Government College of Engineering Kannur is situated in Mangattuparamba, approximately 17 kilometers from Kannur railway station. To reach the campus, you can avail local transportation options such as buses or private taxis, which typically take around 30-45 minutes to cover the distance. From Kannur railway station, you can easily reach GCEK by boarding a Payannur-bound bus from the nearby Kannur new bus stand, just a 2-minute walk away. When on the bus, alight at the Dharmashala stop, which is in close proximity to the college campus. This convenient transportation option offers a straightforward route for those traveling to the college from Kannur railway station.</p>
  </div>
</div>
<div className="flex flex-wrap lg:m-12 justify-center m-12 ">

<div className="card w-80 h-64 bg-base-100  ml-2 mr-2 shadow-xl m-12 ">
  <figure><img src="/phone.png" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Phone:</h2>
    <p>Vaishakh : +91 79076 49864</p>
    <p>Varun K : +91 91378 36584 </p>
  </div>
</div>

<div className="card w-80 h-64 bg-base-100 ml-2 mr-2 shadow-xl m-12">
  <figure><img src="/email.png "  alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Email:</h2>
    <p>malabarhubieee@gmail.com</p>
  </div>
</div>

<div className="card w-80 h-64 bg-base-100 ml-2 mr-2  shadow-xl m-12">
  <figure><img src="/venu.png" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Venu:</h2>
    <p>Government College of Engineering Kannur</p>
  </div>
</div>
</div>

<>
            <footer className="footer p-10 bg-base-200 text-base-content" id="footer">
                <nav>
                    <header className="footer-title">Useful Links</header>
                    <a href="https://ieee-link.org/" className="link link-hover">IEEE LINK</a>
                    <a href="#" className="link link-hover">IEEE SB GCEK</a>
                    <a href="https://ieeekerala.org/" className="link link-hover">IEEE KS</a>
                </nav>

                <nav>
                    <header className="footer-title">Useful Links</header>
                    <a href="https://site.ieee.org/indiacouncil/" className="link link-hover">IEEE India Council</a>
                    <a href="https://www.ieeer10.org/" className="link link-hover">IEEE Region 10</a>
                    <a href="https://www.ieee.org/" className="link link-hover">IEEE</a>
                </nav>

                <nav>
                    <header className="footer-title">Contact Us</header>
                    <a className="link link-hover">Varun K : +91 91378 36584 </a>
                    <a className="link link-hover">Vaishakh : +91 79076 49864</a>
                    <a className="link link-hover">Email: malabarhubieee@gmail.com</a>
                </nav>
            </footer>
            <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
                <aside className="items-center grid-flow-col">
                    <p> Copyright © 2023 IEEE LINK.   <br />All Rights Reserved</p>
                </aside>
                <nav className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                        <a href="https://instagram.com/ieee_malabar_hub"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg></a>
                    </div>
                </nav>
            </footer>
        </>
</div>
);
          }
export default contact;