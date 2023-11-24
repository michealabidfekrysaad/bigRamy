import { Navbar } from "../componentsShared/Navbar";
import { Footer } from "../componentsShared/Footer";

export const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="main">{children}</div>
      <Footer />
    </div>
  );
};
