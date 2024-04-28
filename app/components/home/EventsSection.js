import EventCard from "./EventCard";
import SectionTitle from "../common/SectionTitle";

export default function CampoEventos() {
    return (
        <>
            <SectionTitle>Eventos</SectionTitle>
            <div className="flex items-center flex-wrap justify-center gap-4">
                <EventCard />
            </div>
        </>
    );
}