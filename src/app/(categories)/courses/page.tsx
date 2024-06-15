'use client'
import React, { useState, ReactElement } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaBook, FaClock, FaUser, FaHistory, FaSignOutAlt } from 'react-icons/fa';
import { FaUsers, FaBookOpen, FaChartBar, FaPlug, FaPalette, FaServer, FaFileAlt } from 'react-icons/fa';
import Profile from '@/app/profile/page';
import MyCourses from '@/components/CoursesList';     

interface NavLinkProps {
  href: string;
  label: string;
  Icon: ReactElement;
  onClick: () => void;
}


const NavLink: React.FC<NavLinkProps> = ({ href, label, Icon, onClick }: NavLinkProps) => (
  <li className="flex p-4 border-t border-gray-300">
    <Link href={href}>
      <div className="flex items-center text-gray-500 cursor-pointer" onClick={onClick}>
        {Icon}
        {label}
      </div>
    </Link>
  </li>
);

const CoursesPage: React.FC = () => {
  const [activePanel, setActivePanel] = useState<string>('myCourses');

  const handlePanelSwitch = (panel: string) => () => {
    setActivePanel(panel);
  };

  const renderContent = (): ReactElement => {
    switch (activePanel) {
      case 'profile':
        return <Profile />;
      case 'myCourses':
        return <MyCourses />;

      default:
        return <Profile/>;
    }
  };

  return (
    <main className="flex gap-8 container">
      <section className="w-1/4 flex flex-col gap-8">
        <div className="p-6 flex flex-col gap-1 items-center border border-gray-300 rounded-md">
          <Image
            src="avatar-svgrepo-com.svg"
            width={160}
            height={160}
            alt="avatar"
          />
          <h1 className="text-2xl font-bold text-center text-primary">John Doe</h1>
          <p className="text-center text-gray-500">anhpnh001@gmail.com</p>
          <p className="text-center text-gray-500">+84 123 456 789</p>
        </div>
        <div className="flex flex-col gap-2 items-center border border-gray-300 rounded-md">
          <h3 className="p-4 text-lg font-bold text-center text-primary">Account Settings</h3>
          <ul className="w-full">
            <NavLink href="#" label="Edit Profile" Icon={<FaUser />} onClick={handlePanelSwitch('editProfile')} />
            <NavLink href="#" label="My Courses" Icon={<FaBook />} onClick={handlePanelSwitch('myCourses')} />
            <NavLink href="#" label="Purchase History" Icon={<FaHistory />} onClick={handlePanelSwitch('purchaseHistory')} />
            <NavLink href="/login" label="Sign Out" Icon={<FaSignOutAlt />} onClick={() => {/* Handle sign out logic */}} />
          </ul>
        </div>
      </section>
      <section className="w-3/4">
        {renderContent()}
      </section>
    </main>
  );
};



export default CoursesPage;
