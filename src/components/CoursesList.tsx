'use client';
import React, { useState, useEffect } from 'react';
import CourseItem from '@/app/mycourses/page'; // Ensure this import path is correct
import { Course } from '@/app/mycourses/interface/page'; // Ensure this import path is correct

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
            const result = await response.json();
            console.log('Fetched data:', result);
            
            if (Array.isArray(result.data)) {
                setCourses(result.data);
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

    const handleDelete = async (id: string) => {
        try {
            const response = await fetch(`/api/courses/${id}/delete`, {
                method: 'DELETE',
            });
            const result = await response.json();
            if (response.ok) {
                setCourses(courses.filter(course => course.id !== id));
            } else {
                setError(result.error);
            }
        } catch (error: any) {
            setError(error.message);
        }
    };

    const handleUpdate = async (updatedCourse: Course) => {
        try {
            const response = await fetch(`/api/courses/${updatedCourse.id}/update`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedCourse),
            });
            const result = await response.json();
            if (response.ok) {
                setCourses(courses.map(course => (course.id === updatedCourse.id ? updatedCourse : course)));
            } else {
                setError(result.error);
            }
        } catch (error: any) {
            setError(error.message);
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
                    <CourseItem key={course.id} course={course} onDelete={handleDelete} onUpdate={handleUpdate} />
                ))
            ) : (
                <p>No courses available.</p>
            )}
        </div>
    );
};

export default CoursesList;
