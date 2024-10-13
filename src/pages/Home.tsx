import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import BotCard from "../components/static/BotCard";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const bots = useSelector((state: RootState) => state.bots.data);
  const navigate = useNavigate();

  const handleDashboard = (id: string) => {
    navigate(`/${id}/dashboard`);
  };

  const handleDelete = (id: string) => {
    console.log(`Delete bot with id: ${id}`);
  };

  return (
    <div className="min-h-screen bg-[#f0f4ff]">
      <div className="p-8">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md mb-6">
          + Create Bot
        </button>
        <div className="grid grid-cols-3 gap-3">
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
