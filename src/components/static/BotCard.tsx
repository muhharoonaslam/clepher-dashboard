import React from "react";
import { Trash2, Settings2 } from "lucide-react";

interface BotCardProps {
  id: string;
  name: string;
  genre: string;
  totalSubscribers: number;
  activeSubscribers: number;
  onDashboard: (id: string) => void;
  onDelete: (id: string) => void;
}

const BotCard: React.FC<BotCardProps> = ({
  id,
  name,
  genre,
  totalSubscribers,
  activeSubscribers,
  onDashboard,
  onDelete,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm cursor-pointer border border-transparent hover:border-blue-500">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <img
            src={`https://i.pravatar.cc/50?img=${id}`}
            alt={name}
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <h2 className="text-lg font-semibold text-gray-900">{name}</h2>
            <p className="text-sm text-gray-500">{genre}</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div
            className="text-blue-500 hover:text-blue-600 cursor-pointer tooltip"
            data-tip="Go to Dashboard"
            onClick={() => onDashboard(id)}
          >
            <Settings2 className="w-6 h-6" />
          </div>

          <div
            className="text-red-500 hover:text-red-600 cursor-pointer tooltip"
            data-tip="Delete Bot"
            onClick={() => onDelete(id)}
          >
            <Trash2 className="w-6 h-6" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-xs text-gray-500">Total Subscribers</p>
          <p className="text-lg font-semibold text-blue-500">
            {totalSubscribers}
          </p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Active Subscribers</p>
          <p className="text-lg font-semibold text-green-500">
            {activeSubscribers}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BotCard;
