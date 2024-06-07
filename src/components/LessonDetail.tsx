// components/LessonDetail.tsx
'use client'
import React, { useState } from 'react';

export interface Video {
    title: string;
    duration: string;
    url: string;  // This will be the YouTube embed link
}

export interface Reading {
    title: string;
    duration: string;
    url: string;  // Link to Wikipedia or other resources
}

export interface Quiz {
    title: string;
    duration: string;
    url: string;
}

export interface Lesson {
    id: number;
    title: string;
    duration: string;
    videos: Video[];
    readings: Reading[];
    quizzes: Quiz[];
}

interface LessonDetailProps {
    lesson: Lesson;
}

const LessonDetail: React.FC<LessonDetailProps> = ({ lesson }) => {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div className="p-4 shadow rounded-lg bg-white">
            <h2 className="text-xl font-semibold">{lesson.title} (Week {lesson.id})</h2>
            <button onClick={() => setShowDetails(!showDetails)} className="text-blue-600 hover:text-blue-800">
                {showDetails ? 'Hide' : 'Show'} info about module content
            </button>
            <div className="text-sm text-gray-500">{lesson.duration}</div>
            {showDetails && (
                <div>
                    <h3 className="text-lg font-semibold">Videos</h3>
                    <ul>
                        {lesson.videos.map((video, index) => (
                            <li key={index}>
                                <iframe src={video.url} title={video.title} sandbox="allow-scripts allow-same-origin allow-popups allow-forms" allowFullScreen className="w-full h-64"></iframe>
                                <div>{video.title} - {video.duration}</div>
                            </li>
                        ))}
                    </ul>
                    <h3 className="text-lg font-semibold">Readings</h3>
                    <ul>
                        {lesson.readings.map((reading, index) => (
                            <li key={index}>
                                <a href={reading.url} target="_blank" rel="noopener noreferrer">{reading.title} - {reading.duration}</a>
                            </li>
                        ))}
                    </ul>
                    <h3 className="text-lg font-semibold">Quizzes</h3>
                    <ul>
                        {lesson.quizzes.map((quiz, index) => (
                            <li key={index}>
                                <a href={quiz.url} target="_blank" rel="noopener noreferrer">{quiz.title} - {quiz.duration}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default LessonDetail;
