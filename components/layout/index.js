import Footer from "./Footer";
import Navbar from "./Navbar";
import Search from "../Search";
import FoodType from "./FoodType";
import { motion, AnimatePresence } from "framer-motion";

const Layout = ({ children }) => {
  return (
    <div className="lg:mt-5 mt-4 lg:mx-80 mx-2">
      <Navbar />
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ delay: 0.5 }}
        >
          <Search />
          <FoodType />
          {children}
        </motion.div>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default Layout;
