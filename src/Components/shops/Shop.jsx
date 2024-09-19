import Catg from "./Catg";
import ShopCart from "./ShopCart";
// import "./style.css"

const Shop = () => {
  return (
    <>
      <section className=" background p-6 ">
        <div className="container lg:flex">
          <Catg />

          <div className="contentWidth">
            <div className="flex justify-between px-6 mt-6">
              <div className="">
                <h2>Mobile Phones</h2>
              </div>
              <div className=" ">
                <span>View all</span>
              </div>
            </div>
            <div className="product-content  ">
              <ShopCart />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
