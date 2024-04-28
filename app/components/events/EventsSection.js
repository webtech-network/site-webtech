import Loading from '@/app/loading';
import getAllEvents from '@/app/sympla';
import SectionTitle from '../common/SectionTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const months = {
    1: 'JAN',
    2: 'FEV',
    3: 'MAR',
    4: 'ABR',
    5: 'MAI',
    6: 'JUN',
    7: 'JUL',
    8: 'AGO',
    9: 'SET',
    10: 'OUT',
    11: 'NOV',
    12: 'DEZ',
};

function getDayAndMonth(dateString) {
    const parts = dateString.split(' ')[0].split('-');
    const day = parseInt(parts[2], 10);
    const month = parseInt(parts[1], 10);
    return { day, month };
}

export function removeTags(text) {
    return text.replace(/<[^>]*>/g, '');
}

export function truncateDescription(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
}

function Event({ event, buttonName }) {

    const { day, month } = getDayAndMonth(event.start_date);
    const description = truncateDescription(removeTags(event.detail), 250);

    return (
        <div className="flex md:flex-row flex-col md:space-x-5 md:space-y-0 space-y-5 mb-20">
            <div className="md:w-1/3 container aspect-[4/3]">
                <img
                    className="w-full h-full object-cover rounded-2xl"
                    src={event.image}
                    alt={event.name}
                />
            </div>

            <div className="md:w-3/5 flex flex-col md:justify-between">
                <h2 className="md:text-3xl text-xl font-bold">{event.name}</h2>
                <p className="md:text-xl pt-2 text-base">{description}</p>
                <br />
                <div className="flex b-0">
                    <h4 className="md:text-xl md:block hidden font-bold">
                        <FontAwesomeIcon icon={faLocationDot} className="mr-2" />{event.address.address_alt} - {event.address.name}
                    </h4>
                </div>
            </div>

            <div className="md:w-1/5 flex md:flex-col relative justify-between">
                <div className="md:text-right text-left">
                    <h4 className="md:text-6xl text-2xl font-bold">{day}</h4>
                    <p className="md:text-2xl">{months[month]}</p>
                </div>
                <a href={event.url} target="_blank" rel="noreferrer">
                    <button className="drop-shadow-md absolute bottom-0 right-0 float-right bg-primaria text-secundariaDark px-4 py-2 rounded-md font-bold hover:bg-primariaLight cursor-pointer ">
                        {buttonName}
                    </button>
                </a>
            </div>
        </div>
    );
}

function EventsGroup({ events, title, buttonName }) {

    if (events.length === 0) {
        return;
    }

    return (
        <>
            <SectionTitle>{title}</SectionTitle>
            {events.map((event) => <Event key={event.id} event={event} buttonName={buttonName} />)}
        </>
    );
}

async function EventsSection() {

    const data = await getAllEvents();
    const events = data.data;

    const currentDate = new Date();
    const upcomingEvents = events
        .filter(event => new Date(event.end_date) >= currentDate)
        .sort((b, a) => new Date(b.end_date) - new Date(a.end_date));

    const pastEvents = events
        .filter(event => new Date(event.end_date) < currentDate)
        .sort((a, b) => new Date(b.end_date) - new Date(a.end_date));

    if (!events) {
        return <Loading />;
    }

    return (
        <>
            <EventsGroup events={upcomingEvents} title="Eventos Marcados" buttonName="Inscreva-se" />
            <EventsGroup events={pastEvents} title="Eventos Passados" buttonName="Ver mais" />
        </>
    );
}

export default EventsSection;