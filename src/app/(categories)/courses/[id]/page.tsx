'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { buttonVariants } from '@/components/ui/button';
import toast from 'react-hot-toast';

interface CourseProps {
  params: {
    id: string;
  };
}

interface CourseData {
  title: string;
  description: string;
  categories: string[];
  price: number;
}

const CourseComponent: React.FC<CourseProps> = ({ params }) => {
  const [course, setCourse] = useState<CourseData>({
    title: '',
    description: '',
    categories: [],
    price: 0,
  });

  useEffect(() => {
    fetchCourse();
  }, []);

  async function fetchCourse() {
    try {
      const response = await fetch(`/api/courses/${params.id}`);
      const data = await response.json();
      setCourse(data);
    } catch (error) {
      toast.error('Failed to fetch course');
    }
  }

  function checkCourse() {
    // Custom logic to check the course can be added here
    toast.success('Course data fetched successfully!');
  }

  return (
    <main className="flex container">
      <div className="w-2/3 border p-6">
        <form
          className="form flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            checkCourse();
          }}
        >
          <div className="form-group">
            <h1 id="title" className="w-full px-4 py-2 border">
              {course.title}
            </h1>
          </div>
          <div className="form-group">
            <p id="description" className="w-full px-4 py-2 border h-48">
              {course.description}
            </p>
          </div>
          <div className="form-group">
            <p id="categories" className="w-full px-4 py-2 border h-48">
              Categories: {course.categories.join(', ')}
            </p>
          </div>
          <div className="form-group">
            <p id="price" className="w-full px-4 py-2 border h-48">
              Price: {course.price} VND
            </p>
          </div>
          <button
            type="submit"
            className={buttonVariants({ variant: 'default' })}
          >
            Check
          </button>
        </form>
      </div>
    </main>
  );
};

export default CourseComponent;
