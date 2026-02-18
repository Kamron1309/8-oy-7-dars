'use client';

import { useEffect, useState } from "react";
import ProtectedRoute from "@/components/ProtectedRoute";
import UserTable from "@/components/Table/UserTable";
import { getAllManagers } from "@/lib/services/adminService";

interface Manager {
  id: string;
  name: string;
  email: string;
  role: string;
  status: string;
  createdAt: string;
}

export default function ManagersPage() {
  const [rows, setRows] = useState<Manager[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchManagers = async () => {
      try {
        const res = await getAllManagers();
        console.log("Backenddan javob:", res);
        
        if (Array.isArray(res.data)) {
          setRows(res.data);
        } else if (Array.isArray(res.data?.data)) {
          setRows(res.data.data);
        } else {
          console.error("Backend noto'g'ri formatda", res);
          setRows([]);
        }
      } catch (err) {
        console.error("Managerlarni olishda xatolik bor", err);
      } finally {
        setLoading(false);
      }
    };

    fetchManagers();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-black">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
      </div>
    );
  }

  return (
    <ProtectedRoute>
      <div className="p-6 bg-black min-h-screen text-white">
        <h1 className="text-2xl font-bold mb-6 text-white">
          Menejerlani ro'yxati
        </h1>
        <UserTable rows={rows} />
      </div>
    </ProtectedRoute>
  );
}
