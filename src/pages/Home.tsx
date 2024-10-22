import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import BotCard from "../components/static/BotCard";
import { useNavigate } from "react-router-dom";
import { Bot } from "../types";

const Home: React.FC = () => {
  const bots: Bot[] = useSelector((state: RootState) => state.bots.data);
  const navigate = useNavigate();

  const handleDashboard = (id: string) => {
    navigate(`/${id}/dashboard`);
  };

  const handleDelete = (id: string) => {
    console.log(`Delete bot with id: ${id}`);
  };

  return (
    <div className="min-h-screen bg-[#f2f7ff]">
      <div className="p-4 md:p-8">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md mb-6 w-full md:w-auto">
          + Create Bot
        </button>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {bots.map((bot) => (
            <BotCard
              key={bot.id}
              id={bot.id}
              name={bot.name}
              genre={bot.genre}
              totalSubscribers={bot.totalSubscribers}
              activeSubscribers={bot.activeSubscribers}
              onDashboard={handleDashboard}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
