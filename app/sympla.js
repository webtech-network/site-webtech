export default async function getData() {
      const response = await fetch('https://api.sympla.com.br/public/v4/events', {
            headers: {
                  's_token': process.env.SYMPLA_API_KEY,
            },
      });
      const data = await response.json();
      return data;
}