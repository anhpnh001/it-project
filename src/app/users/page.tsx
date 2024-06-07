'use client';
import React, { useState } from 'react';

const ManageUsersForm = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        role: 'Student',  // Default role, you can adjust as needed
        isActive: true,
    });

    const handleChange = (name: string, value: any) => {
        setUser(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="p-6 bg-white shadow-md rounded-lg">
            <div className="grid grid-cols-2 gap-6">
                <label>
                    User Name
                    <input
                        type="text"
                        className="w-full p-2 border rounded"
                        value={user.name}
                        onChange={e => handleChange('name', e.target.value)}
                    />
                </label>
                <label>
                    Email Address
                    <input
                        type="email"
                        className="w-full p-2 border rounded"
                        value={user.email}
                        onChange={e => handleChange('email', e.target.value)}
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
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Submit</button>
        </div>
    );
};

export default ManageUsersForm;
