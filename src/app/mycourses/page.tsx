import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Course } from '@/app/mycourses/interface/page'; // Adjust the path as needed

interface CourseItemProps {
    course: Course;
    onDelete: (id: string) => void;
    onUpdate: (course: Course) => void;
}

const CourseItem: React.FC<CourseItemProps> = ({ course, onDelete, onUpdate }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [updatedCourse, setUpdatedCourse] = useState(course);

    const handleUpdateChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setUpdatedCourse({ ...updatedCourse, [name]: value });
    };

    const handleUpdateSubmit = (e: FormEvent) => {
        e.preventDefault();
        onUpdate(updatedCourse);
        setIsEditing(false);
    };

    return (
        <div className="course-item p-4 border rounded mb-4 bg-white shadow-md">
            {isEditing ? (
                <form onSubmit={handleUpdateSubmit}>
                    <input
                        type="text"
                        name="title"
                        value={updatedCourse.title}
                        onChange={handleUpdateChange}
                        className="w-full p-2 border rounded mb-2"
                    />
                    <textarea
                        name="description"
                        value={updatedCourse.description}
                        onChange={handleUpdateChange}
                        className="w-full p-2 border rounded mb-2"
                    />
                    <input
                        type="number"
                        name="price"
                        value={updatedCourse.price}
                        onChange={handleUpdateChange}
                        className="w-full p-2 border rounded mb-2"
                    />
                    <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
                        Save
                    </button>
                </form>
            ) : (
                <>
                    <h2 className="text-xl font-bold">{course.title}</h2>
                    <p className="text-gray-700">{course.description}</p>
                    <p className="text-green-600">Price: {course.price} VND</p>
                    <div className="flex space-x-2 mt-4">
                        <button
                            onClick={() => setIsEditing(true)}
                            className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-700"
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => onDelete(course.id)}
                            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
                        >
                            Delete
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default CourseItem;
