export default async function getAllEvents() {
    const response = await fetch('https://api.sympla.com.br/public/v4/events', {
        headers: {
            s_token: process.env.SYMPLA_API_KEY,
        },
        next: {
            revalidate: 60,
        },
    });

    const data = await response.json();

    const publicEvents = data.data ? data.data.filter(event => !event.private_event) : [];

    return {
        ...data,
        data: publicEvents
    };
}