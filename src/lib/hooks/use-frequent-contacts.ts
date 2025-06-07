import type { Contact } from "@/types";
import { useEffect, useState } from "react";

const FREQUENT_CONTACTS_KEY = "frequent_contacts";
const MAX_FREQUENT_CONTACTS = 4;

export const useFrequentContacts = () => {
  const [frequentContacts, setFrequentContacts] = useState<Contact[]>([]);

  // load frequent contacts from localStorage
  useEffect(() => {
    const stored = localStorage.getItem(FREQUENT_CONTACTS_KEY);
    if (stored) {
      try {
        setFrequentContacts(JSON.parse(stored));
      } catch (error) {
        console.error("Error parsing frequent contacts:", error);
      }
    }
  }, []);

  // Add contact to frequent list
  const addToFrequent = (contact: Contact) => {
    setFrequentContacts((prev) => {
      // Remove if already exists
      const filtered = prev.filter((c) => c.id !== contact.id);
      // Add to beginning
      const updated = [contact, ...filtered].slice(0, MAX_FREQUENT_CONTACTS);

      localStorage.setItem(FREQUENT_CONTACTS_KEY, JSON.stringify(updated));

      return updated;
    });
  };

  return {
    frequentContacts,
    addToFrequent,
  };
};
