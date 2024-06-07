'use client'
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import dynamic from 'next/dynamic';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css'; // Import Quill styles

const AddCourseForm = () => {
    const [course, setCourse] = useState({
        fullName: '',
        shortName: '',
        category: '',
        visibility: 'Show',
        startDate: new Date(),
        endDate: new Date(),
        courseId: '',
        summary: '',
        price: 0, //
    });

    const handleChange = (name: any, value: any) => {
        setCourse(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="p-6 bg-white shadow-md rounded-lg">
            <div className="grid grid-cols-2 gap-6">
                <label>
                    Course full name
                    <input
                        type="text"
                        className="w-full p-2 border rounded"
                        value={course.fullName}
                        onChange={e => handleChange('fullName', e.target.value)}
                    />
                </label>
                <label>
                    Course short name
                    <input
                        type="text"
                        className="w-full p-2 border rounded"
                        value={course.shortName}
                        onChange={e => handleChange('shortName', e.target.value)}
                    />
                </label>
                <label>
                    Course category
                    <input
                        type="text"
                        className="w-full p-2 border rounded"
                        value={course.category}
                        onChange={e => handleChange('category', e.target.value)}
                    />
                </label>
                <label>
                    Course visibility
                    <select
                        className="w-full p-2 border rounded"
                        value={course.visibility}
                        onChange={e => handleChange('visibility', e.target.value)}
                    >
                        <option>Show</option>
                        <option>Hide</option>
                    </select>
                </label>
                <label>
                    Course start date
                    <DatePicker
                        selected={course.startDate}
                        onChange={date => handleChange('startDate', date)}
                        className="w-full p-2 border rounded"
                    />
                </label>
                <label>
                    Course end date
                    <DatePicker
                        selected={course.endDate}
                        onChange={date => handleChange('endDate', date)}
                        className="w-full p-2 border rounded"
                    />
                </label>
                <label>
                    Course ID number
                    <input
                        type="text"
                        className="w-full p-2 border rounded"
                        value={course.courseId}
                        onChange={e => handleChange('courseId', e.target.value)}
                    />
                </label>
                <label>
                    Course price (VND)
                    <input
                        type="number"
                        className="w-full p-2 border rounded"
                        value={course.price}
                        onChange={e => handleChange('price', parseFloat(e.target.value))}
                        placeholder="Enter course price"
                        min="0"  // Ensures non-negative values
                        step="any"  // Allows decimal values
                    />
                </label>
            </div>
            <div>
                <label>
                    Course summary
                    <ReactQuill
                        theme="snow"
                        value={course.summary}
                        onChange={value => handleChange('summary', value)}
                    />
                </label>
            </div>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Submit</button>
        </div>
    );
};

export default AddCourseForm;
