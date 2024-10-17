import React, { useState } from "react";

const AutoResponse = () => {
  const [autoLike, setAutoLike] = useState(false);
  const [commentType, setCommentType] = useState("Open AI");
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [selectedIntegration, setSelectedIntegration] = useState("Integration 1");
  const [selectedAssistance, setSelectedAssistance] = useState("Assistance 1");

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  const handleRemoveComment = (index) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
  };

  return (
    <div>
      <div className="form-control mb-6">
        <label className="label cursor-pointer justify-between">
          <span className="label-text">Enable To Automatically Like Comments</span>
          <input
            type="checkbox"
            className="toggle"
            checked={autoLike}
            onChange={() => setAutoLike(!autoLike)}
          />
        </label>
      </div>

      <div className="mb-6">
        <p className="font-semibold mb-2">Reply In Comments</p>
        <select
          className="select select-bordered w-full mb-2"
          value={commentType}
          onChange={(e) => setCommentType(e.target.value)}
        >
          <option value="Open AI">Open AI</option>
          <option value="Static">Static</option>
          <option value="Integration 1">Integration 1</option>
        </select>

        {commentType === "Static" && (
          <div>
            {comments.length > 0 && (
              <div className="mb-4">
                {comments.map((comment, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between bg-gray-100 p-2 rounded mb-2"
                  >
                    <p>{comment}</p>
                    <button
                      className="btn btn-ghost btn-sm"
                      onClick={() => handleRemoveComment(index)}
                    >
                      X
                    </button>
                  </div>
                ))}
              </div>
            )}
            <div className="flex gap-2">
              <input
                type="text"
                className="input input-bordered flex-grow"
                placeholder="Add a comment"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
              <button className="btn btn-primary" onClick={handleAddComment}>
                Add Comment
              </button>
            </div>
          </div>
        )}

        {commentType === "Open AI" && (
          <>
            <select
              className="select select-bordered w-full mb-2"
              value={selectedIntegration}
              onChange={(e) => setSelectedIntegration(e.target.value)}
            >
              <option value="Integration 1">Integration 1</option>
              <option value="Integration 2">Integration 2</option>
            </select>

            <select
              className="select select-bordered w-full"
              value={selectedAssistance}
              onChange={(e) => setSelectedAssistance(e.target.value)}
            >
              <option value="Assistance 1">Assistance 1</option>
              <option value="Assistance 2">Assistance 2</option>
            </select>
          </>
        )}
      </div>
    </div>
  );
};

export default AutoResponse;
