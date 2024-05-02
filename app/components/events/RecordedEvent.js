import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

export default function RecordedEvent({ title, description, date, videoUrl }) {

    return (
        <div className="flex md:flex-row flex-col md:gap-[74px] gap-5 my-10 bg-gray rounded-xl p-7">
            <div className="md:w-3/5 flex flex-col gap-5 justify-between">
                <div className="flex flex-col gap-2">
                    <h2 className="md:text-2xl font-bold">
                        {title}
                    </h2>
                    <p className="text-sm md:text-base">
                        {description}
                    </p>
                </div>
                <p className="font-bold"><FontAwesomeIcon icon={faCalendar} /> {date}</p>
            </div>
            <div className="md:w-2/5">
                <iframe
                    className="w-full aspect-video rounded-xl"
                    src={videoUrl}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );

}