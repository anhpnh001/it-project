// pages/index.tsx
'use client'
import type { NextPage } from 'next';
import LessonsContainer from '@/components/LessonsContainer';

const Home: NextPage = () => {
    return (
        <div>
            <LessonsContainer />
        </div>
    );
};

export default Home;
