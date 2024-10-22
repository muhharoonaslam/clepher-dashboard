import React, { useState } from "react";
import { Info, Leaf } from "lucide-react";

const reactionTypes = [
  { name: "Like", emoji: "👍" },
  { name: "Love", emoji: "❤️" },
  { name: "Haha", emoji: "😆" },
  { name: "Wow", emoji: "😮" },
  { name: "Sad", emoji: "😢" },
  { name: "Angry", emoji: "😠" },
];

const ReactionSelector: React.FC = () => {
  const [selectedReactions, setSelectedReactions] = useState<string[]>([]);

  const toggleReaction = (reaction: string) => {
    setSelectedReactions((prev) =>
      prev.includes(reaction)
        ? prev.filter((r) => r !== reaction)
        : [...prev, reaction]
    );
  };

  return (
    <div className="my-6">
      <div className="flex items-center justify-between mb-4 border-b-[1px] pb-2">
        <h3 className="font-semibold">Require a Post Reaction</h3>
        <Info size={16} className="text-base-content opacity-60" />
      </div>

      <div className="grid grid-cols-6 gap-3 md:gap-4 justify-center mb-4 md:grid-cols-6">
        {reactionTypes.map((reaction) => (
          <button
            key={reaction.name}
            className={`btn btn-circle text-xl md:text-2xl justify-self-center ${
              selectedReactions.includes(reaction.name) ? "bg-blue-500 text-white" : "btn-ghost"
            }`}
            onClick={() => toggleReaction(reaction.name)}
          >
            {reaction.emoji}
          </button>
        ))}
      </div>

      <div
        className="bg-blue-500 text-white w-full rounded-lg p-4 text-center"
      >
        {selectedReactions.length > 0
          ? `Require ${selectedReactions.join(", ")}`
          : "Select reactions"}
      </div>
    </div>
  );
};

export default ReactionSelector;
