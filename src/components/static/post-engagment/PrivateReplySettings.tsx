import React from "react";

interface PrivateReplySettingsProps {
  privateReply: boolean;
  setPrivateReply: React.Dispatch<React.SetStateAction<boolean>>;
  singleReply: boolean;
  setSingleReply: React.Dispatch<React.SetStateAction<boolean>>;
}

const PrivateReplySettings: React.FC<PrivateReplySettingsProps> = ({
  privateReply,
  setPrivateReply,
  singleReply,
  setSingleReply,
}) => (
  <>
    <div className="form-control">
      <label className="label cursor-pointer justify-between items-center">
        <span className="text-md text-[#afb8c3] font-medium">
          Enable To Privately Reply To First-Level Comments Only
        </span>
        <input
          type="checkbox"
          className={`toggle border ${
            privateReply
              ? "bg-blue-500 border-blue-500"
              : "bg-gray-400 border-gray-400"
            }`}
          checked={privateReply}
          onChange={() => setPrivateReply(!privateReply)}
        />
      </label>
    </div>
    <div className="form-control">
      <label className="label cursor-pointer justify-between items-center">
        <span className="text-md text-[#afb8c3] font-medium">
          Send Message To The Same User Only Once Per Post
        </span>
        <input
          type="checkbox"
          className={`toggle border ${
            singleReply
              ? "bg-blue-500 border-blue-500"
              : "bg-gray-400 border-gray-400"
            }`}
          checked={singleReply}
          onChange={() => setSingleReply(!singleReply)}
        />
      </label>
    </div>
  </>
);

export default PrivateReplySettings;
