import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import DataTable from "../components/core/DataTable";
import { ChevronDownIcon } from "lucide-react";
import { RootState } from "../store";
import { Post } from "../types";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState<string>("");

  const posts: Post[] = useSelector((state: RootState) => state.posts.data);

  const filteredPosts = posts.filter((post) =>
    post.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = () => {
    navigate(`/edit-post-engagement`);
  };

  const columns = [
    {
      header: "Name",
      key: "name" as keyof Post,
    },
    {
      header: "Platform",
      key: "platform" as keyof Post,
      render: (rowData: Post) => (
        <div className="flex items-center">
          <img
            src={
              rowData.platform === "Instagram"
                ? "https://app.dev.clepher.com/images/platform/instagram.svg"
                : "https://app.dev.clepher.com/images/platform/messenger-blurple.svg"
            }
            alt={rowData.platform}
            className="w-5 h-5"
          />
        </div>
      ),
    },
    {
      header: "Total Engaged / Unique",
      key: "engaged" as keyof Post,
    },
    {
      header: "Acquired Subscribers",
      key: "acquired" as keyof Post,
    },
    {
      header: "Conversion Rate",
      key: "conversion" as keyof Post,
    },
  ];

  return (
    <div className="p-6 min-h-screen bg-[#f0f4ff]">
      <h2 className="text-2xl font-semibold mb-6">Post Engagement Manager</h2>
      <div className="flex justify-end gap-4 items-center mb-6">
        <input
          type="text"
          placeholder="Search..."
          className="input input-bordered w-full max-w-xs"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-outline">
            Bulk Actions <ChevronDownIcon className="w-4 h-4" />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-white rounded-box w-52"
          >
            <li>
              <Link to="#">Bulk Delete</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-white overflow-x-auto">
        <DataTable<Post>
          columns={columns}
          data={filteredPosts}
          onRowAction={handleEdit}
          itemsPerPage={4}
        />
      </div>
    </div>
  );
};

export default Dashboard;
