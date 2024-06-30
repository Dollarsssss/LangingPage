import { ReactNode, useState } from 'react'
import './ServiceCard.css'
import { FaArrowRight } from 'react-icons/fa6'

interface ServiceCardProps {
  logo:ReactNode
  title: ReactNode; 
  subtitle: ReactNode;
}

function ServiceCard({ logo ,title, subtitle }: ServiceCardProps) {


  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  }

  const handleMouseLeave = () => {
    setIsHovered(false);
  }

  const scrollToContact = () => {
    const contactElement = document.getElementById('Contact');
    contactElement && contactElement.scrollIntoView();
  };

  return (
    <section className='serviceCard'>
      <a className="item-service-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={scrollToContact}>
        <div className='item-wrapper'>
          <div className='card-top'>
            {logo}
          </div>
          <div className='card-mid'>
            <h3>{title}</h3>
            <br />
            <h4>{subtitle}</h4>
          </div>
        </div>
        <div className='card-footer' style={{ backgroundColor: isHovered ? 'var(--mainColor)' : '' }}>
          <FaArrowRight className='arrow-right' style={{ color: isHovered ? 'var(--coolWhite)' : '' }} />
        </div>
      </a>
    </section>
  )
}

export default ServiceCard