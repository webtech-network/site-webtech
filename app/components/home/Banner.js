import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import ButtonLink from '../common/ButtonLink';
import getAllEvents from '@/app/sympla';
import { removeTags, truncateDescription } from '../events/EventsSection';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';

export default async function Banner() {
    const data = await getAllEvents();
    const events = data.data;

    let event = null;
    let error = null;

    if (events && Array.isArray(events) && events.length > 0) {
        const upcomingEvents = events.filter((event) => {
            const endDate = new Date(event.end_date);
            const currentDate = new Date();
            return endDate > currentDate;
        });

        if (upcomingEvents.length > 0) {
            upcomingEvents.sort((a, b) => new Date(a.end_date) - new Date(b.end_date));
            event = upcomingEvents[0];
        } else {
            error = 'Não há eventos futuros. Exibindo o último evento.';
            events.sort((a, b) => new Date(a.end_date) - new Date(b.end_date));
            event = events[0];
        }
    } else {
        error = 'Falha ao obter os dados dos eventos.';
    }

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const formattedDate = format(date, "EEE, dd 'de' MMM - HH:mm", { locale: ptBR });
        return formattedDate;
    };

    const description = event ? truncateDescription(removeTags(event.detail), 150) : '';
    const formattedDate = event ? formatDate(event.end_date) : '';

    return (
        <section className="w-100 p-7 rounded-xl bg-neutral-900 container mx-auto grid gap-5 grid-cols-1 lg:grid-cols-2 justify-between">
            {error ? (
                <p>{error}</p>
            ) : (
                <>
                    <div className="flex flex-col justify-between col-span-4/6 gap-2">
                        <h1 className="text-3xl font-semibold text-primary">{event.name}</h1>
                        <div>
                            <p className="text-lg text-white">{description}</p>
                            <span className="block text-white font-bold mb-2 mt-10">
                                <FontAwesomeIcon icon={faCalendar} className="mr-2" />{formattedDate}
                            </span>
                        </div>
                        <ButtonLink text="Inscreva-se" link={event.url} />
                    </div>
                    <div className="flex md:justify-end justify-center col-span-2/6">
                        <img src={event.image} alt="" className="max-w-full rounded-xl h-auto drop-shadow-2xl" />
                    </div>
                </>
            )}
        </section>
    );
}