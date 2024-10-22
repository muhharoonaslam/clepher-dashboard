import React, { useState } from "react";
import ReactionSelector from "../components/static/ReactionSelector";
import KeywordSection from "../components/core/KeywordSelection";
import PostPreview from "../components/static/PostPreview";
import AutoResponse from "../components/static/AutoResponse";
import PrivateReplySettings from "../components/static/post-engagment/PrivateReplySettings";
import FlowSelection from "../components/static/post-engagment/FlowSelection";

const EditPostEngagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"settings" | "auto-response">(
    "settings"
  );
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

  const [messageType, setMessageType] = useState<string>("Flow");
  const [selectedFlow, setSelectedFlow] = useState<string>("");
  const [selectedMessage, setSelectedMessage] = useState<string>("");

  return (
    <>
      <div className="bg-[#f2f7ff]">
        <div className="p-4 sm:p-6 sm:pb-0 flex flex-col md:flex-row  bg-[#f2f7ff]">
          <div className="w-full flex justify-between items-center mb-4">
            <nav className="text-lg text-gray-500">
              <ol className="flex space-x-2">
                <li>
                  <a href="#" className="text-gray-500">
                    Capture Tools
                  </a>
                </li>
                <li>{">"}</li>
                <li>
                  <a href="#" className="text-gray-500">
                    Post Engagement
                  </a>
                </li>
                <li>{">"}</li>
                <li>
                  <span className="text-gray-900 font-semibold">Edit</span>
                </li>
              </ol>
            </nav>
            <button className="btn btn-sm bg-blue-500 text-white  py-2 rounded-md hover:bg-blue-600 transition duration-200">
              Save
            </button>
          </div>
        </div>
        <div className="p-4 sm:p-6 sm:pt-0 flex flex-col md:flex-row  rounded-xl bg-[#f2f7ff]">
          <div className="w-full md:w-2/5 bg-base-100  flex flex-col  rounded-xl rounded-tr-none">
            <div className="w-full flex border-b border-gray-300">
              <button
                className={`w-1/2 text-center py-4 transition-colors duration-300 relative ${
                  activeTab === "settings"
                    ? "text-gray-600 border-b border-gray-800"
                    : "text-gray-400 border-b border-gray-300"
                }`}
                onClick={() => setActiveTab("settings")}
              >
                <span className="relative z-10">Settings</span>
                {activeTab === "settings" && (
                  <div className="absolute bottom-0 left-0 w-full h-px bg-gray-800"></div>
                )}
              </button>
              <button
                className={`w-1/2 text-center py-4 transition-colors duration-300 relative ${
                  activeTab === "auto-response"
                    ? "text-gray-600 border-b border-gray-800"
                    : "text-gray-400 border-b border-gray-300"
                }`}
                onClick={() => setActiveTab("auto-response")}
              >
                <span className="relative z-10">Auto Response</span>
                {activeTab === "auto-response" && (
                  <div className="absolute bottom-0 left-0 w-full h-px bg-gray-800"></div>
                )}
              </button>
            </div>
            <div className="px-4 sm:px-6 py-6 md:h-[calc(100vh-160px)] overflow-y-auto ">
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
                  <div className="m-3"></div>
                </>
              )}

              {activeTab === "auto-response" && <AutoResponse />}
            </div>
          </div>

          <div className="w-full md:flex-1 bg-base-100 mt-6 md:mt-0 md:h-[calc(100vh-100px)] rounded-bl-none rounded-xl">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6  rounded-tr-xl bg-blue-500 text-white p-[0.28rem] px-5 border-b border-gray-300">
              <button
                className="btn bg-blue-500 text-white mt-4 md:mt-0 md:ml-4 invisible "
              >
                Post ID / URL
              </button>
              <h2 className="text-lg md:text-xl">Select a Post</h2>
              <button
                className="btn btn-sm text-white mt-4 md:mt-0 md:ml-4 btn-outline"
                onClick={openModal}
              >
                Post ID / URL
              </button>
            </div>

            <div className="flex justify-center h-full">
              <div className="w-full lg:w-2/3 xl:w-1/2 h-full flex flex-col">
                <PostPreview
                  isModalOpen={isModalOpen}
                  openModal={openModal}
                  closeModal={closeModal}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditPostEngagement;
