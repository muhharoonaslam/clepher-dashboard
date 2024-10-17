import React, { useState } from "react";
import ReactionSelector from "../components/static/ReactionSelector";
import KeywordSection from "../components/core/KeywordSelection";
import PostPreview from "../components/static/PostPreview";
import AutoResponse from "../components/static/AutoResponse";

const EditPostEngagement = () => {
  const [activeTab, setActiveTab] = useState("settings");
  const [privateReply, setPrivateReply] = useState(true);
  const [singleReply, setSingleReply] = useState(true);
  const [excludeKeywords, setExcludeKeywords] = useState([]);
  const [triggerKeywords, setTriggerKeywords] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-base-200 p-6">
      <div className="flex">
        <div className="w-1/3 bg-base-100 p-6 rounded-lg shadow-lg mr-6">
          <div className="tabs tabs-boxed mb-6 tabs-lg font-semibold">
            <a
              className={`tab transition-all duration-300 ease-in-out transform ${
                activeTab === "settings"
                  ? "tab-active text-white !bg-blue-500"
                  : "text-gray-500 hover:text-blue-500"
              }`}
              onClick={() => setActiveTab("settings")}
            >
              Settings
            </a>
            <a
              className={`tab transition-all duration-300 ease-in-out transform ${
                activeTab === "auto-response"
                  ? "tab-active text-white !bg-blue-500"
                  : "text-gray-500 hover:text-blue-500"
              }`}
              onClick={() => setActiveTab("auto-response")}
            >
              Auto-Response
            </a>
          </div>

          {activeTab === "settings" && (
            <>
              <h2 className="text-lg font-semibold mb-4">Settings</h2>

              <div className="form-control mb-4">
                <label className="label cursor-pointer justify-between">
                  <span className="label-text">
                    Enable To Privately Reply To First-Level Comments Only
                  </span>
                  <input
                    type="checkbox"
                    className="toggle"
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
                    className="toggle"
                    checked={singleReply}
                    onChange={() => setSingleReply(!singleReply)}
                  />
                </label>
              </div>

              <ReactionSelector />

              <KeywordSection
                title="Exclude Comments With These Keywords"
                keywords={excludeKeywords}
                setKeywords={setExcludeKeywords}
                badgeColor="badge-info badge-outline"
              />

              <KeywordSection
                title="Only Trigger For Comments With These Keywords"
                keywords={triggerKeywords}
                setKeywords={setTriggerKeywords}
                badgeColor="badge-success badge-outline"
              />
            </>
          )}

          {activeTab === "auto-response" && <AutoResponse />}
        </div>

        <div className="flex-1 bg-base-100 p-6 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4"> 
          <h2 className="text-lg font-semibold">Preview Post</h2>
          <button className="btn bg-blue-500 text-white ml-4" onClick={openModal}>
            Post ID / URL
          </button>
        </div>

          <div className="flex justify-center ">
            <div className="w-1/2 ">
              <PostPreview isModalOpen={isModalOpen} openModal={openModal} closeModal={closeModal} />
              <button className="btn bg-blue-500 text-white w-full mt-10">
                Select This Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPostEngagement;
