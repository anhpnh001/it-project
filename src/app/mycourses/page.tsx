import React from 'react';

interface CourseItemProps {
    course: {
        id: number;
        title: string;
        description: string;
        categories: string[];
        price: number;
    };
}

const CourseItem: React.FC<CourseItemProps> = ({ course }) => {
    return (
        <div className="course-item p-4 border rounded mb-4">
            <h2 className="text-xl font-bold">{course.title}</h2>
            <p className="text-gray-700">{course.description}</p>
            <p className="text-gray-500">Categories: {course.categories.join(', ')}</p>
            <p className="text-green-600">Price: {course.price} VND</p>
        </div>
    );
};

export default CourseItem;
