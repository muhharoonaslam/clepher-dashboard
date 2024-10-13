import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const Dashboard: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const bots = useSelector((state: RootState) => state.bots.data);
  const bot = bots.find((bot) => bot.id === id);

  if (!bot) {
    return <div className="p-4">Bot not found</div>;
  }

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4">Dashboard for {bot.name}</h2>
      <p className="text-gray-600 mb-6">Bot Genre: {bot.genre}</p>

      <div className="grid grid-cols-2 gap-6">
        {/* Add bot-specific dashboard data */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Total Subscribers</h3>
          <p className="text-2xl">{bot.totalSubscribers}</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Active Subscribers</h3>
          <p className="text-2xl">{bot.activeSubscribers}</p>
        </div>

        {/* Add more cards/data widgets as needed */}
      </div>
    </div>
  );
};

export default Dashboard;
