import React from 'react';
import Header from '../../components/common/Header/index.jsx';
import Footer from '../../components/common/Footer/index.jsx';
import Sidebar from '../../components/common/Sidebar/index.jsx';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout; 