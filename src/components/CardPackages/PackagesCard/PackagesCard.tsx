import { ReactNode } from 'react'
import './PackagesCard.css'

interface PackagesCard {
  title:ReactNode
  subTitle:ReactNode
  price:ReactNode
  description:ReactNode
}

function PackagesCard({title, subTitle, price, description}:PackagesCard) {

  return (
    <div className='packagesCard'>
      <div className="item-package-card">
        <div className="item-wrapper">
          <div className="card-top">
            <h1>{title}</h1>
            <h4>{subTitle}</h4>
          </div>
          <div className="card-mid">
            <h4>ราคาเริ่มต้น</h4>
            <h1>{price} ฿</h1>
          </div>
          <div className="card-footer">
             <h4 className='text-small'>{description}</h4>
          </div>
        </div>
      </div>

    </div>
  )
}

export default PackagesCard