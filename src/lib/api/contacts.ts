import { apiClient } from "./axios";
import type { ApiParams, ApiResponse, Contact } from "@/types";

export const contactsApi = {
  // Get contacts with pagination and search
  getContacts: async (params: ApiParams = {}): Promise<ApiResponse> => {
    const searchParams = new URLSearchParams();

    if (params.limit) searchParams.append("limit", params.limit.toString());
    if (params.skip) searchParams.append("skip", params.skip.toString());
    if (params.where)
      searchParams.append("where", JSON.stringify(params.where));
    if (params.sort) searchParams.append("sort", params.sort);

    const response = await apiClient.get<ApiResponse>(
      `/passenger?${searchParams.toString()}`
    );
    return response.data;
  },

  // Get single contact
  getContact: async (id: number): Promise<Contact> => {
    const response = await apiClient.get<Contact>(`/passenger/${id}`);
    return response.data;
  },

  // Search contacts
  searchContacts: async (
    query: string,
    params: Omit<ApiParams, "where"> = {}
  ): Promise<ApiResponse> => {
    if (!query.trim()) {
      return contactsApi.getContacts(params);
    }

    const where = {
      $or: [
        { first_name: { contains: query } },
        { last_name: { contains: query } },
        { phone: { contains: query } },
      ],
    };

    return contactsApi.getContacts({
      ...params,
      where,
      sort: "createdAt DESC",
    });
  },
};
