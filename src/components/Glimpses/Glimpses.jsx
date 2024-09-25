import image1 from '../../assets/images/glimpses/1.jpg';
import image2 from '../../assets/images/glimpses/2.png';
import image3 from '../../assets/images/glimpses/3.jpg';
import image4 from '../../assets/images/glimpses/4.jpg';
import image5 from '../../assets/images/glimpses/5.jpg';
import image6 from '../../assets/images/glimpses/6.jpg';
import image7 from '../../assets/images/glimpses/7.jpg';
import BackgroundMesh from '../BackgroundMesh/BackgroundMesh';
const Glimpses = () => {
    return (

        <>

            <div className="w-4/5 h-auto m-auto py-10 lg:w-1/2" id='glimpses'>
                <h1 className='py-6 text-5xl font-bold'>
                    Glimpses
                </h1>
                <div className="carousel carousel-center rounded-box">
                    <div className="carousel-item w-full">
                        <img src={image1} className='w-full' />
                    </div>
                    <div className="carousel-item w-full">
                        <img src={image2} className='w-full' />
                    </div>
                    <div className="carousel-item w-full">
                        <img src={image7} className='w-full' />
                    </div>
                    <div className="carousel-item w-full">
                        <img src={image3} className='w-full' />
                    </div>
                    <div className="carousel-item w-full">
                        <img src={image4} className='w-full' />
                    </div>
                    <div className="carousel-item w-full">
                        <img src={image5} className='w-full' />
                    </div>
                    <div className="carousel-item w-full">
                        <img src={image6} className='w-full' />
                    </div>

                </div>
            </div>
        </>
    );
};

export default Glimpses;