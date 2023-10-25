import image1 from '../../assets/images/mhm.webp'
import gcek from '../../assets/images/gcek.jpg'
import './About.css'
import Glimpses from '../Glimpses/Glimpses'
const About = () => {
    return (
        <>
            <div className="hero  py-12" id='about'>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div>
                        <h1 className="text-5xl font-bold" style={{ fontFamily: "Aloevera Outline" }}>About</h1>
                        <h1 className="text-5xl font-bold" style={{ fontFamily: "Aloevera" }}>Malabar Hub Meet</h1>

                        <p className="py-6"> Malabar Hub Meet (MHM) is a two-day annual flagship event of IEEE Malabar Hub aimed at connecting the vibrant volunteers across the Malabar Hub and cheering them up with technical and cultural exposure. The three-day arch event features top-notch programs including technical workshops, mentorship opportunities, industrial visits, and cultural programs. Attended by students spanning different colleges in the Malabar region, this event facilitates a platform for creating the building blocks of a lifelong and diverse professional network. The event caters to the inquisitive minds of young engineers by allowing them to interact with technical experts and alleviate their concerns about the working world while providing real-time industrial networking. The event also focuses on equipping the delegates with volunteering opportunities and improving their communication skills and confidence level. We promise a platform to converse and think with other enthusiastic minds through MHM. </p>
                        <button className="btn btn-primary">MHM'22</button>
                    </div>
                    <img src={image1} className="rounded-lg shadow-2xl" style={{ borderRadius: "1rem", width: "36rem" }} />

                </div>
            </div >
            <Glimpses/>
            {/* <div className="p-12 flex justify-evenly">
                <i className='text-xl font-bold'>Logo 1</i>
                <i className='text-xl font-bold'>Logo 2</i>
                <i className='text-xl font-bold'>Logo 3</i>
                <i className='text-xl font-bold'>Logo 4</i>
                <i className='text-xl font-bold'>Logo 5</i>
                <i className='text-xl font-bold'>Logo 6</i>
                <i className='text-xl font-bold'>Logo 7</i>
                <i className='text-xl font-bold'>Logo 8</i>
            </div>
            <div className="mx-auto hero-content py-12 grid grid-cols-1 md:grid-cols-2 gap-x-4">
                <h1 className="text-5xl font-bold col-span-1 md:col-span-2" style={{ fontFamily: "Aloevera Outline" }}>Our</h1>
                <h1 className="text-5xl font-bold col-span-1 md:col-span-2" style={{ fontFamily: "Aloevera" }}>Features</h1>
                <div className="artboard artboard-demo p-4 mt-3">
                    <h1 className="text-3xl font-bold" style={{ fontFamily: "Aloevera" }}>Workshops</h1>
                </div>
                <div className="artboard artboard-demo p-4 mt-3">
                    <h1 className="text-3xl font-bold" style={{ fontFamily: "Aloevera" }}>Workshops</h1>
                </div>
                <div className="artboard artboard-demo p-4 mt-3">
                    <h1 className="text-3xl font-bold" style={{ fontFamily: "Aloevera" }}>Workshops</h1>
                </div>
                <div className="artboard artboard-demo p-4 mt-3">
                    <h1 className="text-3xl font-bold" style={{ fontFamily: "Aloevera" }}>Workshops</h1>
                </div>
            </div> */}


            <div className="hero  py-12">
                <div className="hero-content flex-col lg:flex-row">
                    {/* <img src={image1} className="rounded-lg shadow-2xl"/> */}
                    <div>
                        <h1 className="text-5xl font-bold" style={{ fontFamily: "Aloevera Outline" }}>About</h1>
                        <h1 className="text-5xl font-bold" style={{ fontFamily: "Aloevera" }}>IEEE Kerala Section</h1>

                        <p className="py-6"> With over 14000 members, IEEE Kerala Section is one of the most vibrant communities in the ranks of IEEE. The Section ensures the growth of technical prowess, managerial skills, and volunteering spirit among its members. It is the largest among 343 sections of IEEE spread across 165 countries. The IEEE Kerala section is home to a thriving volunteer community engaged in technical activities throughout the state, including the rapid development of "keralarescue.in" during the 2018 Kerala Floods. It is also well known on a global scale, with many of its activities and accomplishments garnering global attention and being replicated across other Sections on a global scale.  </p>
                    </div>
                </div>
            </div >

            <div className="hero  py-12">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    {/* <img src={image1} className="rounded-lg shadow-2xl w-1/2" /> */}
                    <div>
                        <h1 className="text-5xl font-bold" style={{ fontFamily: "Aloevera Outline" }}>About</h1>
                        <h1 className="text-5xl font-bold" style={{ fontFamily: "Aloevera" }}>IEEE LINK</h1>

                        <p className="py-6">  Local Integrated Network of Kerala IEEE Students or ‘LINK,’ was kickstarted by the IEEE Kerala Section in India and officially inaugurated by Mr. Cleon Anderson, former IEEE President, in 2005. At present, LINK has amassed over ten thousand student members in 108+ student branches. As one of the world’s largest student activities groups, LINK has established an extensive network between student branches, thereby enhancing the efficacy of IEEE membership. IEEE Region 10 adopted the LINK model as the R10 Global Integrated Network of IEEE Students (GINI).  </p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div >


            <div className="hero  py-12">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    {/* <img src={image1} className="rounded-lg shadow-2xl w-1/2" /> */}
                    <div>
                        <h1 className="text-5xl font-bold" style={{ fontFamily: "Aloevera Outline" }}>About</h1>
                        <h1 className="text-5xl font-bold" style={{ fontFamily: "Aloevera" }}> IEEE Malabar Hub</h1>

                        <p className="py-6">  Amidst the lush, green and picturesque region of Malabar is a small yet mighty group of students who are connecting, collaborating, experimenting, and always in search of something new. Yes, we are referring to the IEEE Malabar Hub, a networking platform for students and professionals of northern districts of Kerala viz Palakkad, Malappuram, Kozhikode, Wayanad, Kannur, and Kasaragod. The hub currently has 25 student branches and more than 3000 IEEE members. The Malabar hub aims to provide the best in class experience by organizing workshops, talks, internships, and conferences so that at the end of the day, we are not just engineers, but a fully-fledged techno giant dominating the tech industry. The hub invites the attention of all members to work together and organize more activities that would create an opportunity to collaborate with other IEEE members from all over the world.  </p>
                    </div>
                </div>
            </div >

            <div className="hero py-12" >
                <div className="hero-content flex-col lg:flex-row-reverse">
                    {/* <img src={image1} className="rounded-lg shadow-2xl w-1/2" /> */}
                    <div>
                        <h1 className="text-5xl font-bold text-white" style={{ fontFamily: "Aloevera Outline" }}>About</h1>
                        <h1 className="text-5xl font-bold" style={{ fontFamily: "Aloevera" }}> IEEE Malabar Subsection</h1>

                        <p className="py-6">   IEEE Malabar Subsection (MSS) is the first subsection under the Kerala section formed on October 2010. Within this short span of 12 years, MSS has emerged as a strong pillar of development and initiatives in the Malabar region, contributing significantly to the Kerala section. MSS’s mission is to organize various student and professional activities such as invited talks, student internships, workshops, and Flagship conferences. The subsection will collaborate with local and overseas industries and academic institutions in organizing technical workshops or seminars for sharing knowledge related to the latest technologies among the members of MSS. Through collaboration in research and academic activities, the subsection can establish a good understanding of the industry which will greatly benefit IEEE members. IEEE MSS will augment professional networking, humanitarian activities, and staying updated with the latest technological development.  </p>
                    </div>
                </div>
            </div >

            <div className="hero py-12 " id='abt-clg'>
                <div className="hero-overlay bg-opacity-70"></div>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div>
                        <h1 className="text-5xl font-bold" style={{ fontFamily: "Aloevera Outline" }}>About</h1>
                        <h1 className="text-5xl font-bold" style={{ fontFamily: "Aloevera" }}>  IEEE SB GCE Kannur</h1>

                        <p className='py-3'>
                            As one of the premier institutes among the nine Government
                            Engineering Colleges in Kerala, Government College of
                            Engineering, Kannur (GCEK), established in 1986, functions in a
                            sprawling sixty-eight-acre scenic campus, having sound and
                            self-sufficient infrastructure, near the National Highway at
                            Mangattuparamb. GCEK is affiliated to Kerala Technological
                            University (KTU) and is recognised by it as a ‘Centre of
                            Excellence in Systems, Energy and Environment.’
                        </p>
                        <p className='py-3'>Many forums and associations function in this institution,
                            promoting students’ talents and skills with effective utilization
                            of linkage between the institute itself and a wide network of
                            industrial units in the surroundings, aiding to develop
                            practical skills as well as entrepreneurial potentiality. The
                            institute is also approved as a Technology Business
                            Incubation centre under the Ministry of Small and Medium
                            Enterprises (MSME), Government of India.</p>
                        <p className="pb-6">    The IEEE Student Branch of GCEK came into existence on 5th
                            June 2009, standing for the expansion of awareness of
                            students in co-academic matters and the providing of a
                            stepping stone to reach higher professional standards. It is
                            hoped that the activities of IEEE SB GCEK will generate a both
                            a genuine interest and authentic passion in their students in
                            the many facets of becoming professional members of their
                            society.  </p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default About