export default async function getAllEvents() {
    const response = await fetch('https://api.sympla.com.br/public/v4/events', {
        headers: {
            s_token: process.env.SYMPLA_API_KEY,
        },
        cache: 'no-store',
    });

    const data = await response.json();

   const publicEvents = data.data.filter(event => event.private_event === 0);
    
    return {
        ...data,
        data: publicEvents
    };
}