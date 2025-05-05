import { TableHeader as NextUITableHeader, TableColumn } from "@heroui/react";
import { flexRender, HeaderGroup } from "@tanstack/react-table";
import { Fragment } from "react";

interface ITableHeaderProps<T extends object> {
  headerGroups?: Array<HeaderGroup<T>>;
}
const TableHeader = <T extends object>({
  headerGroups,
}: ITableHeaderProps<T>) => {
  return (
    <Fragment>
      {headerGroups?.map((headerGroup) => (
        <NextUITableHeader key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <TableColumn key={header.id} width={header.getSize()}>
              {flexRender(header.column.columnDef.header, header.getContext())}
            </TableColumn>
          ))}
        </NextUITableHeader>
      ))}
    </Fragment>
  );
};

export default TableHeader;
