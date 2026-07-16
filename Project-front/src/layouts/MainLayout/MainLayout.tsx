import Footer from "@/components/common/Footer/Footer";
import Header from "@/components/common/Header/Header";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="container mx-auto px-3">
      <Header />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
