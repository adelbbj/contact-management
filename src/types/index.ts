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
  isFrequent?: boolean;
}

export interface ApiResponse {
  meta: {
    skipped: number;
    limit: number;
    total: number;
    criteria: Record<string, any>;
  };
  items: Contact[];
}

export interface SearchCriteria {
  first_name?: { contains: string };
  last_name?: { contains: string };
  phone?: { contains: string };
}

export interface ApiParams {
  limit?: number;
  skip?: number;
  where?: Record<string, any>;
  sort?: string;
}

export interface ApiError {
  message: string;
  status?: number;
  data?: any;
}
