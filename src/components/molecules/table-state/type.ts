import { ReactNode } from "react";

export interface ITableStateBaseProps {
  title?: string;
  subTitle?: string;
  actions?: ReactNode;
  icon?: ReactNode;
  iconColor?: { inner: string; outer: string };
  className?: string;
}
