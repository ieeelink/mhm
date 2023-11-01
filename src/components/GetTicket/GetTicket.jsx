import ticket from '../../assets/images/comingsoon.svg';
const GetTicket = () => {
    return (
        <div id="get-ticket" className="w-full flex p-12">
            <a href="#" className='m-auto'>
                <img src={ticket} alt="" className='m-auto ' />
            </a>

        </div>
    );
}

export default GetTicket;