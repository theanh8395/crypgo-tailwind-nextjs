import { useUIStore } from "@/stores";
import { QueryClient } from "@tanstack/react-query";

export const createCustomQueryClient = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: 0,
        staleTime: 60 * 1000,
      },
      mutations: {
        onMutate: () => {
          useUIStore.getState().setLoading(true);
        },
        onSettled: () => {
          useUIStore.getState().setLoading(false);
        },
      },
    },
  });
  queryClient.getQueryCache().subscribe((event) => {
    const state = event.query.state;
    if (state.fetchStatus === "fetching" && state.data) {
    }
  });
  queryClient.getMutationCache().subscribe((event) => {
    console.log("Mutation Cache Event", event);
  });
  return queryClient;
};
