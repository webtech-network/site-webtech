'use client';
import React, { useEffect } from 'react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import ButtonLink from '../common/ButtonLink';
import { removeTags, truncateDescription } from '../events/EventsSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import './Banner.css';

export const revalidate = 60;

function Banner({ events, initialIndex }) {
      const [currentIndex, setCurrentIndex] = React.useState(initialIndex);

      useEffect(() => {
            const interval = setInterval(() => {
                  setCurrentIndex((currentIndex + 1) % events.length);
            }, 10000);

            return () => clearInterval(interval);
      }, [currentIndex, events.length]);

      const formatDate = (dateString) => {
            const date = new Date(dateString);
            const formattedDate = format(date, "EEE, dd 'de' MMM - HH:mm", { locale: ptBR });
            return formattedDate;
      };

      const event = events[currentIndex];
      const description = event ? truncateDescription(removeTags(event.detail), 150) : '';
      const formattedDate = event ? formatDate(event.end_date) : '';

      return (
            <div className="slider container">
                  <section className="slide">
                        <div className="p-7 rounded-xl bg-neutral-900 mx-auto grid gap-5 grid-cols-1 lg:grid-cols-2 justify-between">
                              <>
                                    <div className="flex flex-col justify-between col-span-4/6 gap-5">
                                          <div>
                                                <h1 className="text-3xl font-semibold text-primary mb-3">{event.name}</h1>
                                                <p className="text-lg text-white">{description}</p>
                                          </div>
                                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                                                <div className="flex flex-col justify-center">
                                                      <span className="text-white font-semibold">
                                                            <FontAwesomeIcon icon={faCalendar} className="mr-2 opacity-50" />
                                                            {formattedDate}
                                                      </span>
                                                </div>
                                                <ButtonLink text="Inscreva-se" link={event.url} />
                                          </div>
                                    </div>
                                    <div className="flex md:justify-end justify-center col-span-2/6">
                                          <img src={event.image} className="max-w-full rounded-xl" />
                                    </div>
                              </>
                        </div>
                        <div className="dots">
                              {[...Array(5)].map((_, index) => (
                                    <span
                                          key={index}
                                          className={`dot ${index === currentIndex % 5 ? 'active' : ''}`}
                                          onClick={() => setCurrentIndex(index)}
                                    ></span>
                              ))}
                        </div>
                  </section>
            </div>
      );
}

export default Banner;
