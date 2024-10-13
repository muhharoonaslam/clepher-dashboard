import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/navigation/Header';

const HeaderLayout: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default HeaderLayout;
