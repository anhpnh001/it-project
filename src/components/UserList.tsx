import React, { useState, useEffect } from 'react';
import UserItem, { User } from '@/app/users/[id]/page';
import axios from 'axios';

const UserList: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('/api/user');
                const result = await response.json();
                console.log('Fetched data:', result);
                
                if (Array.isArray(result.data)) {
                    setUsers(result.data);
                } else {
                    throw new Error('Fetched data is not an array');
                }
            } catch (error: any) {
                console.error('Error fetching courses:', error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchUsers();
    }, []);

    const handleUpdateUser = (updatedUser: User) => {
        setUsers(prevUsers => prevUsers.map(user => user.id === updatedUser.id ? updatedUser : user));
    };

    const handleDeleteUser = (userId: string) => {
        setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            {users.map(user => (
                <UserItem key={user.id} user={user} onUpdate={handleUpdateUser} onDelete={handleDeleteUser} />
            ))}
        </div>
    );
};

export default UserList;
