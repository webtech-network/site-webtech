import React from 'react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import Loading from '@/app/loading';
import getAllEvents from '@/app/sympla';
import { removeTags, truncateDescription } from '../events/EventsSection';
import ButtonLink from '../common/ButtonLink';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";

async function EventCard() {
    const data = await getAllEvents();
    const events = data.data;

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const formattedDate = format(date, "EEE, dd 'de' MMM - HH:mm", { locale: ptBR });
        return formattedDate;
    };

    const compareEndDate = (a, b) => {
        const dateA = new Date(a.end_date);
        const dateB = new Date(b.end_date);
        return dateA - dateB;
    };

    if (!events) {
        return <Loading />;
    }

    const sortedEvents = events.sort(compareEndDate).slice(0, 3);

    return (
        <div className="flex justify-center flex-wrap gap-4">
            {sortedEvents.map(event => {
                const description = event.detail ? truncateDescription(removeTags(event.detail), 100) : '';
                const formattedDate = formatDate(event.end_date);
                return (
                    <div key={event.id} className="flex flex-col justify-between gap-3 p-4 min-w-52 max-w-52 md:min-w-80 md:max-w-80 bg-gray rounded-xl">
                        <div className='flex flex-col justify-between'>
                            <img className="w-full h-40 hidden md:block rounded-xl" src={event.image} alt="" />
                            <h1 className="text-secondary-dark font-bold text-lg mt-3">{event.name}</h1>
                            <div className="">
                                <p className="py-2 text-base">{description}</p>
                            </div>
                        </div>
                        <div className="">
                            <p className="text-secondary-dark font-bold mb-3">
                                <FontAwesomeIcon icon={faCalendar} className="mr-2" />
                                {formattedDate}
                            </p>
                            <ButtonLink text="Saiba mais" link={event.url} />
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default EventCard;