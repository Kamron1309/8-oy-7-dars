'use client';

import { useEffect, useState } from "react";
import ProtectedRoute from "@/components/ProtectedRoute";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import UserTable from "@/components/Table/UserTable";
import { getAllStudents } from "@/lib/services/studentService";

interface Student {
  _id?: string;
  id?: string;
  first_name?: string;
  last_name?: string;
  name?: string;
  email?: string;
  role?: string;
  status?: string;
  age?: number;
  createdAt?: string;
}

export default function StudentsPage() {
  const [rows, setRows] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await getAllStudents();
        console.log("O'quvchilar:", res);
        
        if (Array.isArray(res.data)) {
          setRows(res.data);
        } else if (Array.isArray(res.data?.data)) {
          setRows(res.data.data);
        } else {
          console.error("Backend noto'g'ri formatda keldi", res);
          setRows([]);
        }
      } catch (err) {
        console.error("O'quvchilarni olishda xato bor", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
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
            O'quvchilar ro'yxati
          </h1>
          <UserTable rows={rows} />
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}
