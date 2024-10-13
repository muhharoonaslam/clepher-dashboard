import React from 'react';
import { Bell, Moon, Settings, User, LogOut, Wallet, Home } from 'lucide-react'; 
import { Link } from 'react-router-dom';

const HeaderLayout: React.FC = () => {
  return (
    <header className="flex justify-between items-center px-6 py-2 bg-white shadow-md">
      <div className="flex items-center space-x-3">
        <img
          src="https://cleverstorage.b-cdn.net/assets/clepher-logo-black.png"
          alt="Clepher Logo"
          className="h-7"
        />
      </div>

      <div className="flex items-center space-x-6">
        <div className="relative">
          <Bell className="w-6 h-6 text-gray-600 hover:text-blue-500 transition cursor-pointer" />
          <span className="absolute top-0 right-0 inline-block w-2.5 h-2.5 bg-blue-500 rounded-full" />
        </div>

        <Moon className="w-6 h-6 text-gray-600 hover:text-blue-500 transition cursor-pointer" />

        <Settings className="w-6 h-6 text-gray-600 hover:text-blue-500 transition cursor-pointer" />

        <div className="relative group">
          <img
            src="https://i.pravatar.cc/50"
            alt="Profile"
            className="w-10 h-10 rounded-full cursor-pointer"
          />
          <div className="absolute p-3 right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition duration-200 z-10">
            <Link to="/home" className="flex items-center px-4 py-2 hover:bg-gray-200 rounded-md	">
              <Home className="w-5 h-5 mr-2 text-gray-600" />
              Home
            </Link>
            <Link to="/home" className="flex items-center px-4 py-2 hover:bg-gray-200 rounded-md	">
              <Wallet className="w-5 h-5 mr-2 text-gray-600" />
              Billing
            </Link>
            <Link to="/home" className="flex items-center px-4 py-2 hover:bg-gray-200 rounded-md	">
              <User className="w-5 h-5 mr-2 text-gray-600" />
              Account
            </Link>
            <Link to="/home" className="flex items-center px-4 py-2 hover:bg-gray-200 rounded-md	">
              <LogOut className="w-5 h-5 mr-2 text-gray-600" />
              Log Out
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderLayout;
