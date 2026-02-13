import "./Features.css"; 
  
function FeatureCard({icon, title, text}) { 
 return ( 
    <div className="feature-card"> 
     <img src={icon} alt={title}/> 
     <h3>{title}</h3>    
     <p>{text}</p>
     </div>
 );
} 

export default FeatureCard;