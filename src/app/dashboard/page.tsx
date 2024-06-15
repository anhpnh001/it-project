'use client';
import React, { useState, ReactElement } from 'react';
import { FaUsers, FaBookOpen, FaChartBar, FaPlug, FaPalette, FaServer, FaFileAlt } from 'react-icons/fa';
import MyCourses from '@/components/CoursesList';      // Your course creation component
import UserList from '@/components/UserList'; // Your user management component
// import UserManager from '@/components/UserManager';
interface AdminLinkProps {
  href: string;
  label: string;
  Icon: ReactElement;
  onClick: () => void;
}

const AdminLink = ({ href, label, Icon, onClick }: AdminLinkProps): ReactElement => (
  <li className="group">
    <a href={href} className="flex items-center space-x-2 p-2 rounded hover:bg-blue-500 hover:text-white transition-colors duration-200 ease-in-out" onClick={onClick}>
      {Icon}
      <span>{label}</span>
    </a>
  </li>
);

const DashBoard = (): ReactElement => {
  const [activeSection, setActiveSection] = useState<string>('');

  const handleSectionClick = (section: string) => () => {
    setActiveSection(section);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'courses':
        return <MyCourses />;
      case 'users':
        return <UserList/>;
      default:
        return <p>Select an option from the sidebar to manage the site.</p>;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white p-5 border-r">
        <h1 className="text-xl font-semibold">DashBoard</h1>
        <ul className="mt-5">
          <AdminLink href="#" label="Users" Icon={<FaUsers />} onClick={handleSectionClick('users')} />
          <AdminLink href="#" label="Courses" Icon={<FaBookOpen />} onClick={handleSectionClick('courses')} />
          <AdminLink href="#" label="Lesson" Icon={<FaChartBar />} onClick={handleSectionClick('grades')} />
        </ul>
      </aside>
      <main className="flex-1 p-5">
        <h2 className="text-lg font-bold">Welcome to DashBoard</h2>
        {renderContent()}
      </main>
    </div>
  );
}

export default DashBoard;
