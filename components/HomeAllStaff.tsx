'use client';

import { useEffect, useState } from "react";
import axios from "axios";

interface Staff {
  id: string | number;
  name: string;
  role: string;
  status: string;
}

export default function HomeAllStaff() {
  const [staffList, setStaffList] = useState<Staff[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    async function fetchStaff() {
      try {
        setLoading(true);
        const res = await axios.get("/api/staff/all");
        const data: Staff[] = res.data?.data ?? res.data ?? [];
        if (mounted) setStaffList(data);
      } catch (err: any) {
        console.error("Staff fetch error:", err);
        if (mounted) setError(err?.message || "Xatolik yuz berdi");
      } finally {
        if (mounted) setLoading(false);
      }
    }

    fetchStaff();
    return () => {
      mounted = false;
    };
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <p className="text-red-600 text-center py-12">{error}</p>
    );
  }

  if (staffList.length === 0) {
    return (
      <p className="text-gray-600 text-center py-12">
        Hozircha ma'lumot mavjud emas
      </p>
    );
  }

  return (
    <div className="flex flex-wrap gap-4">
      {staffList.map((staff) => (
        <div
          key={staff.id}
          className="w-[250px] bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
        >
          <h3 className="text-lg font-semibold mb-2">{staff.name}</h3>
          <p className="text-sm text-gray-600">Rol: {staff.role}</p>
          <p className="text-sm text-gray-600">Status: {staff.status}</p>
        </div>
      ))}
    </div>
  );
}
