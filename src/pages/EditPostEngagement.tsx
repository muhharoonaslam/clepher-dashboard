import React, { useState } from "react";
import ReactionSelector from "../components/static/ReactionSelector";
import KeywordSection from "../components/core/KeywordSelection";
import PostPreview from "../components/static/PostPreview";
import AutoResponse from "../components/static/AutoResponse";
import PrivateReplySettings from "../components/static/post-engagment/PrivateReplySettings";
import FlowSelection from "../components/static/post-engagment/FlowSelection";

const EditPostEngagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"settings" | "auto-response">("settings");
  const [privateReply, setPrivateReply] = useState<boolean>(true);
  const [singleReply, setSingleReply] = useState<boolean>(true);
  const [excludeKeywords, setExcludeKeywords] = useState<string[]>([]);
  const [triggerKeywords, setTriggerKeywords] = useState<string[]>([]);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // State for Private Reply Flow Selection
  const [messageType, setMessageType] = useState<string>("Flow");
  const [selectedFlow, setSelectedFlow] = useState<string>("");
  const [selectedMessage, setSelectedMessage] = useState<string>("");

  return (
    <div className="min-h-screen bg-base-200 p-4 sm:p-6">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 bg-base-100 p-4 sm:p-6 rounded-lg shadow-lg md:mr-6">
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
              <PrivateReplySettings
                privateReply={privateReply}
                setPrivateReply={setPrivateReply}
                singleReply={singleReply}
                setSingleReply={setSingleReply}
              />

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

              <FlowSelection
                messageType={messageType}
                setMessageType={setMessageType}
                selectedFlow={selectedFlow}
                setSelectedFlow={setSelectedFlow}
                selectedMessage={selectedMessage}
                setSelectedMessage={setSelectedMessage}
              />
            </>
          )}

          {activeTab === "auto-response" && <AutoResponse />}
        </div>

        <div className="w-full md:flex-1 bg-base-100 p-4 sm:p-6 rounded-lg shadow-lg mt-6 md:mt-0">
          <div className="flex flex-col md:flex-row justify-between items-center mb-4">
            <h2 className="text-lg md:text-xl font-semibold">Preview Post</h2>
            <button
              className="btn bg-blue-500 text-white mt-4 md:mt-0 md:ml-4"
              onClick={openModal}
            >
              Post ID / URL
            </button>
          </div>

          <div className="flex justify-center">
            <div className="w-full lg:w-2/3 xl:w-1/2">
              <PostPreview
                isModalOpen={isModalOpen}
                openModal={openModal}
                closeModal={closeModal}
              />
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
