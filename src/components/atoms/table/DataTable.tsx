"use client";

import { Checkbox, Table as HeroTable, TableBody } from "@heroui/react";
import TableWrapper from "./TableWrapper";
import { IDataTableProps, ITableItem } from "./types";
import TablePagination from "./TablePagination";
import {
  getCoreRowModel,
  Row,
  Table,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo } from "react";
import TableHeader from "./TableHeader";
import TableContent from "./TableContent";

const DataTable = <T extends ITableItem>(props: IDataTableProps<T>) => {
  const { singleSelect, canSelect, ToolbarProps, columns, data, toolbar } =
    props;

  const selectColumn = useMemo(
    () => ({
      id: "selection",
      size: 50,
      header: ({ table }: { table: Table<T> }) => (
        <Checkbox
          type="checkbox"
          onChange={table.getToggleAllRowsSelectedHandler()}
          isSelected={table.getIsAllRowsSelected()}
          aria-label="Select all rows"
        />
      ),
      cell: ({ row }: { row: Row<T> }) => (
        <Checkbox
          type="checkbox"
          onChange={row.getToggleSelectedHandler()}
          isSelected={row.getIsSelected()}
          aria-label="Select row"
        />
      ),
    }),
    []
  );

  const tableSelectColumns = useMemo(() => {
    if (!canSelect) return columns;
    return [selectColumn, ...columns];
  }, [canSelect, columns, selectColumn]);

  const tableInstance = useReactTable({
    columns: tableSelectColumns,
    data,
    autoResetAll: false,
    enableRowSelection: true,
    enableMultiRowSelection: !singleSelect,
    getCoreRowModel: getCoreRowModel(),
  });

  const { getHeaderGroups, getSelectedRowModel, getRowModel } = tableInstance;

  const headerGroups = getHeaderGroups();
  const selectedRows = getSelectedRowModel().rows;

  const toolbarElement = useMemo(() => {
    if (!selectedRows.length || !toolbar) {
      return null;
    }
    const row = selectedRows.map(({ original }) => original);
    const label = ToolbarProps?.toolbarLabel ?? `${row.length} selected`;
    return (
      <div className="grid grid-cols-2">
        <div className="col-span-1">
          <p className="text-gray-500"> {label}</p>
        </div>
        <div className="col-span-1">{toolbar(row)}</div>
      </div>
    );
  }, [ToolbarProps, selectedRows, toolbar]);

  return (
    <TableWrapper pagination={<TablePagination />} toolbar={toolbarElement}>
      <HeroTable aria-label="table" fullWidth isHeaderSticky={false}>
        {TableHeader({ headerGroups })}
        <TableBody>
          {TableContent({ page: getRowModel().rows, canSelect })}
        </TableBody>
      </HeroTable>
    </TableWrapper>
  );
};

export default DataTable;
