import { SearchBar } from "@/components/features/search";
import ContactsList from "../components/contacts-list";
import { FrequentContacts } from "../components/frequent-contacts-list";
import { PageContainer } from "../components/ui/containers";

export default function HomePage() {
  return (
    <PageContainer>
      <h1 className="text-2xl font-bold mb-6 md:text-3xl">Contacts</h1>

      <SearchBar onSearch={console.log} />

      <FrequentContacts
        title="Frequently Visited"
        classes={{
          root: "mt-6",
        }}
      />

      <ContactsList
        title="All Contacts"
        classes={{
          root: "mt-6",
        }}
      />
    </PageContainer>
  );
}
