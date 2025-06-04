import { config } from "../config";
import type { ApiResponse, Contact, SearchFilters } from "../types";

export const api = {
  // Get all contacts with pagination
  getContacts: async (limit = 30, skip = 0): Promise<ApiResponse> => {
    const response = await fetch(
      `${config.API_BASE_URL}/passenger?limit=${limit}&skip=${skip}`
    );
    return response.json();
  },

  // Get single contact
  getContact: async (id: number): Promise<Contact> => {
    const response = await fetch(`${config.API_BASE_URL}/passenger/${id}`);
    return response.json();
  },

  // Search contacts
  searchContacts: async (
    filters: SearchFilters,
    limit = 30
  ): Promise<ApiResponse> => {
    const where: Record<string, unknown> = {};

    if (filters.first_name) {
      where.first_name = { contains: filters.first_name };
    }
    if (filters.last_name) {
      where.last_name = { contains: filters.last_name };
    }
    if (filters.phone) {
      where.phone = { contains: filters.phone };
    }

    const queryParams = new URLSearchParams({
      where: JSON.stringify(where),
      limit: limit.toString(),
    });

    const response = await fetch(
      `${config.API_BASE_URL}/passenger?${queryParams}`
    );
    return response.json();
  },
};
