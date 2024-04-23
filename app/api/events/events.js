import fetch from 'node-fetch';

export default async function handler(req, res) {
    try {
        const eventsData = await getEventsData();
        res.status(200).json(eventsData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao carregar os eventos' });
    }
}

async function getEventsData() {
    const apiKey = process.env.SYMPLA_API_KEY;
    const url = 'https://api.sympla.com.br/public/v4/events';

    const response = await fetch(url, {
        headers: {
            's_token': apiKey
        }
    });

    if (!response.ok) {
        throw new Error('Erro ao carregar os eventos na api do Sympla');
    }

    const data = await response.json();
    return data.data;
}


/*   async function fetchEvents() {
                  try {
                        const response = await fetch('/api/events');
                        if (!response.ok) {
                              throw new Error('Erro ao carregar os eventos');
                        }
                        const data = await response.json();
                        setEvents(data);
                        setLoading(false);
                  } catch (error) {
                        console.error(error);
                        setLoading(false);
                  }
            }
            fetchEvents(); */