import React from "react";
import { Avatar } from "../components/ui/avatar";
import { PageContainer } from "../components/ui/containers";
import { Link } from "react-router-dom";

const ContactDetailsPage: React.FC = () => {
  return (
    <PageContainer>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 flex flex-col items-center md:flex-row md:items-start text-white">
          <Avatar src={mockData.avatar} />

          <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
            <h1 className="text-2xl font-bold">
              {mockData.first_name} {mockData.last_name}
            </h1>
            <p className="text-blue-100">
              {mockData.email} | Works at {mockData.company}
            </p>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h2 className="text-lg font-semibold border-b pb-2">
                Contact Information
              </h2>

              <div className="flex items-start">
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <Link to={`tel:${mockData.phone}`}>{mockData.phone}</Link>
                </div>
              </div>

              <div className="flex items-start">
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <Link to={`mailto:${mockData.phone}`}>{mockData.email}</Link>
                </div>
              </div>

              <div className="flex items-start">
                <div>
                  <p className="text-sm text-gray-500">Address</p>
                  <p>{mockData.address}</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-semibold border-b pb-2">
                Additional Information
              </h2>

              <div className="flex items-start">
                <div>
                  <p className="text-sm text-gray-500">Company</p>
                  <p>{mockData.company}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div>
                  <p className="text-sm text-gray-500">Birth Date</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default ContactDetailsPage;

const mockData = {
  first_name: "Jabez",
  last_name: "Robberts",
  email: "jrobberts0@a8.net",
  gender: "Genderfluid",
  phone: "1787525707",
  note: "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
  telegram: "jrobberts0",
  avatar: "https://robohash.org/nihildictadistinctio.png?size=300x300&set=set1",
  company: "Twitterwire",
  address: null,
  createdAt: 1637996519400,
  updatedAt: 1637996519400,
  id: 1,
};
