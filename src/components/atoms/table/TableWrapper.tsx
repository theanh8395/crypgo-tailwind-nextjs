import { clsx } from "clsx";
import { PropsWithChildren, ReactNode } from "react";

interface ITableWrapperProps extends PropsWithChildren {
  className?: string;
  classNames?: { tableContainer?: string };
  pagination?: ReactNode;
  toolbar?: ReactNode;
}

const TableWrapper = ({
  className,
  pagination,
  toolbar,
  children,
}: ITableWrapperProps) => {
  return (
    <div className={clsx("overflow-hidden w-full", className)}>
      {toolbar}
      <div className="overflow-auto w-full min-h-72 max-h-screen p-1">
        {children}
      </div>
      {pagination}
    </div>
  );
};

export default TableWrapper;
