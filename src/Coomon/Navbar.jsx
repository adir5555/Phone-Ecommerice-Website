import  { useState } from "react"
import { BsShop } from "react-icons/bs"
import { Link } from "react-router-dom"

const Navbar = () => {
  const navOptions = <>
  <li>
                <Link to='/'>home</Link>
              </li>
              <li>
                <Link to='/pages'>pages</Link>
              </li>
              <li>
                <Link to='/user'>user account</Link>
              </li>
              <li>
                <Link to='/vendor'>pages</Link>
              </li>
              <li>
                <Link to='/track'>order</Link>
              </li>
              <li>
                <Link to='/contact'>contact</Link>
              </li>
  </>
  // Toogle Menu
  const [MobileMenu, setMobileMenu] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <div className='catgrories d_flex'>
            <span> <BsShop></BsShop></span>
            
            <h4>
              Categories <i className='fa fa-chevron-down'></i>
            </h4>
          </div>

          <div className='navlink z-10 bg-white'>
            <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
              {navOptions}
            </ul>

            <button className='flex sm:hidden toggle' onClick={() => setMobileMenu(!MobileMenu)}>
              {/* {MobileMenu ? <i className='fas fa-times  close home-btn'></i> : <i className='fas fa-bars open'></i>} */}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
