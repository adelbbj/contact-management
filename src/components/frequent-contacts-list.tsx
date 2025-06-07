import classNames from "classnames";
import { ContactCard } from "./features/contact-card";
import { useFrequentContacts } from "@/lib/hooks";

type FrequentContactsProps = {
  title?: string;
  classes?: {
    root?: string;
  };
};

export function FrequentContacts({ title, classes }: FrequentContactsProps) {
  const { frequentContacts } = useFrequentContacts();

  if (frequentContacts.length === 0) {
    return null;
  }

  return (
    <div className={classNames([classes?.root])}>
      {title && (
        <h2 className="text-lg font-semibold mb-3 text-gray-700">{title}</h2>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {frequentContacts.map((contact) => (
          <ContactCard
            key={contact.id}
            id={contact.id}
            avatar={contact.avatar}
            first_name={contact.first_name}
            last_name={contact.last_name}
            phone={contact.phone}
            isFrequent={true}
          />
        ))}
      </div>
    </div>
  );
}
