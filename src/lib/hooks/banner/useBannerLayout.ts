import { getBannerLayout } from "@/services";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";

const useBannerLayout = (options?: Omit<UseQueryOptions, "queryKey">) => {
  const methods = useQuery({
    queryKey: ["useBannerLayout"],
    queryFn: getBannerLayout,
    ...options,
  });
  return methods;
};

export default useBannerLayout;
