'use client';
import React, { useState, useEffect } from 'react';
import UserItem from '@/app/users/[id]/page';
import { User } from '@/app/users/[id]/page'; // Ensure this import path is correct

const UserList: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await fetch('/api/user');
            const { data } = await response.json();
            console.log('Fetched data:', data); // Debugging log
            if (Array.isArray(data)) {
                setUsers(data);
            } else {
                throw new Error('Fetched data is not an array');
            }
        } catch (error: any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="users-list p-6 bg-gray-100">
            {users.length > 0 ? (
                users.map(user => (
                    <UserItem key={user.id} user={user} />
                ))
            ) : (
                <p>No users available.</p>
            )}
        </div>
    );
};

export default UserList;
