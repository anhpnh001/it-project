import React from 'react';
import axios from 'axios';

interface UserItemProps {
    user: User;
    onUpdate: (updatedUser: User) => void;
    onDelete: (userId: string) => void;
}

export interface User {
    id: string;
    username: string;
    email: string;
    role: string;
    isActive: boolean;
}

const UserItem: React.FC<UserItemProps> = ({ user, onUpdate, onDelete }) => {
    const handleDelete = async () => {
        try {
            await axios.delete(`/api/user/${user.id}`);
            onDelete(user.id);
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    const handleUpdate = async () => {
        const updatedUser = {
            ...user,
            username: 'UpdatedUsername', // Example update, you can make this dynamic
            role: 'UpdatedRole', // Example update, you can make this dynamic
        };

        try {
            const response = await axios.put(`/api/user/${user.id}`, updatedUser);
            onUpdate(response.data);
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    return (
        <div className="user-item p-4 border rounded mb-4 bg-white shadow-md">
            <h2 className="text-xl font-bold">{user.username}</h2>
            <p className="text-gray-700">{user.email}</p>
            <p className="text-gray-500">Role: {user.role}</p>
            <p className={`text-sm ${user.isActive ? 'text-green-600' : 'text-red-600'}`}>
                {user.isActive ? 'Active' : 'Inactive'}
            </p>
            <button onClick={handleUpdate} className="bg-blue-500 text-white px-4 py-2 rounded mt-2">Update</button>
            <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded mt-2 ml-2">Delete</button>
        </div>
    );
};

export default UserItem;
