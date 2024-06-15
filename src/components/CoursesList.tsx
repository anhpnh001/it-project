
'use client'
import React, { useState, useEffect } from 'react';
import CourseItem from '@/app/mycourses/page'; // Ensure this import path is correct
export interface Course {
    id: number;
    title: string;
    description: string;
    categories: string[];
    price: number;
}


const CoursesList: React.FC = () => {
    const [courses, setCourses] = useState<Course[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchCourses();
    }, []);

    const fetchCourses = async () => {
        try {
            const response = await fetch('/api/courses');
            const { data } = await response.json();
            console.log('Fetched data:', data); 
            if (Array.isArray(data)) {
                setCourses(data);
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
        <div className="courses-list p-6 bg-gray-100">
            {courses.length > 0 ? (
                courses.map(course => (
                    <CourseItem key={course.id} course={course} />
                ))
            ) : (
                <p>No courses available.</p>
            )}
        </div>
    );
};

export default CoursesList;

