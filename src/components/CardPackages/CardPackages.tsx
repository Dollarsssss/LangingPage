import './CardPackages.css'
import PackagesCard from './PackagesCard/PackagesCard'
import { useContext } from 'react'
import { DataContext } from '../../App'

function CardPackages() {

  const {packages} = useContext(DataContext)

  return (
    <section id="CardPackages" className='cardPackages'>
      <div className="container">
        <div className="cardPackages-title">
          <h1>แพ็คเกจบริการทำเว็บที่เหมาะกับธุรกิจคุณ!</h1>
          <h4>เลือกแพ็คเกจสำหรับทำเว็บไซต์  ไม่ว่าธุรกิจเล็กหรือใหญ่</h4>
        </div>
        <div className="card-collection">
           {packages.map((item,index)=>
            <PackagesCard key={index} title={item.title} subTitle={item.subtitle} price={item.price} description={item.description} />
          )}
        </div>
      </div>
    </section>
  )
}

export default CardPackages