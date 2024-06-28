import { ReactNode, useState } from 'react'
import './ServiceCard.css'
import { FaArrowRight } from 'react-icons/fa6'

interface ServiceCardProps {
  logo:ReactNode
  title: ReactNode; //props ที่รับเข้ามาจะเป็นอะไรก็ได้
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

  return (
    <section className='serviceCard'>
      <div className="item-service-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <a href="#Contact" className='item-wrapper'>
          <div className='card-top'>
            {logo}
          </div>
          <div className='card-mid'>
            <h3>{title}</h3>
            <br />
            <h4>{subtitle}</h4>
          </div>
        </a>
        <a href="#Contact" className='card-footer' style={{ backgroundColor: isHovered ? 'var(--mainColor)' : '' }}>
          <FaArrowRight className='arrow-right' style={{ color: isHovered ? 'var(--coolWhite)' : '' }} />
        </a>
      </div>
    </section>
  )
}

export default ServiceCard