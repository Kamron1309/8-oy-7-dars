'use client';

import { useEffect, useState } from "react";
import ProtectedRoute from "@/components/ProtectedRoute";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import UserTable from "@/components/Table/UserTable";
import { getAllTeachers } from "@/lib/services/teacherService";

interface Teacher {
  _id?: string;
  id?: string;
  first_name?: string;
  last_name?: string;
  name?: string;
  email?: string;
  role?: string;
  status?: string;
  age?: number;
  subject?: string;
  createdAt?: string;
}

export default function TeachersPage() {
  const [rows, setRows] = useState<Teacher[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const res = await getAllTeachers();
        console.log("O'qituvchilar:", res);
        
        if (Array.isArray(res.data)) {
          setRows(res.data);
        } else if (Array.isArray(res.data?.data)) {
          setRows(res.data.data);
        } else {
          console.error("Backend noto'g'ri formatda keldi", res);
          setRows([]);
        }
      } catch (err) {
        console.error("O'qituvchilarni olishda xato bor", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTeachers();
  }, []);

  if (loading) {
    return (
      <ProtectedRoute>
        <DashboardLayout>
          <div className="flex justify-center mt-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
          </div>
        </DashboardLayout>
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            O'qituvchilar ro'yxati
          </h1>
          <UserTable rows={rows} />
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}
