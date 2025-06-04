import { Link } from "react-router-dom";
import type { Contact } from "../types";
import { Avatar } from "./avatar";

export default function ContactCard({
  id,
  first_name,
  phone,
  last_name,
  avatar,
}: Partial<Contact>) {
  console.log(avatar)
  return (
    <Link to={`/contact/${id}`}>
      <div
        className={`p-4 rounded-lg border hover:shadow-md transition-shadow flex items-center gap-4`}
      >
        <Avatar src={avatar} size="large" />

        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-gray-900 truncate">
            {first_name} {last_name}
          </h3>
          <p className="text-sm text-gray-500 truncate">{phone}</p>
        </div>
      </div>
    </Link>
  );
}
