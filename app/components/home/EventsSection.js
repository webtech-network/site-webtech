import React from 'react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import Loading from '../../loading';
import getAllEvents from '../../sympla';
import { removeTags, truncateDescription } from '../events/EventsSection';
import ButtonLink from '../common/ButtonLink';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import SectionTitle from "../common/SectionTitle";

export default async function EventsSection() {
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
        return dateB - dateA;
    };

    if (!events) {
        return <Loading />;
    }

    const sortedEvents = events.sort(compareEndDate).slice(0, 3);

    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {sortedEvents.map(event => {
                    const description = event.detail ? truncateDescription(removeTags(event.detail), 100) : '';
                    const formattedDate = formatDate(event.end_date);
                    return (
                        <div key={event.id} className="flex flex-col justify-between gap-3 p-4 bg-gray rounded-xl">
                            <div className='flex flex-col justify-between'>
                                <img className="w-full rounded-xl" src={event.image} alt="" />
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
        </>
    );
}