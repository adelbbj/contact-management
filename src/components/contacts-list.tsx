import type { Contact } from "../types";
import ContactCard from "./contact-card";

export default function ContactsList({ contacts }: { contacts: Contact[] }) {
  return (
    <div>
      {contacts.map((contact) => (
        <ContactCard
          key={`contact-item-${contact.id}`}
          id={contact.id}
          first_name={contact.first_name}
          last_name={contact.last_name}
          phone={contact.phone}
        />
      ))}
    </div>
  );
}
