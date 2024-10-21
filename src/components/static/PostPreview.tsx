import React from "react";

interface PostPreviewProps {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const PostPreview: React.FC<PostPreviewProps> = ({
  isModalOpen,
  openModal,
  closeModal,
}) => {
  return (
    <div className="border rounded-xl p-4 shadow-sm bg-white">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="w-12 h-12 rounded-full">
              <img
                src="https://www.claudeusercontent.com/api/placeholder/48/48"
                alt="User Avatar"
              />
            </div>
          </div>
          <div>
            <p className="font-semibold">Clepher Developer</p>
            <p className="text-sm text-base-content opacity-60">7 months ago</p>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <p className="text-base-content">
          Visual AI-Powered chatbot builder for Facebook Messenger and Instagram
          Direct Message. Plus broadcasts, analytics, growth tools, scheduled
          posting & many more. #AIPowered #Chatbots
        </p>
      </div>
      <div className="mb-4">
        <img
          src="https://www.claudeusercontent.com/api/placeholder/400/300"
          alt="Post Image"
          className="w-full h-100 rounded-lg object-contain"
        />
      </div>
      {isModalOpen && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="text-lg font-bold">Post ID / URL</h3>
            <div className="mt-4">
              <div className="flex justify-between items-center mb-4 gap-3">
                <input
                  type="text"
                  placeholder="Post ID / URL"
                  className="input input-bordered w-full "
                />
                <button className="btn bg-blue-500 text-white">Grab Post</button>
              </div>
            </div>
            <div className="modal-action">
              <button className="btn w-full" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostPreview;
