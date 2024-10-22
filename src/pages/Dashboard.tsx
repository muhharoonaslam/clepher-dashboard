import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import DataTable from "../components/core/DataTable";
import {
  ChevronDownIcon,
  SearchIcon,
  LinkIcon,
  CodeIcon,
  ClipboardIcon,
  QrCodeIcon,
  MessageSquareIcon,
} from "lucide-react";
import { RootState } from "../store";
import { Post } from "../types";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);

  const posts: Post[] = useSelector((state: RootState) => state.posts.data);

  const filteredPosts = posts.filter((post) =>
    post.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = () => {
    navigate(`/edit-post-engagement`);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const columns = [
    {
      header: "",
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
      header: "Name",
      key: "name" as keyof Post,
    },
    {
      header: "Engaged / Unique",
      key: "engaged" as keyof Post,
    },
    {
      header: "Acquired",
      key: "acquired" as keyof Post,
    },
    {
      header: "Conversion",
      key: "conversion" as keyof Post,
    },
  ];

  return (
    <div className="flex gap-14 min-h-screen bg-[#f2f7ff] p-10">
      <div className="w-96 bg-white p-4 rounded-2xl h-fit ">
        <h2 className="text-base font-bold mb-3 text-[#b0b8c3] pl-4">
          Capture Tools
        </h2>
        <ul className="space-y-1">
          <li>
            <Link
              to="#"
              className="flex items-center space-x-3 text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-lg transition-colors"
            >
              <LinkIcon className="w-5 h-5" />
              <span>Links Library</span>
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="flex items-center space-x-3 text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-lg transition-colors"
            >
              <CodeIcon className="w-5 h-5" />
              <span>JSON Generator</span>
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="flex items-center space-x-3 text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-lg transition-colors"
            >
              <ClipboardIcon className="w-5 h-5" />
              <span>Checkbox Plugin</span>
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="flex items-center space-x-3 text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-lg transition-colors"
            >
              <QrCodeIcon className="w-5 h-5" />
              <span>Messenger Code</span>
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="flex items-center space-x-3 bg-[#021431] text-white px-4 py-2 rounded-lg transition-colors"
            >
              <ClipboardIcon className="w-5 h-5" />
              <span>Post Engagement</span>
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="flex items-center space-x-3 text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-lg transition-colors"
            >
              <MessageSquareIcon className="w-5 h-5" />
              <span>Send To Messenger</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex-1  ">
        <div className="flex justify-between items-center mb-2">
          <h2 className="w-1/3 text-2xl">Post Engagements</h2>
          <div className="w-2/3 flex justify-end gap-4 items-center">
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Search..."
                className="input input-bordered input-sm px-4 py-5 w-[250px] border-2  text-lg max-w-xs rounded-xl  border-gray-400 focus:outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <SearchIcon className="absolute right-3 w-5 h-5 text-gray-600" />
            </div>

            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="border text-lg border-gray-600 btn-sm text-gray-600 font-semibold px-4 py-5 rounded-xl hover:bg-gray-100 flex items-center"
              >
                Bulk Actions <ChevronDownIcon className="ml-2 w-4 h-4" />
              </button>
              {dropdownVisible && (
                <ul className="absolute right-0 mt-2 dropdown-content menu p-2 shadow bg-white rounded-box w-52">
                  <li>
                    <Link to="#">Bulk Delete</Link>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>

        <div className="rounded-3xl overflow-hidden">
          <DataTable<Post>
            columns={columns}
            data={filteredPosts}
            onRowAction={handleEdit}
            itemsPerPage={10}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
