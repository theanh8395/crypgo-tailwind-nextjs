export type TSubmenuItem = {
  label: string;
  href: string;
};

export type THeaderItem = {
  label: string;
  href: string;
  submenu?: TSubmenuItem[];
};
