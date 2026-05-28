import React from 'react';
import SectionTitle from '../common/SectionTitle';
import { removeTags, truncateDescription } from '../events/EventsSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export default function MeetupEventsSection({ events }) {
    if (!events || events.length === 0) return null;

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return format(date, "dd 'de' MMMM, yyyy", { locale: ptBR });
    };

    return (
        <div className="w-full">
            <SectionTitle>Edições Passadas</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {events.map((event) => (
                    <div key={event.id} className="bg-gray p-5 rounded-2xl flex flex-col justify-between hover:shadow-lg transition-shadow">
                        <div>
                            <img src={event.image} alt={event.name} className="w-full h-48 object-cover rounded-xl mb-4" />
                            <h3 className="text-xl font-bold text-secondary-dark mb-2">{event.name}</h3>
                            <p className="text-secondary-light mb-4 text-sm">
                                {truncateDescription(removeTags(event.detail), 120)}
                            </p>
                        </div>
                        <div>
                            <div className="flex items-center text-sm font-semibold text-secondary-dark mb-2">
                                <FontAwesomeIcon icon={faCalendar} className="mr-2" />
                                {formatDate(event.start_date)}
                            </div>
                            <div className="flex items-center text-sm text-secondary-dark mb-4">
                                <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
                                {event.address?.name || 'Local não informado'}
                            </div>
                            <a href={event.url} target="_blank" rel="noreferrer" className="block w-full text-center bg-primary hover:bg-primary-light text-secondary-dark font-bold py-2 rounded-xl transition-colors">
                                Ver Detalhes
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
