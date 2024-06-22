import { ReactNode, useState } from 'react'
import './ServiceCard.css'
import { FaArrowRight } from 'react-icons/fa6'

interface ServiceCardProps {
  title: ReactNode; //props ที่รับเข้ามาจะเป็นอะไรก็ได้
  subtitle: ReactNode;
}

function ServiceCard({title,subtitle}: ServiceCardProps) {

  
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseEnter = () => {
      setIsHovered(true);
  }

  const handleMouseLeave = () => {
      setIsHovered(false);
  }

  return (
    <div className="item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className='item-wrapper'>
        <div className='card-top'>
          Your logo
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
    </div>
  )
}

export default ServiceCard