import React from "react";
import { NavLink } from "react-router-dom";
import {
  HomeIcon,
  ClipboardIcon,
  SettingsIcon,
  MessageSquareIcon,
  UsersIcon,
  BarChartIcon,
  LayersIcon,
  SparklesIcon,
} from "lucide-react";

const Sidebar: React.FC = () => {
  return (
    <div className="w-22 border h-screen bg-white shadow-md flex flex-col items-center py-6">
      <ul className="menu flex flex-col items-center space-y-2">
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? "bg-gray-800 rounded-lg p-3 text-white" : "text-gray-500 p-3"
            }
          >
            <div className="flex flex-col items-center group">
              <HomeIcon className="w-8 h-8 p-1" />
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/users"
            className={({ isActive }) =>
              isActive ? "bg-gray-800 rounded-lg p-3 text-white" : "text-gray-500 p-3"
            }
          >
            <div className="flex flex-col items-center group">
              <UsersIcon className="w-8 h-8 p-1" />
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/messages"
            className={({ isActive }) =>
              isActive ? "bg-gray-800 rounded-lg p-3 text-white" : "text-gray-500 p-3"
            }
          >
            <div className="flex flex-col items-center group">
              <MessageSquareIcon className="w-8 h-8 p-1" />
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/1/dashboard"
            className={({ isActive }) =>
              isActive ? "bg-gray-800 rounded-lg p-3 text-white" : "text-gray-500 p-3"
            }
          >
            <div className="flex flex-col items-center group">
              <ClipboardIcon className="w-8 h-8 p-1" />
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/promotion"
            className={({ isActive }) =>
              isActive ? "bg-gray-800 rounded-lg p-3 text-white" : "text-gray-500 p-3"
            }
          >
            <div className="flex flex-col items-center group">
              <SparklesIcon className="w-8 h-8 p-1" />
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/reports"
            className={({ isActive }) =>
              isActive ? "bg-gray-800 rounded-lg p-3 text-white" : "text-gray-500 p-3"
            }
          >
            <div className="flex flex-col items-center group">
              <BarChartIcon className="w-8 h-8 p-1" />
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/layers"
            className={({ isActive }) =>
              isActive ? "bg-gray-800 rounded-lg p-3 text-white" : "text-gray-500 p-3"
            }
          >
            <div className="flex flex-col items-center group">
              <LayersIcon className="w-8 h-8 p-1" />
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              isActive ? "bg-gray-800 rounded-lg p-3 text-white" : "text-gray-500 p-3"
            }
          >
            <div className="flex flex-col items-center group">
              <SettingsIcon className="w-8 h-8 p-1" />
            </div>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
