// components/LessonsContainer.tsx
'use client'
import React, { useState, useEffect } from 'react'
import LessonDetail, { Lesson } from './LessonDetail'

const LessonsContainer: React.FC = () => {
  const [lessons, setLessons] = useState<Lesson[]>([])

  useEffect(() => {

    fetchExercise()
  }, [])

  async function fetchExercise() {
    const response = await fetch('/api/exercises')
    const { data } = await response.json()
    setLessons(data)
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Course Modules</h1>
      <div className="space-y-3">
        {lessons.map((lesson) => (
          <LessonDetail key={lesson.id} lesson={lesson} />
        ))}
      </div>
    </div>
  )
}

export default LessonsContainer
