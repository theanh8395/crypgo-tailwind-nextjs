"use client";
import { PropsWithChildren, useState } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { createCustomQueryClient } from "@/lib";

const AppQuery = ({ children }: PropsWithChildren) => {
  const [queryClient] = useState(() => createCustomQueryClient());
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
export default AppQuery;
