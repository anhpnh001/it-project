import React from 'react';

interface UserItemProps {
    user: User;
}
export interface User {
    id: string;
    username: string;
    email: string;
    role: string;
    isActive: boolean;
}


const UserItem: React.FC<UserItemProps> = ({ user }) => {
    return (
        <div className="user-item p-4 border rounded mb-4 bg-white shadow-md">
            <h2 className="text-xl font-bold">{user.username}</h2>
            <p className="text-gray-700">{user.email}</p>
            <p className="text-gray-500">Role: {user.role}</p>
            <p className={`text-sm ${user.isActive ? 'text-green-600' : 'text-red-600'}`}>
                {user.isActive ? 'Active' : 'Inactive'}
            </p>
        </div>
    );
};

export default UserItem;
