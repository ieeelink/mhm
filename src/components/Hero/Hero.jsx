import BackgroundMesh from "../BackgroundMesh/BackgroundMesh"

const Hero = () => {
    return (
        <>
            <div className="hero min-h-screen bg-base-200 relative">
                <BackgroundMesh />
                <div className="hero-content text-center">
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
                        <button className="btn btn-primary">Register Now</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero