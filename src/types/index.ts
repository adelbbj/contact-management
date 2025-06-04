export interface Contact {
  id: number;
  first_name: string;
  last_name: string;
  email: string | null;
  gender: string;
  phone: string;
  note: string;
  telegram: string | null;
  avatar: string;
  company: string;
  address: string | null;
  createdAt: number;
  updatedAt: number;
}

export interface ApiResponse {
  meta: {
    skipped: number;
    limit: number;
    total: number;
    criteria: Record<string, unknown>;
  };
  items: Contact[];
}

export interface SearchFilters {
  first_name?: string;
  last_name?: string;
  phone?: string;
}

export interface Pagination {
  skip: number;
  limit: number;
}
