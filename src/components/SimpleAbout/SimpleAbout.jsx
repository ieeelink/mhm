import image1 from '../../assets/images/mhm.webp'
import gcek from '../../assets/images/gcek.jpg'
import Glimpses from '../Glimpses/Glimpses'
const SimpleAbout = () => {
    return (
        <>
            <div className="hero  py-12" id='about'>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div>
                        <h1 className="text-5xl font-bold" style={{ fontFamily: "Aloevera Outline" }}>About</h1>
                        <h1 className="text-5xl font-bold" style={{ fontFamily: "Aloevera" }}>Malabar Hub Meet</h1>

                        <p className="py-6"> Malabar Hub Meet (MHM) is a two-day annual flagship event of IEEE Malabar Hub aimed at connecting the vibrant volunteers across the Malabar Hub and cheering them up with technical and cultural exposure. The two-day arch event features top-notch programs including technical workshops, mentorship opportunities, industrial visits, and cultural programs. Attended by students spanning different colleges in the Malabar region, this event facilitates a platform for creating the building blocks of a lifelong and diverse professional network. The event caters to the inquisitive minds of young engineers by allowing them to interact with technical experts and alleviate their concerns about the working world while providing real-time industrial networking. The event also focuses on equipping the delegates with volunteering opportunities and improving their communication skills and confidence level. We promise a platform to converse and think with other enthusiastic minds through MHM. </p>
                        <a className="btn btn-primary" href='https://mhm22.ieee-link.org/'>MHM'22</a>
                    </div>
                    <img src={image1} className="rounded-lg shadow-2xl" style={{ borderRadius: "1rem", width: "36rem" }} />

                </div>
            </div >
            <div className="divider"></div>
            <Glimpses />
            <div className="divider"></div>
        </>
    )
}
export default SimpleAbout