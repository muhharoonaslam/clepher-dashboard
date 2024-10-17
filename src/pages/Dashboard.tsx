import React, { useState, useRef, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const PostEngagement: React.FC = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);
  const totalPages = 2;

  const dropdownRef = useRef<HTMLDivElement>(null);

  const posts = [
    {
      id: 1,
      platform: "Instagram",
      name: "Operations",
      engaged: "50 / 25",
      acquired: 66,
      conversion: "10%",
    },
    {
      id: 2,
      platform: "Messenger",
      name: "Integration",
      engaged: "50 / 25",
      acquired: 66,
      conversion: "10%",
    },
    {
      id: 3,
      platform: "Messenger",
      name: "Factors",
      engaged: "50 / 25",
      acquired: 66,
      conversion: "10%",
    },
    {
      id: 4,
      platform: "Messenger",
      name: "Functionality",
      engaged: "50 / 25",
      acquired: 66,
      conversion: "10%",
    },
    {
      id: 5,
      platform: "Messenger",
      name: "Implementation",
      engaged: "50 / 25",
      acquired: 66,
      conversion: "10%",
    },
    {
      id: 6,
      platform: "Instagram",
      name: "Integration",
      engaged: "50 / 25",
      acquired: 66,
      conversion: "10%",
    },
    {
      id: 7,
      platform: "Instagram",
      name: "Intranet",
      engaged: "50 / 25",
      acquired: 66,
      conversion: "10%",
    },
    {
      id: 8,
      platform: "Messenger",
      name: "Creative",
      engaged: "50 / 25",
      acquired: 66,
      conversion: "10%",
    },
    {
      id: 9,
      platform: "Instagram",
      name: "Usability",
      engaged: "50 / 25",
      acquired: 66,
      conversion: "10%",
    },
    {
      id: 10,
      platform: "Messenger",
      name: "Implementation",
      engaged: "50 / 25",
      acquired: 66,
      conversion: "10%",
    },
  ];

 
  const filteredPosts = posts.filter((post) =>
    post.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

 
  const toggleDropdown = (id: number) => {
    setDropdownOpen((prevState) => (prevState === id ? null : id));
  };

  const handleEdit = (id: number) => {
    console.log("🚀 ~ handleEdit ~ id:", id);
    navigate(`/edit-post-engagement`);
  };
 
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="p-6 bg-[#f0f4ff] min-h-screen">
      <h2 className="text-xl font-semibold mb-4">Post Engagements</h2>

      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="input input-bordered w-full max-w-xs"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn">
            Bulk Actions
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-white rounded-box w-52"
          >
            <li>
              <Link to="#">Bulk Edit</Link>
            </li>
            <li>
              <Link to="#">Bulk Delete</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-md border p-5">
        <table className="table-auto w-full border-gray-100">
          <thead>
            <tr className="text-slate-400 font-light text-left">
              <th className="p-2">
                <input type="checkbox" className="checkbox checkbox-primary" />
              </th>
              <th className="p-2">Name</th>
              <th className="p-2">Engaged / Unique</th>
              <th className="p-2">Acquired</th>
              <th className="p-2">Conversion</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredPosts.map((post, index) => (
              <tr key={index} className="border-t border-gray-100">
                <td className="p-2">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary"
                  />
                </td>
                <td className="p-2 flex items-center space-x-2">
                  <img
                    src={
                      post.platform === "Instagram"
                        ? "https://app.dev.clepher.com/images/platform/instagram.svg"
                        : "https://app.dev.clepher.com/images/platform/messenger-blurple.svg"
                    }
                    alt={post.platform}
                    className="w-5 h-5"
                  />
                  <span>{post.name}</span>
                </td>
                <td className="p-2">{post.engaged}</td>
                <td className="p-2">{post.acquired}</td>
                <td className="p-2">{post.conversion}</td>
                <td className="p-2 relative" ref={dropdownRef}>
                  <button
                    className="btn btn-outline btn-sm"
                    onClick={() => handleEdit(post.id)}
                  >
                    Actions
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-6">
        <p>
          Page {currentPage} of {totalPages} &bull; Go to page:{" "}
          <input
            type="number"
            min="1"
            max={totalPages}
            value={currentPage}
            onChange={(e) => handlePageChange(Number(e.target.value))}
            className="input input-sm w-16 ml-2"
          />
        </p>

        <div className="flex space-x-2">
          <button
            onClick={() => handlePageChange(1)}
            className={`btn btn-sm ${currentPage === 1 ? "btn-disabled" : ""}`}
          >
            <ChevronsLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className={`btn btn-sm ${currentPage === 1 ? "btn-disabled" : ""}`}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className={`btn btn-sm ${
              currentPage === totalPages ? "btn-disabled" : ""
            }`}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => handlePageChange(totalPages)}
            className={`btn btn-sm ${
              currentPage === totalPages ? "btn-disabled" : ""
            }`}
          >
            <ChevronsRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostEngagement;
