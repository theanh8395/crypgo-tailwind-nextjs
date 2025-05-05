// import { OrderBy } from "@/enums";
import { TableOptions } from "@tanstack/react-table";
import { ReactElement } from "react";

export interface ITableToolbarProps {
  toolbarLabel?: string;
}

export interface ITableItem {
  id: string | number | symbol;
}

// export interface ITableSxProps {
//   tableRootSx?: SxProps<Theme>;
//   tableContainerSx?: SxProps<Theme>;
//   tableWrapperSx?: SxProps<Theme>;
// }

export interface ITableToolbarComponentProps<T> {
  selectedRows?: T[];
  selectedRowIds?: Array<number>;
}

export interface IDataTableProps<T extends ITableItem>
  extends Omit<TableOptions<T>, "getCoreRowModel"> {
  isLoading?: boolean;
  canSelect?: boolean;
  fullHeight?: boolean;
  isImprovedPagination?: boolean;
  // TableSxProps?: ITableSxProps;
  totalItems: number;
  singleSelect?: boolean;
  shortPagination?: boolean;
  autoResetSelectedRows?: boolean;
  isPaginationLoading?: boolean;
  ToolbarProps?: ITableToolbarProps;
  ToolbarComponent?: ReactElement<ITableToolbarComponentProps<T>>;
  toolbar?: (row: Array<T>, selectedRowsCount?: number) => ReactElement;
  // onChangeParams?: (props: ITableQueryParams) => void;
  onRowSelected?: (
    rows: Array<T>,
    selectedRowIds: Record<number, boolean>
  ) => void;
}

// export interface IColumnOrderBy {
//   field: string;
//   order: OrderBy;
// }

// export interface ITableQueryParams {
//   pageIndex: number;
//   pageSize: number;
//   orderBy?: Array<IColumnOrderBy>;
//   offset: number;
// }
