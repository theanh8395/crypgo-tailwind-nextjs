import { useMemo } from "react";
import { CtPagination } from "../CtPagination";

interface ITablePaginationProps {
  className?: string;
}

const TablePagination = ({}: ITablePaginationProps) => {
  const pageIndex = 1;
  const pageSize = 10;
  const total = 100;
  const itemCount = 100;

  const pageSummary = useMemo(() => {
    const offset = pageIndex * pageSize;
    const first = offset + 1;
    const second = itemCount + 1;
    return total > 0
      ? `Showing ${first} - ${second < total ? second : total} of ${total}`
      : "";
  }, [itemCount, pageIndex, pageSize, total]);

  return (
    <div className="flex items-center justify-between bg-white">
      <p className="text-gray-500">{pageSummary}</p>
      <CtPagination />
    </div>
  );
};

export default TablePagination;
