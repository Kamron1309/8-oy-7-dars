'use client';

import React, { useEffect, useState } from "react";
import ProtectedRoute from "@/components/ProtectedRoute";
import { getAllGroups } from "@/lib/services/groupService";
import { useThemeMode } from "@/context/ThemeContext";
import GroupCard from "@/components/GroupCard";

interface Group {
  id: string;
  title?: string;
  teacher?: {
    fullName?: string;
  };
  studentCount?: number;
  startTime?: string;
  endTime?: string;
}

export default function GroupsPage() {
  const [groups, setGroups] = useState<Group[]>([]);
  const [loading, setLoading] = useState(true);
  const { mode } = useThemeMode();

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const res = await getAllGroups();
        setGroups(res?.data || []);
      } catch (err) {
        console.error("Guruhlarni olishda xatolik:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchGroups();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center mt-20">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
      </div>
    );
  }

  return (
    <ProtectedRoute>
      <div className="p-8">
        <h1
          className={`text-4xl font-bold mb-8 ${
            mode === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          📚 Guruhlar ro'yxati
        </h1>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6">
          {groups.map((group) => (
            <GroupCard key={group.id} group={group} mode={mode} />
          ))}
        </div>
      </div>
    </ProtectedRoute>
  );
}
