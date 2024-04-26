import CardEvent from "./EventCard";

export default function CampoEventos() {
    return (
        <>
            <h1 className="font-bold text-3xl text-center mb-10 text-secundariaDark">Eventos</h1>
            <div className="flex items-center flex-wrap justify-center gap-4">
                <CardEvent />
            </div>
        </>
    );
}