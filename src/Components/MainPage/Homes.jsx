
import Categories from "./Categories"
import "./Home.css"
import SliderHome from "./Slider"

const Homes = () => {
  return (
    <div>
       <section className='home'>
        <div className='container lg:flex'>
          <Categories />
          <SliderHome />
        </div>
      </section>
    </div>
  );
};

export default Homes;