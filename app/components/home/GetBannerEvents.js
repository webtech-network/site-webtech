import getAllEvents from '@/app/sympla';

export async function fetchEvents() {
      try {
            const data = await getAllEvents();
            const events = data.data;
            const sortedEvents = [...events].sort((a, b) => new Date(b.end_date) - new Date(a.end_date));

            if (sortedEvents) {
                  const topEvents = sortedEvents.slice(0, 5);
                  return topEvents;
            } else {
                  throw new Error('Falha ao obter os dados dos eventos.');
            }
      } catch (error) {
            throw new Error('Falha ao obter os dados dos eventos.');
      }
}