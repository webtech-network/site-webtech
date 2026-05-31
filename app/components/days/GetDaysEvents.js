import getAllEvents from '../../sympla';

export async function fetchDaysEvents() {
    try {
        const data = await getAllEvents();
        const events = data.data;
        
        // Filtrar apenas eventos que contenham "days" no nome (case-insensitive)
        const daysEvents = events.filter(event => 
            event.name.toLowerCase().includes('days')
        );

        // Ordenar por data (do mais recente para o mais antigo)
        const sortedEvents = [...daysEvents].sort((a, b) => new Date(b.end_date) - new Date(a.end_date));

        const now = new Date();

        const upcomingEvents = sortedEvents.filter(event => new Date(event.end_date) >= now);
        const pastEvents = sortedEvents.filter(event => new Date(event.end_date) < now);

        return {
            upcomingEvents: upcomingEvents.reverse(), // O evento futuro mais próximo primeiro
            pastEvents
        };
    } catch (e) {
        throw new Error('Falha ao obter os dados dos eventos do Days. ' + e.message);
    }
}
