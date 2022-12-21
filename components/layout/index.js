import Footer from "./Footer";
import Navbar from "./Navbar";
import Search from "../Search";
import FoodType from "./FoodType";

const Layout = ({ children }) => {
  return (
    <div className="lg:mt-5">
      <Navbar />
      <Search />
      <FoodType />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
