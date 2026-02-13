import FeatureCard from "./FeatureCard";
import searchIcon from "../../assets/search.jpg";
import ticketIcon from "../../assets/ticket.jpg";
import shareIcon from "../../assets/share.jpg";
import "./Features.css"; 

function Features() {
  return (
    <section className="features">
      <FeatureCard
        icon={searchIcon}
        title="Find Events"
        text="Search and explore local events easily."
      />

      <FeatureCard
        icon={ticketIcon}
        title="Book Tickets"
        text="Get your tickets in just a few clicks."
      />

      <FeatureCard
        icon={shareIcon}
        title="Enjoy & Share"
        text="Have fun and share your experience."
      />
    </section>
  );
}

export default Features;
