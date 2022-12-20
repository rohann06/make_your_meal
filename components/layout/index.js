import Footer from "./Footer";
import Navbar from "./Navbar";
import { motion, AnimatePresence } from "framer-motion";
import Search from "../Search";

const Layout = ({ children }) => {
  return (
    <div className="lg:mt-5">
      <Navbar />
      <Search />
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ delay: 0.7 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default Layout;
