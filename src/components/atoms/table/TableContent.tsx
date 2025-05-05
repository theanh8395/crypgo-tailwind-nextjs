import { TableCell, TableRow } from "@heroui/react";
import { flexRender, Row } from "@tanstack/react-table";
import { Fragment } from "react";

interface ITableContentProps<T extends object> {
  page: Array<Row<T>>;
  canSelect?: boolean;
}

const TableContent = <T extends object>(props: ITableContentProps<T>) => {
  const { page } = props;
  return (
    <Fragment>
      {page.map((row) => (
        <TableRow key={row.id}>
          {row.getVisibleCells().map((cell, idx) => {
            return (
              <TableCell key={idx}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            );
          })}
        </TableRow>
      ))}
    </Fragment>
  );
};

export default TableContent;
