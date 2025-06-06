import { useEffect } from "react";
import {
  useInfiniteContacts,
  useInfiniteSearchContacts,
} from "@/lib/hooks/use-contacts";
import { useIntersectionObserver } from "@/lib/hooks";
import type { Contact } from "@/types";
import { ContactCard, ContactCardSkeleton } from "./features/contact-card";
import classNames from "classnames";

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
  const { ref: loadMoreRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.3,
    rootMargin: "100px",
  });

  // Use search query if provided, otherwise get all contacts
  const isSearching = searchQuery.trim().length >= 2;

  const contactsQuery = useInfiniteContacts({ limit: 50 });
  const searchQuery_ = useInfiniteSearchContacts(searchQuery, { limit: 50 });

  const activeQuery = isSearching ? searchQuery_ : contactsQuery;

  const {
    data,
    // error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    // isError,
    // refetch,
  } = activeQuery;

  // Load more when intersection observer triggers
  useEffect(() => {
    console.log(isIntersecting, hasNextPage, !isFetchingNextPage);
    if (isIntersecting && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [isIntersecting, hasNextPage, isFetchingNextPage, fetchNextPage]);

  // Flatten all pages into single array
  const contacts = data?.pages.flatMap((page) => page.items) ?? [];
  const totalCount = data?.pages[0]?.meta.total ?? 0;

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[...Array(6)].map((_, i) => (
          <ContactCardSkeleton key={i} />
        ))}
      </div>
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

      {/* Load more trigger */}
      {hasNextPage && (
        <div ref={loadMoreRef} className="flex justify-center py-4 bg-red">
          {isFetchingNextPage ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              {[...Array(2)].map((_, i) => (
                <ContactCardSkeleton key={i} />
              ))}
            </div>
          ) : (
            <div className="text-sm text-gray-500">Scroll to load more...</div>
          )}
        </div>
      )}
    </div>
  );
}
