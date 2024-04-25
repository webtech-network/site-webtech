import React from 'react';
import './style.css';
import getData from '../../sympla';

async function VerticalTimeline () {

  const data = await getData();
  const events = data.data;

<<<<<<< HEAD
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
=======
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
>>>>>>> 7596f5e (correcao .env e exibicao dos eventos)
};

export default VerticalTimeline;