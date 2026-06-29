
import TopHeader from "./header/TopHeader";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <TopHeader />
      <main className="grow"><Outlet /></main>
      <Footer />
    </div>
  );
};

export default MainLayout;
