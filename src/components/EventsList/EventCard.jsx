function EventCard({ image, title, date, location }) {
  return (
    <div className="event-card">
      <img src={image} alt={title} className="event-img" />
      <div className="event-info">
        <h3>{title}</h3>
        <p>📅{date}</p> 
        <p> 📍 {location}</p>
      </div>
    </div>
  );
}

export default EventCard;