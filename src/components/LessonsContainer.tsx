// components/LessonsContainer.tsx
'use client'
import React, { useState, useEffect } from 'react';
import LessonDetail, { Lesson } from './LessonDetail';

const LessonsContainer: React.FC = () => {
    const [lessons, setLessons] = useState<Lesson[]>([]);

    useEffect(() => {
        setLessons([
            {
                id: 1,
                title: "Cybersecurity for Everyone: Defining Cyber, Security, and Cybersecurity",
                duration: "3 hours to complete",
                videos: [
                    { title: "What is Cybersecurity?", duration: "8 mins", url: "https://www.youtube.com/embed/shQEXpUwaIY" },
                ],
                readings: [
                    { title: "Cybersecurity - Wikipedia", duration: "Read for 40 mins", url: "https://en.wikipedia.org/wiki/Cybersecurity" },
                ],
                quizzes: [
                    { title: "Week 1 Quiz", duration: "10 mins", url: "http://example.com/quiz1" }
                ]
            },
            {
                id: 2,
                title: "Cybersecurity for Everyone: The CIA Triad",
                duration: "2 hours to complete",
                videos: [
                    { title: "The CIA Triad", duration: "12 mins", url: "https://www.youtube.com/embed/d5bLPOYpDWw" },
                ],
                readings: [
                    { title: "The CIA Triad - Wikipedia", duration: "Read for 20 mins", url: "https://en.wikipedia.org/wiki/Information_security#CIA_Triad" },
                ],
                quizzes: [
                    { title: "Week 2 Quiz", duration: "10 mins", url: "http://example.com/quiz2" }
                ]

            },
            {
                id: 3,
                title: "Cybersecurity for Everyone: Common Cybersecurity Threats",
                duration: "2 hours to complete",
                videos: [
                    { title: "Common Cybersecurity Threats", duration: "15 mins", url: "https://www.youtube.com/embed/y6E_CxkLLw8" },
                ],
                readings: [
                    { title: "Common Cybersecurity Threats - Wikipedia", duration: "Read for 30 mins", url: "https://en.wikipedia.org/wiki/Computer_security#Common_threats" },
                ],
                quizzes: [
                    { title: "Week 3 Quiz", duration: "10 mins", url: "http://example.com/quiz3" }
                ]
            },
            
            // Additional weeks...
        ]);
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold text-center mb-4">Course Modules</h1>
            <div className="space-y-3">
                {lessons.map(lesson => (
                    <LessonDetail key={lesson.id} lesson={lesson} />
                ))}
            </div>
        </div>
    );
};

export default LessonsContainer;
