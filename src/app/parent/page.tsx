"use client";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type TabType = 'week' | 'month' | 'year';

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const, // Ensure this matches the allowed string literal
    },
    title: {
      display: true,
      text: 'Study Hours',
    },
  },
  scales: {
    x: {
      beginAtZero: true
    },
    y: {
      beginAtZero: true
    }
  }
};

const data = {
  week: {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    datasets: [{
      label: 'Study Hours',
      data: [2, 3, 4, 1, 5, 3, 4],
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  },
  month: {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [{
      label: 'Study Hours',
      data: [10, 15, 20, 12],
      borderColor: 'rgb(255, 99, 132)',
      tension: 0.1
    }]
  },
  year: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
      label: 'Study Hours',
      data: [120, 110, 150, 130, 180, 160, 170, 140, 190, 200, 220, 210],
      borderColor: 'rgb(54, 162, 235)',
      tension: 0.1
    }]
  }
};

export default function ParentControl() {
  const [activeTab, setActiveTab] = useState<TabType>('week');

  return (
    <main className="container mx-auto p-8">
      <div className="bg-white shadow rounded-lg p-6">
      <button
            onClick={() => setActiveTab('week')}
            className={`mr-6 py-2 font-semibold border-b-2 ${activeTab === 'week' ? 'border-green-500' : 'border-transparent'} hover:border-green-500 focus:outline-none`}
          >
            Theo tuần
          </button>
          <button
            onClick={() => setActiveTab('month')}
            className={`mr-6 py-2 font-semibold border-b-2 ${activeTab === 'month' ? 'border-green-500' : 'border-transparent'} hover:border-green-500 focus:outline-none`}
          >
            Theo tháng
          </button>
          <button
            onClick={() => setActiveTab('year')}
            className={`py-2 font-semibold border-b-2 ${activeTab === 'year' ? 'border-green-500' : 'border-transparent'} hover:border-green-500 focus:outline-none`}
          >
            Theo năm
          </button>
        <Line data={data[activeTab]} options={options} />
      </div>
    </main>
  );
}
