import React from 'react';
import ManageUsersForm from '@/app/users/page'; // Adjust the path as needed

const CreateUserPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create New User</h1>
      <ManageUsersForm />
    </div>
  );
};

export default CreateUserPage;
