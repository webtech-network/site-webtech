'use client'
import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import Loading from '@/app/loading';
import getData from '../../EventsCard/getdata';
import { removeTags, truncateDescription } from '../../EventsCard/card';

export default function CardEvento() {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getData();
                const sortedEvents = data.data.sort((a, b) => new Date(b.end_date) - new Date(a.end_date));
                setEvents(sortedEvents.slice(0, 3));
                setLoading(false);
            } catch (error) {
                console.error('Erro ao obter os eventos:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const formattedDate = format(date, "EEE, dd 'de' MMM - HH:mm", { locale: ptBR });
        return formattedDate;
    };

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="flex justify-center flex-wrap gap-4">
            {events.map(event => {
                const description = event.detail ? truncateDescription(removeTags(event.detail), 100) : '';
                const formattedDate = formatDate(event.end_date);
                return (
                    <div key={event.id} className="flex flex-col justify-between gap-3 p-4 min-w-52 max-w-52 md:min-w-80 md:max-w-80 bg-cinza box-sombra-sm rounded-md">
                        <div className='flex flex-col justify-between'>
                            <img className="w-full h-40 hidden md:block" src={event.image} alt="" />
                            <h1 className="text-secundariaDark font-bold text-xl mt-3">{event.name}</h1>
                            <div className="">
                                <p className="py-2 text-base">{description}</p>
                            </div>
                        </div>
                        <div className="mb-3">
                            <span className="text-secundariaDark text-base font-bold">{formattedDate}</span>
                            <a href={event.url} target="_blank" rel="noreferrer">
                                <button className="drop-shadow-md mt-2 w-full bg-primaria text-secundariaDark px-4 py-2 rounded-md font-bold hover:bg-primariaLight">
                                    Saiba mais
                                </button>
                            </a>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}
