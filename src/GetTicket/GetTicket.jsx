import ticket from '../assets/images/ticket.svg';
const GetTicket = () => {
    return (
        <div id="get-ticket" className="w-full flex p-12">
            <a href="https://www.yepdesk.com/malabar-hub-meet-2023" className='m-auto'>
                <img src={ticket} alt="" className='m-auto ' />
            </a>

        </div>
    );
}

export default GetTicket;