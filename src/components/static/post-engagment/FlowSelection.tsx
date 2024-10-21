import React from "react";
import { Info } from "lucide-react";

interface FlowSelectionProps {
  messageType: string;
  setMessageType: React.Dispatch<React.SetStateAction<string>>;
  selectedFlow: string;
  setSelectedFlow: React.Dispatch<React.SetStateAction<string>>;
  selectedMessage: string;
  setSelectedMessage: React.Dispatch<React.SetStateAction<string>>;
}

const FlowSelection: React.FC<FlowSelectionProps> = ({
  messageType,
  setMessageType,
  selectedFlow,
  setSelectedFlow,
  selectedMessage,
  setSelectedMessage,
}) => (
  <>
    <div className="flex items-center justify-between mb-4">
      <h3 className="font-semibold">Private Reply After Post Engagement</h3>
      <Info size={16} className="text-base-content opacity-60" />
    </div>
    <div className="form-control mb-4">
      <label className="label">
        <span className="label-text">Select message type</span>
      </label>
      <select
        className="select select-bordered"
        value={messageType}
        onChange={(e) => setMessageType(e.target.value)}
      >
        <option value="Flow">Flow</option>
        <option value="Single Message">Single Message</option>
      </select>
    </div>

    {messageType === "Flow" && (
      <div className="form-control mb-4">
        <label className="label">
          <span className="label-text">Select flow</span>
        </label>
        <select
          className="select select-bordered"
          value={selectedFlow}
          onChange={(e) => setSelectedFlow(e.target.value)}
        >
          <option value="">Select</option>
          <option value="Welcome Message">Welcome Message</option>
          <option value="Default Reply">Default Reply</option>
        </select>
      </div>
    )}

    {messageType === "Single Message" && (
      <>
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Select flow</span>
          </label>
          <select
            className="select select-bordered"
            value={selectedFlow}
            onChange={(e) => setSelectedFlow(e.target.value)}
          >
            <option value="">Select</option>
            <option value="Welcome Message">Welcome Message</option>
            <option value="Default Reply">Default Reply</option>
          </select>
        </div>

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Select message</span>
          </label>
          <select
            className="select select-bordered"
            value={selectedMessage}
            onChange={(e) => setSelectedMessage(e.target.value)}
          >
            <option value="">Select</option>
            <option value="Text Card #1">Text Card #1</option>
            <option value="Text Card #2">Text Card #2</option>
          </select>
        </div>
      </>
    )}
  </>
);

export default FlowSelection;
