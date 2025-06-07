import React from "react";
import { Avatar } from "../components/ui/avatar";
import { PageContainer } from "../components/ui/containers";
import { Link, useParams } from "react-router-dom";
import { useContact } from "@/lib/hooks";
import { ErrorMessage } from "@/components/ui/error-message";

const ContactDetailsPage: React.FC = () => {
  const { id } = useParams();

  const {
    data: contact,
    isError,
    error,
    refetch,
  } = useContact(Number.parseInt(id!));

  if (isError || !contact) {
    return (
      <ErrorMessage
        title="Failed to load contact"
        message={
          error?.message || "Unable to fetch contact details. Please try again."
        }
        onRetry={() => refetch()}
      />
    );
  }

  return (
    <PageContainer>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 flex flex-col items-center md:flex-row md:items-start text-white">
          <Avatar src={contact.avatar} />

          <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
            <h1 className="text-2xl font-bold">
              {contact.first_name} {contact.last_name}
            </h1>
            <p className="text-blue-100">{contact.phone}</p>
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
                  <Link to={`tel:${contact.phone}`}>{contact.phone}</Link>
                </div>
              </div>

              <div className="flex items-start">
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <Link to={`mailto:${contact.phone}`}>{contact.email}</Link>
                </div>
              </div>

              <div className="flex items-start">
                <div>
                  <p className="text-sm text-gray-500">Address</p>
                  <p>{contact.address}</p>
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
                  <p>{contact.company}</p>
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
