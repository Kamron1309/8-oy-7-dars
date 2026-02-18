'use client';

import { useAuth } from "@/context/AuthContext";
import { useThemeMode } from "@/context/ThemeContext";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import Image from "next/image";

export default function Navbar() {
  const { user } = useAuth();
  const { mode, toggleTheme } = useThemeMode();
  const pathname = usePathname();

  const pageTitle = useMemo(() => {
    const map: Record<string, string> = {
      "/": "Asosiy",
      "/dashboard": "Dashboard",
      "/managers": "Menejerlari",
      "/admins": "Adminlar",
      "/teachers": "O'qituvchilar",
      "/students": "O'quvchilar",
      "/groups": "Guruhlar",
      "/courses": "Kurslar",
      "/payments": "To'lovlar",
      "/settings": "Sozlamalar",
      "/profile": "Profil",
      "/logout": "Chiqish",
    };
    return map[pathname] || "Sahifa";
  }, [pathname]);

  // Get user data from localStorage or context
  const userProfile = useMemo(() => {
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem("userProfile");
        return stored ? JSON.parse(stored) : user || {};
      } catch {
        return user || {};
      }
    }
    return user || {};
  }, [user]);

  return (
    <nav
      className="
        sticky top-0 z-10
        backdrop-blur-md bg-white/80 dark:bg-gray-800/80
        border-b border-gray-200 dark:border-gray-700
        px-8 py-4
      "
    >
      <div className="flex justify-between items-center">
        {/* Page Title */}
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          {pageTitle}
        </h1>

        {/* Right Side: User Info + Theme Toggle */}
        <div className="flex items-center gap-4">
          {/* User Info */}
          <div className="flex items-center gap-3">
            {/* Avatar */}
            <div className="relative w-10 h-10 rounded-full overflow-hidden bg-blue-600 flex items-center justify-center text-white font-bold">
              {userProfile.avatar ? (
                <Image
                  src={userProfile.avatar}
                  alt="User avatar"
                  fill
                  className="object-cover"
                />
              ) : (
                <span>
                  {(userProfile.firstName || userProfile.name || userProfile.email || "U")[0].toUpperCase()}
                </span>
              )}
            </div>

            {/* User Details */}
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                {userProfile.firstName || userProfile.name || "Ism"}{" "}
                {userProfile.lastName || ""}
              </p>
              <p className={`text-xs ${mode === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                {userProfile.email || "Email"}
              </p>
            </div>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            aria-label="Toggle theme"
          >
            {mode === "dark" ? (
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
