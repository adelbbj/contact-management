import React, { type FC } from "react";

import { IconSearch } from "@/components/icons";
import { useDebounce } from "@/lib/hooks";
import type { SearchBarProps } from "./search-bar.types";

export const SearchBar: FC<SearchBarProps> = ({
  onSearch,
  placeholder = "Search...",
}) => {
  const [query, setQuery] = React.useState("");
  const debouncedQuery = useDebounce(query, 300);

  // Call onSearch when debounced query changes
  React.useEffect(() => {
    onSearch(debouncedQuery);
  }, [debouncedQuery, onSearch]);

  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <IconSearch className="w-5 h-5 text-gray-400" />
      </div>

      <input
        type="text"
        className="w-full p-3 pl-10 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};
