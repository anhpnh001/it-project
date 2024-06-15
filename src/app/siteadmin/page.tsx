"use client";
import React, { useState, ReactElement } from "react";
import {
  FaUsers,
  FaBookOpen,
  FaChartBar,
  FaPlug,
  FaPalette,
  FaServer,
  FaFileAlt,
} from "react-icons/fa";
import MyCourses from '@/components/CoursesList';      // Your course creation component
import UserList from '@/components/UserList'; 
import Create from "@/app/(categories)/courses/create/page";
import Users from "@/app/users/page";
interface AdminLinkProps {
  href: string;
  label: string;
  Icon: ReactElement;
  onClick: () => void;
}

const AdminLink = ({
  href,
  label,
  Icon,
  onClick,
}: AdminLinkProps): ReactElement => (
  <li className="group">
    <a
      href={href}
      className="flex items-center space-x-2 p-2 rounded hover:bg-blue-500 hover:text-white transition-colors duration-200 ease-in-out"
      onClick={onClick}
    >
      {Icon}
      <span>{label}</span>
    </a>
  </li>
);

const SiteAdministration = (): ReactElement => {
  const [activeSection, setActiveSection] = useState<string>("");

  const handleSectionClick = (section: string) => () => {
    setActiveSection(section);
  };

  const renderContent = () => {
    switch (activeSection) {
      case "courses":
        return <Create />;
      case "users":
        return <Users />;
      default:
        return <p>Select an option from the sidebar to manage the site.</p>;
    }
  };
  const renderContent2 = () => {
    switch (activeSection) {
      case "courses":
        return <MyCourses />;
      case "users":
        return <UserList />;
      default:
        return <p>Select an option from the sidebar to manage the site.</p>;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white p-5 border-r">
        <h1 className="text-xl font-semibold">Site Administration</h1>
        <ul className="mt-5">
          <AdminLink
            href="#"
            label="Users"
            Icon={<FaUsers />}
            onClick={handleSectionClick("users")}
          />
          <AdminLink
            href="#"
            label="Courses"
            Icon={<FaBookOpen />}
            onClick={handleSectionClick("courses")}
          />
          <AdminLink
            href="#"
            label="Grades"
            Icon={<FaChartBar />}
            onClick={handleSectionClick("grades")}
          />
          <AdminLink
            href="#"
            label="Plugins"
            Icon={<FaPlug />}
            onClick={handleSectionClick("plugins")}
          />
          <AdminLink
            href="#"
            label="Appearance"
            Icon={<FaPalette />}
            onClick={handleSectionClick("appearance")}
          />
          <AdminLink
            href="#"
            label="Server"
            Icon={<FaServer />}
            onClick={handleSectionClick("server")}
          />
          <AdminLink
            href="#"
            label="Reports"
            Icon={<FaFileAlt />}
            onClick={handleSectionClick("reports")}
          />
        </ul>
      </aside>

      <main className="flex-1 p-5">
        <h2 className="text-lg font-bold">Welcome to Site Administration</h2>
        {renderContent()}
        <div>{renderContent2()}</div>
      </main>
    </div>
  );
};

export default SiteAdministration;
