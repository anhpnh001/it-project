'use client';
import React, { useState } from 'react';

const ManageUsersForm: React.FC = () => {
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        role: 'Student',
        isActive: true,
    });

    const [message, setMessage] = useState<string | null>(null);

    const handleChange = (username: string, value: any) => {
        setUser(prev => ({ ...prev, [username]: value }));
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const userData = {
            ...user,
            role: user.role,
            isActive: user.isActive,
        };

        try {
            const response = await fetch('/api/user/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            const result = await response.json();
            if (response.ok) {
                setMessage('User created successfully');
                setUser({ username: '', email: '', password: '', role: 'Student', isActive: true });
            } else {
                setMessage(`Error: ${result.error}`);
            }
        } catch (error:any) {
            setMessage(`Error: ${error.message}`);
        }
    };

    return (
        <div>
            {message && (
                <div className={`p-4 mb-4 ${message.includes('Error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                    {message}
                </div>
            )}
            <form onSubmit={handleSubmit} className="p-6 bg-white shadow-md rounded-lg">
                <div className="grid grid-cols-2 gap-6">
                    <label>
                        User Name
                        <input
                            type="text"
                            className="w-full p-2 border rounded"
                            value={user.username}
                            onChange={e => handleChange('username', e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Email Address
                        <input
                            type="email"
                            className="w-full p-2 border rounded"
                            value={user.email}
                            onChange={e => handleChange('email', e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Password
                        <input
                            type="password"
                            className="w-full p-2 border rounded"
                            value={user.password}
                            onChange={e => handleChange('password', e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Role
                        <select
                            className="w-full p-2 border rounded"
                            value={user.role}
                            onChange={e => handleChange('role', e.target.value)}
                        >
                            <option value="Student">Student</option>
                            <option value="Teacher">Teacher</option>
                            <option value="Admin">Admin</option>
                        </select>
                    </label>
                    <label>
                        Active Status
                        <select
                            className="w-full p-2 border rounded"
                            value={user.isActive ? 'Active' : 'Inactive'}
                            onChange={e => handleChange('isActive', e.target.value === 'Active')}
                        >
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                        </select>
                    </label>
                </div>
                <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Submit</button>
            </form>
        </div>
    );
};

export default ManageUsersForm;
