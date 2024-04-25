import React from 'react';
import './style.css';

const VerticalTimeline = ({ items }) => {
    return (
        <div className={"timeline"}>
            <div className={"timelineItemLine"}></div>
            {items.map((item, index) => (
                <div key={index} className={"timelineItem"}>
                    <div className={index % 2 === 0 ? "timelineItemContentLeft" : "timelineItemContentRight"}>
                        <div class="wrapper">
                            <img className={index % 2 === 0 ? "itemImgTimeline" : "itemImgTimelineRight"} src={item.image} alt={item.imageName} />
                            <p>{item.description}</p>
                        </div>
                    </div>

                </div>
            ))}
        </div>
    );
};

export default VerticalTimeline;
