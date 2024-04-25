import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import BtnLink from '../BtnLink';
import getData from '@/app/sympla';
import { removeTags, truncateDescription } from '../EventsCard/card';

<<<<<<< HEAD
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
                        upcomingEvents.sort((a, b) => new Date(b.end_date) - new Date(a.end_date));
                        setEvent(upcomingEvents[0]);
                    } else {
                        setError('Não há eventos futuros. Exibindo o último evento.');
                        data.data.sort((a, b) => new Date(b.end_date) - new Date(a.end_date));
                        setEvent(data.data[0]);
                    }
                } else {
                    setError('Falha ao obter os dados dos eventos.');
                }
                setLoading(false);
            })
            .catch((error) => {
                setError('Falha ao obter os dados dos eventos.');
                setLoading(false);
            });
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const formattedDate = format(date, "EEE, dd 'de' MMM - HH:mm", { locale: ptBR });
        return formattedDate;
    };

    const description = event ? truncateDescription(removeTags(event.detail), 250) : '';
    const formattedDate = event ? formatDate(event.end_date) : '';

    return (
        <section className="conteudo-banner container mx-auto grid gap-8 md:grid-cols-2 grid-cols-1 justify-between">
            {loading ? (
                <p />
            ) : error ? (
                <p>{error}</p>
            ) : (
                <>
                    <div className="flex flex-col justify-between col-span-4/6 ">
                        <h1 className="text-3xl font-bold text-primaria text-sombra mb-1">{event.name}</h1>
                        <div>
                            <p className="text-xl text-whiteLight text-sombra">{description}</p>
                            <p className="text-white text-sombra mb-2 mt-10"><span className="font-bold">Data: </span>{formattedDate}</p>
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
=======
export default async function Banner() {
  const data = await getData();
  const events = data.data;

  let event = null;
  let error = null;

  if (events && Array.isArray(events) && events.length > 0) {
    const upcomingEvents = events.filter((event) => {
      const endDate = new Date(event.end_date);
      const currentDate = new Date();
      return endDate > currentDate;
    });

    if (upcomingEvents.length > 0) {
      upcomingEvents.sort((a, b) => new Date(b.end_date) - new Date(a.end_date));
      event = upcomingEvents[0];
    } else {
      error = 'Não há eventos futuros. Exibindo o último evento.';
      events.sort((a, b) => new Date(b.end_date) - new Date(a.end_date));
      event = events[0];
    }
  } else {
    error = 'Falha ao obter os dados dos eventos.';
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = format(date, "EEE, dd 'de' MMM - HH:mm", { locale: ptBR });
    return formattedDate;
  };

  const description = event ? truncateDescription(removeTags(event.detail), 150) : '';
  const formattedDate = event ? formatDate(event.end_date) : '';

  return (
    <section className="conteudo-banner container mx-auto grid gap-8 md:grid-cols-2 grid-cols-1 justify-between">
      {error ? (
        <p>{error}</p>
      ) : (
        <>
          <div className="flex flex-col justify-between col-span-4/6 ">
            <h1 className="text-3xl font-bold text-primaria text-sombra">{event.name}</h1>
            <div>
              <p className="text-xl text-whiteLight text-sombra">{description}</p>
              <span className="block text-white font-bold text-sombra mb-2 mt-10">Data: {formattedDate}</span>
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
>>>>>>> 7596f5e (correcao .env e exibicao dos eventos)
}