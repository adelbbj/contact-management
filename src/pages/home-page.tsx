import ContactsList from "../components/contacts-list";

export default function HomePage() {
  return (
    <main className="container mx-auto px-4 py-6 max-w-4xl">
      <h1 className="text-2xl font-bold mb-6 md:text-3xl">Contacts</h1>

      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-3 text-gray-700">
          All Contacts
        </h2>
        <ContactsList contacts={mockData} />
      </div>
    </main>
  );
}

const mockData = [
  {
    first_name: "Jabez",
    last_name: "Robberts",
    email: "jrobberts0@a8.net",
    gender: "Genderfluid",
    phone: "1787525707",
    note: "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    telegram: "jrobberts0",
    avatar:
      "https://robohash.org/nihildictadistinctio.png?size=300x300&set=set1",
    company: "Twitterwire",
    address: null,
    createdAt: 1637996519400,
    updatedAt: 1637996519400,
    id: 1,
  },
  {
    first_name: "Noella",
    last_name: "Quenby",
    email: null,
    gender: "Genderqueer",
    phone: "7163228630",
    note: "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    telegram: "nquenby1",
    avatar: "https://robohash.org/harumaperiamsed.png?size=300x300&set=set1",
    company: "Twitterlist",
    address: "50 Westend Circle",
    createdAt: 1637996519400,
    updatedAt: 1637996519400,
    id: 2,
  },
  {
    first_name: "Sonja",
    last_name: "Steptowe",
    email: "ssteptowe2@ow.ly",
    gender: "Genderfluid",
    phone: "8458752469",
    note: "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    telegram: "ssteptowe2",
    avatar: "https://robohash.org/earumeumut.png?size=300x300&set=set1",
    company: "Gigazoom",
    address: "673 Browning Way",
    createdAt: 1637996519400,
    updatedAt: 1637996519400,
    id: 3,
  },
];
