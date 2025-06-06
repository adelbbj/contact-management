import {
  useInfiniteQuery,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { contactsApi } from "@/lib/api/contacts";
import type { ApiParams } from "@/types";

// Query keys factory
export const contactsKeys = {
  all: ["contacts"] as const,
  lists: () => [...contactsKeys.all, "list"] as const,
  list: (params: ApiParams) => [...contactsKeys.lists(), params] as const,
  details: () => [...contactsKeys.all, "detail"] as const,
  detail: (id: number) => [...contactsKeys.details(), id] as const,
  search: (query: string) => [...contactsKeys.all, "search", query] as const,
};

// Hook for infinite contacts list
export function useInfiniteContacts(params: Omit<ApiParams, "skip"> = {}) {
  return useInfiniteQuery({
    queryKey: contactsKeys.list(params),
    queryFn: ({ pageParam = 0 }) =>
      contactsApi.getContacts({
        ...params,
        skip: pageParam,
        limit: params.limit || 10,
      }),
    getNextPageParam: (lastPage, allPages) => {
      const totalLoaded = allPages.reduce(
        (sum, page) => sum + page.items.length,
        0
      );
      return totalLoaded < lastPage.meta.total ? totalLoaded : undefined;
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
    refetchOnWindowFocus: false,
    initialPageParam: 0,
  });
}

// Hook for searching contacts with infinite scroll
export function useInfiniteSearchContacts(
  query: string,
  params: Omit<ApiParams, "skip" | "where"> = {}
) {
  return useInfiniteQuery({
    queryKey: contactsKeys.search(query),
    queryFn: ({ pageParam = 0 }) =>
      contactsApi.searchContacts(query, {
        ...params,
        skip: pageParam,
        limit: params.limit || 10,
      }),
    getNextPageParam: (lastPage, allPages) => {
      const totalLoaded = allPages.reduce(
        (sum, page) => sum + page.items.length,
        0
      );
      return totalLoaded < lastPage.meta.total ? totalLoaded : undefined;
    },
    enabled: query.length >= 2, // Only search when query is at least 2 characters
    staleTime: 2 * 60 * 1000, // 2 minutes for search results
    gcTime: 5 * 60 * 1000, // 5 minutes
    refetchOnWindowFocus: false,
    initialPageParam: 0,
  });
}

// Hook for single contact
export function useContact(id: number) {
  return useQuery({
    queryKey: contactsKeys.detail(id),
    queryFn: () => contactsApi.getContact(id),
    staleTime: 10 * 60 * 1000, // 10 minutes
    gcTime: 30 * 60 * 1000, // 30 minutes
    refetchOnWindowFocus: false,
  });
}

// Hook for prefetching contact
export function usePrefetchContact() {
  const queryClient = useQueryClient();

  return (id: number) => {
    queryClient.prefetchQuery({
      queryKey: contactsKeys.detail(id),
      queryFn: () => contactsApi.getContact(id),
      staleTime: 10 * 60 * 1000,
    });
  };
}
