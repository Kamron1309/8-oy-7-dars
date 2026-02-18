'use client';

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";

interface Course {
  id: string | number;
  title: string;
  description?: string;
  thumbnail?: string;
  studentsCount?: number;
  startDate?: string;
}

type Props = {
  apiUrl?: string;
  useAxiosClient?: boolean;
};

export default function CourseCardsFlex({ 
  apiUrl = "/api/courses", 
  useAxiosClient = false 
}: Props) {
  const [courses, setCourses] = useState<Course[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    async function fetchCourses() {
      setLoading(true);
      setError(null);
      try {
        const client = useAxiosClient 
          ? (await import("../lib/axiosClient")).default 
          : axios;
        const res = await client.get(apiUrl);
        const payload = res.data && Array.isArray(res.data) 
          ? res.data 
          : res.data?.data ?? [];
        if (mounted) setCourses(payload);
      } catch (err: any) {
        if (mounted) setError(err?.message || "Kurslarni yuklashda xatolik bor");
      } finally {
        if (mounted) setLoading(false);
      }
    }

    fetchCourses();
    return () => {
      mounted = false;
    };
  }, [apiUrl, useAxiosClient]);

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-semibold mb-2">Xatolik</h3>
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  if (!courses || courses.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-semibold text-gray-600">Kurslar mavjud emas</h3>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-6 justify-start">
      {courses.map((c) => (
        <div
          key={c.id}
          className="w-[300px] flex flex-col bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow"
        >
          {c.thumbnail ? (
            <div className="relative h-40 w-full">
              <Image
                src={c.thumbnail}
                alt={c.title}
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
          ) : (
            <div className="h-40 flex items-center justify-center bg-gray-100 rounded-t-lg">
              <p className="text-gray-500">Surat mavjud emas</p>
            </div>
          )}

          <div className="flex-grow p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-base font-semibold">{c.title}</h3>
              {c.startDate && (
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full whitespace-nowrap ml-2">
                  {new Date(c.startDate).toLocaleDateString()}
                </span>
              )}
            </div>

            <p className="text-sm text-gray-600 mb-2 min-h-[48px]">
              {c.description
                ? c.description.length > 140
                  ? c.description.slice(0, 137) + "..."
                  : c.description
                : "Kurs haqida ma'lumot yo'q"}
            </p>

            <p className="text-xs text-gray-500">
              {typeof c.studentsCount === "number"
                ? `${c.studentsCount} o'quvchi`
                : "O'quvchilar soni mavjud emas"}
            </p>
          </div>

          <div className="flex justify-between items-center px-4 pb-4">
            <Link
              href={`/courses/${c.id}`}
              className="text-sm text-blue-600 hover:text-blue-800 font-medium"
            >
              Batafsil
            </Link>
            <button
              onClick={() => window.open(`/courses/${c.id}`, "_blank")}
              className="p-2 hover:bg-gray-100 rounded-full transition"
              aria-label="open"
            >
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
