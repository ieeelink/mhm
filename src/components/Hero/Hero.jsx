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
                        <h1 className="text-5xl font-bold">Malabar Hub Meet</h1>
                        <h1 className="text-4xl font-bold py-2">2023</h1>
                        <div className="py-4">
                            <i className="fa-solid fa-calendar-days"></i>
                            <p className="px-2">
                                November 18<sup>th</sup> & 19 <sup>th</sup>
                            </p>
                            <br />

                            <i className="fa-solid fa-location-dot"></i>
                            <p className="px-2">
                                Govt. College of Engineering Kannur
                            </p>
                        </div>
                       <HashLink to="/#schedule" className="btn btn-primary">

                            <p className=''>
                                View Schedule
                            </p>
                       </HashLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero