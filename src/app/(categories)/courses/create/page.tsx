'use client';
import React, { useState } from 'react';

interface CourseData {
  title: string;
  description: string;
  //categories: string;
  price: number;
}

const AddCourseForm: React.FC = () => {
  const [course, setCourse] = useState<CourseData>({
    title: '',
    description: '',
   // categories: '',
    price: 0,
  });

  const handleChange = (name: string, value: any) => {
    setCourse(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const courseData = {
      title: course.title,
      description: course.description,
      //categories: course.categories.split(',').map(category => category.trim()),
      price: course.price,
    };

    try {
      const response = await fetch('/api/courses/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(courseData),
      });

      const result = await response.json();
      if (response.ok) {
        alert('Course created successfully');
        setCourse({ title: '', description: '',  price: 0 }); // Reset form
      } else {
        alert(`Error: ${result.error}`);
      }
    } catch (error:any) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white shadow-md rounded-lg">
      <div className="grid grid-cols-1 gap-6">
        <label>
          Course Title
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={course.title}
            onChange={e => handleChange('title', e.target.value)}
          />
        </label>
        <label>
          Course Description
          <textarea
            className="w-full p-2 border rounded"
            value={course.description}
            onChange={e => handleChange('description', e.target.value)}
          />
        </label>
        {/* <label>
          Course Categories (comma-separated)
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={course.categories}
            onChange={e => handleChange('categories', e.target.value)}
          />
        </label> */}
        <label>
          Course Price (VND)
          <input
            type="number"
            className="w-full p-2 border rounded"
            value={course.price}
            onChange={e => handleChange('price', parseFloat(e.target.value))}
            placeholder="Enter course price"
            min="0"
            step="any"
          />
        </label>
      </div>
      <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
        Submit
      </button>
    </form>
  );
};

export default AddCourseForm;
