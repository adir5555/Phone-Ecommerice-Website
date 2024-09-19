import { FaUser } from "react-icons/fa";
import logo from "../assets/images/logo.svg";

import { Link } from "react-router-dom";
import { RiShoppingBagFill } from "react-icons/ri";

const Search = () => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search");
    search.classList.toggle("active", window.scrollY > 100);
  });

  return (
    <>
      <section className="search">
        <div className="container c_flex">
          <div className="logo width ">
            <img src={logo} alt="" />
          </div>

          <div className="search-box f_flex">
            <i className="fa fa-search"></i>
            <input className="text-black text-2xl bg-white" type="text" placeholder="Search and hit enter..." />
            <div className="sm:flex hidden">
              <select className="border-r-2 mr-4  bg-white">
                <option disabled selected>
                  All Categories
                </option>
                <option>Sci-fi</option>
                <option>Drama</option>
                <option>Action</option>
              </select>
            </div>
          </div>

          <div className="icon f_flex width">
            <FaUser className="text-3xl mr-5"></FaUser>
            <div className="cart">
              <Link to="/cart">
                <RiShoppingBagFill className="text-3xl"></RiShoppingBagFill>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
