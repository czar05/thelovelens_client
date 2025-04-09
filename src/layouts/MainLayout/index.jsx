import React from "react";
// import Header from '../../components/common/Header/index.jsx';
import Footer from "../../components/common/Footer/index.jsx";
// import Sidebar from '../../components/common/Sidebar/index.jsx';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen w-full flex flex-col">
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
