import type { Contact } from "../types";
import ContactCard from "./contact-card";

export default function ContactsList({ contacts }: { contacts: Contact[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {contacts.map((contact) => (
        <ContactCard
          key={`contact-item-${contact.id}`}
          id={contact.id}
          first_name={contact.first_name}
          last_name={contact.last_name}
          phone={contact.phone}
          // avatar={contact.avatar}
        />
      ))}
    </div>
  );
}
