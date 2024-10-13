import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'; 
import { useSelector } from 'react-redux';
import { RootState } from './store';
import Login from './pages/Login';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard.tsx';
import HeaderLayout from './layouts/HeaderLayout';
import PrivateRoute from './components/auth-guard/PrivateRoute';

const App: React.FC = () => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  return (
      <Routes>
        <Route path="/" element={isLoggedIn ? <Navigate to="/home" /> : <Login />} />

        <Route element={<PrivateRoute />}>
          <Route element={<HeaderLayout />}>
            <Route path="home" element={<Home />} />
            <Route path=":id/dashboard" element={<Dashboard />} />
          </Route>
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
  );
};

export default App;
