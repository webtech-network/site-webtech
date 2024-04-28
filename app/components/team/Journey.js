import React from 'react';
import './journey.css';
import getAllEvents from '../../sympla';

async function VerticalTimeline() {

    const data = await getAllEvents();
    const events = data.data;

    return (
        <div className={"timeline"}>
            <div className={"timelineItemLine"}></div>
            {events.map((event, index) => (
                <div key={index} className={"timelineItem"}>
                    <div className={index % 2 === 0 ? "timelineItemContentLeft" : "timelineItemContentRight"}>
                        <div className="wrapper">
                            <img className={index % 2 === 0 ? "itemImgTimeline" : "itemImgTimelineRight"} src={event.image} alt={event.name} />
                            <p>{event.name}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default VerticalTimeline;