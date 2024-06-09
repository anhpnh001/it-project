// CoursesList.tsx
import React, { useState, useEffect } from 'react';
import CourseItem from '@/app/mycourses/page'; 
// models.ts
// models.ts
export interface Course {
    id: number;
    fullName: string;
    shortName: string;
    category: string;
    visibility: string;
    startDate: string;
    endDate: string;
    price: number;
    summary: string;
    completionPercentage: number; // New field for completion percentage
    isPurchased: boolean;         // Assuming we also track if the course has been purchased
}


// sampleCourses.ts
// import { Course } from './models';

export const sampleCourses: Course[] = [
    {
        id: 1,
        fullName: 'Introduction to Computer Science',
        shortName: 'CS101',
        category: 'Computer Science',
        visibility: 'Show',
        startDate: '2024-01-10',
        endDate: '2024-05-15',
        price: 500,
        summary: 'An introduction to the fundamental concepts of computer science, including programming, algorithms, and data structures.',
        completionPercentage: 45,  // Example percentage
        isPurchased: true
    },
    {
        id: 2,
        fullName: 'Advanced Mathematics',
        shortName: 'Math300',
        category: 'Mathematics',
        visibility: 'Show',
        startDate: '2024-02-20',
        endDate: '2024-06-20',
        price: 400,
        summary: 'A detailed course covering advanced topics in mathematics, including calculus, linear algebra, and differential equations.',
        completionPercentage: 100,
        isPurchased: true
    },
    {
        id: 3,
        fullName: 'Modern Art and Design',
        shortName: 'Art202',
        category: 'Art',
        visibility: 'Hide',
        startDate: '2024-03-15',
        endDate: '2024-07-30',
        price: 300,
        summary: 'Explore modern art movements and design principles, with a focus on practical application and history.',
        completionPercentage: 0,
        isPurchased: false
    }
];
const CoursesList: React.FC = () => {
    const [courses, setCourses] = useState<Course[]>([]);

    useEffect(() => {
        // Uncomment the following when ready to fetch real data
        /*
        fetch('/api/courses')
            .then(response => response.json())
            .then(data => setCourses(data))
            .catch(error => console.error('Error fetching courses:', error));
        */
        setCourses(sampleCourses); // Using static data for now
    }, []);

    return (
        <div className="courses-list">
            {courses.map(course => (
                <CourseItem key={course.id} course={course} />
            ))}
        </div>
    );
};

export default CoursesList;
