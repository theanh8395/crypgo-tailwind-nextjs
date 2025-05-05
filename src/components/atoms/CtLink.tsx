"use client";

import NextLink from "next/link";
import { Link, LinkProps } from "@heroui/react";

const CtLink = ({ children, ...props }: LinkProps) => {
  return (
    <Link as={NextLink} {...props}>
      {children}
    </Link>
  );
};

export { CtLink };
