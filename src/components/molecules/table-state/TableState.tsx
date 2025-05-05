import { Fragment, PropsWithChildren, useMemo } from "react";
import { ITableStateBaseProps } from "./type";

export interface ITableStateProps
  extends ITableStateBaseProps,
    PropsWithChildren {
  isFetched?: boolean;
  count?: number;
  search?: string | null;
  onClear?: () => void;
  error?: boolean;
  NoResultProps?: ITableStateBaseProps;
  ErrorProps?: ITableStateBaseProps;
}

const TableState = ({
  isFetched,
  count,
  search,
  error,
  children,
}: ITableStateProps) => {
  const hasEmptyData = useMemo(() => !count, [count]);
  const hasNoResultOnSearch = useMemo(
    () => !!search && !count,
    [count, search]
  );

  if (isFetched) {
    if (error) {
      return <div>Error</div>;
    }
    if (hasNoResultOnSearch) {
      return <div>hasNoResultOnSearch</div>;
    }
    if (hasEmptyData) {
      return <div>TableStateEmpty</div>;
    }
  }

  return <Fragment>{children}</Fragment>;
};

export default TableState;
