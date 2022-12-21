import Footer from "./Footer";
import Navbar from "./Navbar";
import Search from "../Search";

const Layout = ({ children }) => {
  return (
    <div className="lg:mt-5">
      <Navbar />
      <Search />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
