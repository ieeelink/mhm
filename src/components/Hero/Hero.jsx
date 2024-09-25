import BackgroundMesh from "../BackgroundMesh/BackgroundMesh"
import { HashLink } from 'react-router-hash-link';

const Hero = () => {
    const viewSchedule = () => {

    }
    return (
        <>
            <div className="hero min-h-screen bg-base-200 relative">
                <BackgroundMesh />
                <div className="hero-content text-center margin-auto" style={{
                    margin:'auto',
                    
                }}>
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold text-[#112c4b]">Malabar Hub Meet</h1>
                        <h1 className="text-4xl font-bold text-[#112c4b] py-2">2024</h1>
                        <div className="py-4">
                            <i className="fa-solid fa-calendar-days text-[#112c4b]"></i>
                            <p className="px-2 text-[#112c4b]">
                                October 04<sup>th</sup>, 05<sup>th</sup> & 06 <sup>th</sup>
                            </p>
                            <br />

                            <i className="fa-solid fa-location-dot text-[#112c4b]"></i>
                            <p className="px-2 text-[#112c4b]">
                                Govt. Engineering College Wayanad
                            </p>
                        </div>
                       {/* <HashLink to="/#faq" className="btn btn-primary">

                            <p className=''>
                                View Schedule
                            </p>
                       </HashLink> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero