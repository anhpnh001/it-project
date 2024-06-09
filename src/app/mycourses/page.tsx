import React from 'react';
import Link from 'next/link';

interface Course {
    id: number;
    fullName: string;
    shortName: string;
    category: string;
    visibility: string;
    startDate: string;
    endDate: string;
    price: number;
    summary: string;
    completionPercentage: number;
    isPurchased: boolean;
}

const CourseItem: React.FC<{ course: Course }> = ({ course }) => {
    return (
        <div className="bg-white p-4 shadow-sm rounded-lg mb-4 flex justify-between items-center">
        <div className="flex-grow">
            <h2 className="text-lg font-semibold text-gray-900">{course.fullName} ({course.shortName})</h2>
            <p className="text-sm text-gray-500">{course.category} - {course.visibility}</p>
            <div className="text-xs text-gray-600">
                <span>Start: {course.startDate}</span> | 
                <span>End: {course.endDate}</span>
            </div>
            <p className="text-sm text-gray-700">Price: {course.price.toLocaleString()} VND</p>
            <p className="text-sm text-gray-500">{course.summary}</p>
            
            {/* Progress bar */}
            <div className="w-full bg-gray-200 rounded-full h-1 my-2">
                <div className="bg-blue-600 h-1 rounded-full" style={{ width: `${course.completionPercentage}%` }}></div>
            </div>
        </div>
        
        {course.isPurchased ? (
                course.completionPercentage < 100 ? (
                    <Link href="/lesson">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Continue
                        </button>
                    </Link>
                ) : (
                    <Link href="/lesson">
                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Done
                        </button>
                    </Link>
                )
            ) : (
                <Link href="/purchase">
                    <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Enroll
                    </button>
                </Link>
            )}
    </div>
    );
};

export default CourseItem;
