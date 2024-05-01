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
    // Remove HTML tags
    let cleanedText = text.replace(/<[^>]*>/g, '');

    // Add a space after punctuation if there isn't one already
    cleanedText = cleanedText.replace(/([.,!?;:])\b(?![\s.,!?;:])/, '$1 ');

    return cleanedText;
}

export function truncateDescription(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
}

function Event({ event, buttonName }) {

    const { day, month } = getDayAndMonth(event.start_date);
    const description = truncateDescription(removeTags(event.detail), 160);

    return (
        <div className="flex lg:flex-row flex-col lg:space-x-5 lg:space-y-0 space-y-3 mb-5 bg-gray p-4 rounded-xl">
            <div className="lg:w-full lg:max-w-[400px] aspect-16/9">
                <img
                    className="w-full h-full object-contain rounded-xl"
                    src={event.image}
                    alt={event.name}
                />
            </div>

            <div className="lg:w-3/5 flex flex-col lg:justify-between">
                <div>
                    <h2 className="text-xl font-bold overflow-hidden whitespace-nowrap text-ellipsis" style={{ maxWidth: '550px' }} title={event.name}>{event.name}</h2>
                    <p className="pt-2 text-lg">{description}</p>
                </div>
                <br />
                <div className="flex b-0">
                    <h4 className="text-md font-bold">
                        <FontAwesomeIcon icon={faLocationDot} className="mr-2" />{event.address.address_alt} - {event.address.name}
                    </h4>
                </div>
            </div>

            <div className="lg:w-1/5 flex lg:flex-col relative justify-between">
                <div className="lg:text-right text-left">
                    <h4 className="lg:text-6xl text-2xl font-bold">{day}</h4>
                    <p className="lg:text-2xl">{months[month]}</p>
                </div>
                <a href={event.url} target="_blank" rel="noreferrer">
                    <button className="absolute bottom-0 right-0 float-right bg-primary text-secondary-dark px-4 py-2 rounded-xl font-bold hover:bg-primary-light cursor-pointer ">
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
            <EventsGroup events={pastEvents} title="Eventos Passados" buttonName="Saiba mais" />
        </>
    );
}

export default EventsSection;
