import { useState } from "react";
import EventCard from "./EventCard";
import eventsData from "../data/eventsData";
import "./EventsList.css";

function EventList() {
  const [showAll, setShowAll] = useState(false);

  const eventsToShow = showAll ? eventsData : eventsData.slice(0, 3);

  return (
    <div className="events-section">
      <div className="section-header">
        <h2>Upcoming Events</h2>
        <button onClick={() => setShowAll(prev => !prev)}>
          {showAll ? "Show Less ↑" : "View All →"}
        </button>
      </div>
      <div className="events-flex">
        {eventsToShow.map(event => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>
    </div>
  );
}

export default EventList;