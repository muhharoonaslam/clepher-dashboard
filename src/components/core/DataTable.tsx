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
    <div className="bg-white rounded-2xl shadow-md border p-3 sm:p-5 overflow-x-auto">
      <table className="table-auto w-full border-gray-100 text-sm sm:text-base">
        <thead>
          <tr className="text-gray-600 font-light text-left">
            <th className="p-2 hidden sm:table-cell">
              <input type="checkbox" className="checkbox checkbox-primary" />
            </th>
            {columns.map((column, index) => (
              <th key={index} className="p-2">
                {column.header}
              </th>
            ))}
            {onRowAction && (
              <th className="p-2 hidden sm:table-cell">Action</th>
            )}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((row, index) => (
            <tr key={index} className="border-t border-gray-100">
              <td className="p-2 hidden sm:table-cell">
                <input type="checkbox" className="checkbox checkbox-primary" />
              </td>
              {columns.map((column, colIndex) => (
                <td key={colIndex} className="p-2">
                  {column.render ? column.render(row) : String(row[column.key])}
                </td>
              ))}
              {onRowAction && (
                <td className="p-2 hidden sm:table-cell">
                  <button
                    className="btn btn-outline btn-sm"
                    onClick={() => onRowAction((row as any).id)}
                  >
                    Edit
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-4">
        <p className="text-xs sm:text-sm mb-2 sm:mb-0">
          Showing {startIndex + 1} to{" "}
          {Math.min(startIndex + itemsPerPage, data.length)} of {data.length}{" "}
          entries
        </p>
        <div className="flex space-x-2">
          <button
            onClick={() => handlePageChange(1)}
            className={`btn btn-xs sm:btn-sm ${
              currentPage === 1 ? "btn-disabled" : ""
            }`}
          >
            <ChevronsLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className={`btn btn-xs sm:btn-sm ${
              currentPage === 1 ? "btn-disabled" : ""
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className={`btn btn-xs sm:btn-sm ${
              currentPage === totalPages ? "btn-disabled" : ""
            }`}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => handlePageChange(totalPages)}
            className={`btn btn-xs sm:btn-sm ${
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

export default DataTable;
