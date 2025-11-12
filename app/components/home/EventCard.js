import React from 'react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import Loading from '../../loading';
import getAllEvents from '../../sympla';
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

    const currentTime = new Date().getTime(); //data atual
    const upcomingEvents = events.filter(event => new Date(event.end_date).getTime() > currentTime); //filtro de eventos futuros 

    if (upcomingEvents.length === 0) { //caso nao tenha eventos futuros
        return (
            <div className="slider container">
                <section className="slide">
                    <div className="p-7 rounded-xl bg-neutral-900 mx-auto flex justify-center items-center">
                        <div className="text-center">
                            <h1 className=" text-2xl font-semibold text-primary mb-1 ">Nenhum evento futuro da WebTech disponível.</h1>
                        </div>
                    </div>
                </section>
            </div>
        );
    }

    const sortedEvents = events.sort(compareEndDate).slice(0, 3);

    return (
        <div className="flex justify-center flex-wrap gap-4">
            {sortedEvents.map(event => {
                const description = event.detail ? truncateDescription(removeTags(event.detail), 100) : '';
                const formattedDate = formatDate(event.end_date);
                return (
                    <div key={event.id} className="flex flex-col justify-between gap-3 p-4 md:min-w-80 md:max-w-80 bg-gray rounded-xl">
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