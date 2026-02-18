'use client';

import React, { useEffect, useState } from "react";
import ProtectedRoute from "@/components/ProtectedRoute";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import { useAuth } from "@/context/AuthContext";
import Image from "next/image";

interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  avatar?: string;
  createdAt?: string;
}

export default function ProfilePage() {
  const { user } = useAuth();
  const [formData, setFormData] = useState<UserProfile>({
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    avatar: "",
    createdAt: "",
  });
  const [avatar, setAvatar] = useState<string | undefined>();
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("userProfile");
    if (savedUser) {
      const userData = JSON.parse(savedUser);
      setFormData(userData);
      setAvatar(userData.avatar);
    } else if (user) {
      const userData = {
        firstName: user.firstName || user.name || "Ism",
        lastName: user.lastName || "",
        email: user.email || "",
        role: user.role || "Admin",
        avatar: user.avatar,
        createdAt: user.createdAt || new Date().toISOString(),
      };
      setFormData(userData);
      setAvatar(user.avatar);
    } else {
      const mockUser = {
        firstName: "Otabek",
        lastName: "Makhamatov",
        email: "otabek@example.com",
        role: "Admin",
        createdAt: new Date().toISOString(),
      };
      setFormData(mockUser);
    }
  }, [user]);

  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setAvatar(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      ...formData,
      avatar,
      createdAt: formData.createdAt || new Date().toISOString(),
    };
    localStorage.setItem("userProfile", JSON.stringify(data));
    setMessage({ type: 'success', text: 'Profil muvaffaqiyatli saqlandi' });
    setTimeout(() => setMessage(null), 3000);
  };

  const handlePasswordChange = () => {
    setMessage({ type: 'success', text: "Parolni o'zgartirish" });
    setTimeout(() => setMessage(null), 3000);
  };

  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 flex justify-center">
          <div className="w-full max-w-lg bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
            {/* Avatar section */}
            <div className="text-center mb-6">
              <div className="relative inline-block">
                <div className="w-24 h-24 rounded-full overflow-hidden bg-blue-600 flex items-center justify-center text-white text-3xl font-bold mx-auto">
                  {avatar ? (
                    <Image
                      src={avatar}
                      alt="Avatar"
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <span>{formData.firstName?.[0] || "U"}</span>
                  )}
                </div>
              </div>
              
              <label className="inline-block mt-3 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-600 transition">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarUpload}
                  className="hidden"
                />
                📷 Rasmni o'zgartirish
              </label>
            </div>

            <h2 className="text-2xl font-bold text-center mb-2 text-gray-900 dark:text-white">
              Profil ma'lumotlari
            </h2>
            <p className="text-center text-gray-500 dark:text-gray-400 mb-6">
              Shaxsiy ma'lumotlaringizni tahrirlang
            </p>

            {/* Message */}
            {message && (
              <div
                className={`mb-4 p-3 rounded-lg ${
                  message.type === 'success'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {message.text}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Ism <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Familiya <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  disabled
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Rol
                </label>
                <input
                  type="text"
                  value={formData.role}
                  disabled
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition mb-3 flex items-center justify-center gap-2"
              >
                💾 Saqlash
              </button>

              <button
                type="button"
                onClick={handlePasswordChange}
                className="w-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-3 rounded-lg font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition flex items-center justify-center gap-2"
              >
                🔒 Parolni o'zgartirish
              </button>
            </form>
          </div>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}
