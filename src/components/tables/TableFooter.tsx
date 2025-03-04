import React from "react";
import { TableFooterProps } from "../../types/interfaces";

const TableFooter: React.FC<TableFooterProps> = ({
  currentPage = 1,
  totalPages = 1,
  onPreviousPage = () => {},
  onNextPage = () => {},
}) => {
  return (
    <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
      <div className="text-sm text-gray-500 dark:text-gray-400">
        Showing <span className="font-medium">{currentPage}</span> to{" "}
        <span className="font-medium">
          {Math.min(currentPage * 6, totalPages * 6)}
        </span>{" "}
        of <span className="font-medium">{totalPages * 6}</span> results
      </div>
      <div className="flex space-x-2">
        <button
          className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-md text-sm text-gray-700 dark:text-gray-300"
          onClick={onPreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className="px-3 py-1 bg-indigo-600 text-white rounded-md text-sm"
          onClick={onNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TableFooter;
