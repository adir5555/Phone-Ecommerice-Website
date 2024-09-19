
import { BsShop } from "react-icons/bs"
import "./style.css"
import TopCart from "./TopCart"

const TopCate = () => {
  return (
    <>
      <section className='TopCate background'>
        <div className='container'>
          <div className='flex justify-between mb-4'>
            <div className=' flex gap-3'>
            <BsShop className="text-3xl "></BsShop>
              <h2 className="text-3xl">Top Categories</h2>
            </div>
            <div className=''>
              <span>View all</span>
            
            </div>
          </div>
         
         <TopCart />
         
        </div>
      </section>
    </>
  )
}

export default TopCate
