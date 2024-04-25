export default async function getData() {
<<<<<<< HEAD:app/components/EventsCard/getdata.js
    const response = await fetch('https://api.sympla.com.br/public/v4/events', {
        headers: {
            's_token': process.env.NEXT_PUBLIC_SYMPLA_API_KEY,
        },
    });
    const data = await response.json();
    return data;
=======
  const response = await fetch('https://api.sympla.com.br/public/v4/events', {
    headers: {
      's_token': process.env.SYMPLA_API_KEY,
    },
  });
  const data = await response.json();
  return data;
>>>>>>> 7596f5e (correcao .env e exibicao dos eventos):app/sympla.js
}