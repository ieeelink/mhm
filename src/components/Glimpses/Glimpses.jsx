import image1 from '../../assets/images/glimpses/1.jpeg';
import image2 from '../../assets/images/glimpses/2.jpeg';
import image3 from '../../assets/images/glimpses/3.jpeg';
import image4 from '../../assets/images/glimpses/4.jpeg';
import image5 from '../../assets/images/glimpses/5.jpeg';
import image7 from '../../assets/images/glimpses/7.jpeg';
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
                        <img src={image2} alt="Pizza" className='w-full' />
                    </div>
                    <div className="carousel-item w-full">
                        <img src={image3} alt="Pizza" className='w-full' />
                    </div>
                    <div className="carousel-item w-full">
                        <img src={image4} alt="Pizza" className='w-full' />
                    </div>
                    <div className="carousel-item w-full">
                        <img src={image5} alt="Pizza" className='w-full' />
                    </div>
                    <div className="carousel-item w-full">
                        <img src={image7} alt="Pizza" className='w-full' />
                    </div>

                </div>
            </div>
        </>
    );
};

export default Glimpses;