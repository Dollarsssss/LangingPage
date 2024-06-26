import { ReactNode } from "react";
import "./ContactCard.css";

interface ContactCardProps {
    logo:ReactNode
    title:ReactNode
    subtitle:ReactNode
}

function ContactCard({logo,title, subtitle}:ContactCardProps) {
    
  return (
    <>
      <div className="contact-card-item">
        <div className="logo">
          {logo}
        </div>
        <h1 className="title">
          {title}
        </h1>
        <h4 className="subtitle">
          {subtitle}
        </h4>
      </div>
    </>
  );
}

export default ContactCard;
