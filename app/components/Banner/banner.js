'use client'
import { useEffect, useState } from 'react';
import BtnLink from '../BtnLink';
import getData from '../EventsCard/getdata';
import Loading from '@/app/loading';
import { removeTags, truncateDescription } from '../EventsCard/card';

export function Banner() {
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getData()
      .then((data) => {
        if (data && Array.isArray(data.data) && data.data.length > 0) {
          const upcomingEvents = data.data.filter((event) => {
            const endDate = new Date(event.end_date);
            const currentDate = new Date();
            return endDate > currentDate;
          });

          if (upcomingEvents.length > 0) {
            upcomingEvents.sort((a, b) => new Date(a.end_date) - new Date(b.end_date));
            setEvent(upcomingEvents[0]);
          } else {
            setError('No upcoming events. Displaying the last event.');
            setEvent(data.data[data.data.length - 1]);
          }
        } else {
          setError('Failed to fetch event data.');
        }
        setLoading(false);
      })
      .catch((error) => {
        setError('Failed to fetch event data.');
        setLoading(false);
      });
  }, []);

  const description = event ? truncateDescription(removeTags(event.detail), 250) : '';
  return (
    <section className="conteudo-banner max-w-[1536px] mx-auto grid gap-8 md:grid-cols-2 grid-cols-1 justify-between">
      {loading ? (
        <p />
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          <div className="flex flex-col justify-between col-span-4/6">
            <h1 className="text-3xl font-bold text-primaria text-sombra">{event.name}</h1>
            <div>
              <p className="text-xl text-whiteLight text-sombra">{description}</p>
              <span className="block text-white font-bold text-sombra mt-10">Data: {event.end_date}</span>
            </div>
            <BtnLink texto={'Inscrições abertas'} link={event.url} />
          </div>
          <div className="flex md:justify-end justify-center col-span-2/6">
            <img src={event.image} alt="" className="max-w-full rounded-xl h-auto drop-shadow-2xl" />
          </div>
        </>
      )}
    </section>
  );
}
