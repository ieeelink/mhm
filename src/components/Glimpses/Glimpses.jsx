import image1 from '../../assets/images/glimpses/1.jpeg';
import image2 from '../../assets/images/glimpses/2.jpeg';
import image3 from '../../assets/images/glimpses/3.jpeg';
import image4 from '../../assets/images/glimpses/4.jpeg';
import image5 from '../../assets/images/glimpses/5.jpeg';
import image7 from '../../assets/images/glimpses/7.jpeg';
const Glimpses = () => {
    return (

        <>
            <div className="w-1/2 h-auto m-auto py-10 " id='glimpses'>
                <h1 className='py-6 text-5xl font-bold'>
                    Glimpses
                </h1>
                <div className="carousel w-full rounded-2xl">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={image1} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full rounded-2xl">
                        <img src={image2} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full rounded-2xl">
                        <img src={image3} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full rounded-2xl">
                        <img src={image4} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide5" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide5" className="carousel-item relative w-full rounded-2xl">
                        <img src={image5} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide6" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    {/* <div id="slide6" className="carousel-item relative w-full rounded-2xl">
                        <img src={image6} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide5" className="btn btn-circle">❮</a>
                            <a href="#slide7" className="btn btn-circle">❯</a>
                        </div>
                    </div> */}
                    <div id="slide7" className="carousel-item relative w-full rounded-2xl">
                        <img src={image7} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide6" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Glimpses;