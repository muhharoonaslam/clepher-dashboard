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
    <div className="form-control mb-4">
      <label className="label cursor-pointer justify-between">
        <span className="label-text">
          Enable To Privately Reply To First-Level Comments Only
        </span>
        <input
          type="checkbox"
          className="toggle bg-blue-500"
          checked={privateReply}
          onChange={() => setPrivateReply(!privateReply)}
        />
      </label>
    </div>
    <div className="form-control mb-6">
      <label className="label cursor-pointer justify-between">
        <span className="label-text">
          Send Message To The Same User Only Once Per Post
        </span>
        <input
          type="checkbox"
          className="toggle bg-blue-500"
          checked={singleReply}
          onChange={() => setSingleReply(!singleReply)}
        />
      </label>
    </div>
  </>
);

export default PrivateReplySettings;
