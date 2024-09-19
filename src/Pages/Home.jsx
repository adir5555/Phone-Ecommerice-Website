import Annocument from "../Components/annocument/Annocument";
import Discount from "../Components/discount/Discount";
import FlashDeals from "../Components/flashDeals/FlashDeals";
import Homes from "../Components/MainPage/Homes";
import NewArrivals from "../Components/newarrivals/NewArrivals";
import Shop from "../Components/shops/Shop";
import TopCate from "../Components/top/TopCate";
import Wrapper from "../Components/wrapper/Wrapper";



const Home = () => {
  return (
    <div className="">
      <Homes></Homes>
      <FlashDeals></FlashDeals>
      <TopCate></TopCate>
      <NewArrivals></NewArrivals>
      <Discount></Discount>
      <Shop></Shop>
      <Annocument></Annocument>
      <Wrapper></Wrapper>
     
    </div>
  );
};

export default Home;