import {
  useInfiniteContacts,
  useInfiniteSearchContacts,
} from "@/lib/hooks/use-contacts";
import { useInfiniteScroll } from "@/lib/hooks";
import type { Contact } from "@/types";
import { ContactCard, ContactCardSkeleton } from "./features/contact-card";
import classNames from "classnames";
import { ErrorMessage } from "./ui/error-message";

type ContactsListProps = {
  searchQuery?: string;
  title?: string;
  classes?: {
    root?: string;
  };
};

export default function ContactsList({
  searchQuery = "",
  title,
  classes,
}: ContactsListProps) {
  const isSearching = searchQuery.trim().length >= 2;

  const contactsQuery = useInfiniteContacts({ limit: 50 });
  const searchQuery_ = useInfiniteSearchContacts(searchQuery, { limit: 50 });

  const activeQuery = isSearching ? searchQuery_ : contactsQuery;

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    refetch,
  } = activeQuery;

  const { setLastElement } = useInfiniteScroll({
    hasMore: hasNextPage,
    onLoadMore: () => !isFetchingNextPage && fetchNextPage(),
  });

  const contacts = data?.pages.flatMap((page) => page.items) ?? [];
  const totalCount = data?.pages[0]?.meta.total ?? 0;

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {[...Array(6)].map((_, i) => (
          <ContactCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <ErrorMessage
        title="Failed to load contacts"
        message={
          error?.message || "Unable to fetch contacts. Please try again."
        }
        onRetry={() => refetch()}
      />
    );
  }

  if (contacts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">
          {isSearching
            ? "No contacts found matching your search."
            : "No contacts available."}
        </p>
      </div>
    );
  }

  return (
    <div className={classNames(classes?.root)}>
      <h2 className="text-lg font-semibold text-gray-700">{title}</h2>

      <div className="text-sm mb-3 text-gray-500">
        Showing {contacts.length} of {totalCount} contacts
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {contacts.map((contact: Contact) => (
          <ContactCard
            key={contact.id}
            id={contact.id}
            avatar={contact.avatar}
            first_name={contact.first_name}
            last_name={contact.last_name}
            phone={contact.phone}
          />
        ))}
      </div>

      <div ref={setLastElement} />
      {isFetchingNextPage && <p>Loading...</p>}
      {!hasNextPage && <p>No more results</p>}
    </div>
  );
}
