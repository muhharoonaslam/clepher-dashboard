import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

interface Column<T> {
  header: string;
  key: keyof T;
  render?: (rowData: T) => React.ReactNode;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  onRowAction?: (id: number) => void;
  itemsPerPage?: number;
}

const DataTable = <T,>({
  columns,
  data,
  onRowAction,
  itemsPerPage = 5,
}: DataTableProps<T>) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      <div className="bg-white rounded-xl border p-1 sm:p-2 overflow-x-auto">
        <table className="table-auto w-full text-sm sm:text-base">
          <thead className="bg-white text-[#8895a6] border-b-2 border-b-[#f2f7ff]">
            <tr className="text-left font-medium">
              <th className="p-2 text-left">
                <input type="checkbox" className="checkbox checkbox-ghost" />
              </th>
              {columns.map((column, index) => (
                <th key={index} className="p-2 text-left">
                  {column.header}
                </th>
              ))}
              {onRowAction && <th className="p-2 text-left">Action</th>}
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {paginatedData.map((row, index) => (
              <tr
                key={index}
                className={`${
                  index !== paginatedData.length - 1
                    ? "border-b border-[#f2f7ff]"
                    : ""
                } hover:bg-gray-50`}
              >
                <td className="p-2">
                  <input type="checkbox" className="checkbox checkbox-ghost" />
                </td>
                {columns.map((column, colIndex) => (
                  <td key={colIndex} className="p-2">
                    {column.render
                      ? column.render(row)
                      : String(row[column.key])}
                  </td>
                ))}
                {onRowAction && (
                  <td className="p-2">
                    <button
                      className="px-2 py-1 border font-semibold border-[#021431] rounded-xl text-[#021431] hover:bg-gray-800 hover:text-white transition"
                      onClick={() => onRowAction((row as any).id)}
                    >
                      Actions
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center gap-5 items-center mt-4 text-gray-600 text-sm">
        <div className="flex items-center gap-4 space-x-1">
          <button
            onClick={() => handlePageChange(1)}
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              currentPage === 1
                ? "bg-gray-200 text-gray-400"
                : "bg-white text-gray-600 hover:bg-gray-100"
            }`}
            disabled={currentPage === 1}
          >
            <ChevronsLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              currentPage === 1
                ? "bg-gray-200 text-gray-400"
                : "bg-white text-gray-600 hover:bg-gray-100"
            }`}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              currentPage === totalPages
                ? "bg-gray-200 text-gray-400"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => handlePageChange(totalPages)}
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              currentPage === totalPages
                ? "bg-gray-200 text-gray-400"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
            disabled={currentPage === totalPages}
          >
            <ChevronsRight className="w-4 h-4" />
          </button>
        </div>
        <div className="text-gray-600 flex items-center space-x-1">
          <p className="mr-2 ">
            Page <span className="font-semibold">{currentPage}{" "} of {totalPages}</span>
          </p>
          <p>• Go to page:</p>
          <input
            type="number"
            value={currentPage}
            onChange={(e) => handlePageChange(Number(e.target.value))}
            className="w-10 h-8 border border-gray-300 rounded-md text-center"
            min={1}
            max={totalPages}
          />
        </div>
      </div>
    </>
  );
};

export default DataTable;
