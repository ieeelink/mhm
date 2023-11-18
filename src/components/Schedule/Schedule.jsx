import Schedule1 from '../../assets/images/sc1.jpg'
import Schedule2 from '../../assets/images/sc2.jpg'

const Schedule = () => {
    return (
        <div id="schedule" className="w-full flex flex-wrap p-12">
                <img src={Schedule1} alt="" className='m-auto md:w-1/2' />
                <img src={Schedule2} alt="" className='m-auto md:w-1/2' />

        </div>
    );
}

export default Schedule;