'use client';

import ProtectedRoute from "@/components/ProtectedRoute";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import { useThemeMode } from "@/context/ThemeContext";
import { useState } from "react";

export default function SettingsPage() {
  const { mode, toggleTheme } = useThemeMode();
  const [notifications, setNotifications] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [language, setLanguage] = useState("uz");
  const [message, setMessage] = useState<string | null>(null);

  const handleSave = () => {
    const settings = {
      theme: mode,
      notifications,
      emailNotifications,
      language,
    };
    localStorage.setItem("appSettings", JSON.stringify(settings));
    setMessage("Sozlamalar saqlandi");
    setTimeout(() => setMessage(null), 3000);
  };

  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div className="max-w-4xl">
          <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
            ⚙️ Sozlamalar
          </h1>

          {message && (
            <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg">
              {message}
            </div>
          )}

          {/* Theme Settings */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Ko'rinish
            </h2>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900 dark:text-white">
                  Qorong'u rejim
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Interfeys rangini o'zgartirish
                </p>
              </div>
              <button
                onClick={toggleTheme}
                className={`
                  relative inline-flex h-8 w-14 items-center rounded-full transition-colors
                  ${mode === 'dark' ? 'bg-blue-600' : 'bg-gray-300'}
                `}
              >
                <span
                  className={`
                    inline-block h-6 w-6 transform rounded-full bg-white transition-transform
                    ${mode === 'dark' ? 'translate-x-7' : 'translate-x-1'}
                  `}
                />
              </button>
            </div>
          </div>

          {/* Notification Settings */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Bildirishnomalar
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    Push bildirishnomalar
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Tizim bildirishnomalarini olish
                  </p>
                </div>
                <button
                  onClick={() => setNotifications(!notifications)}
                  className={`
                    relative inline-flex h-8 w-14 items-center rounded-full transition-colors
                    ${notifications ? 'bg-blue-600' : 'bg-gray-300'}
                  `}
                >
                  <span
                    className={`
                      inline-block h-6 w-6 transform rounded-full bg-white transition-transform
                      ${notifications ? 'translate-x-7' : 'translate-x-1'}
                    `}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    Email bildirishnomalar
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Emailga xabar olish
                  </p>
                </div>
                <button
                  onClick={() => setEmailNotifications(!emailNotifications)}
                  className={`
                    relative inline-flex h-8 w-14 items-center rounded-full transition-colors
                    ${emailNotifications ? 'bg-blue-600' : 'bg-gray-300'}
                  `}
                >
                  <span
                    className={`
                      inline-block h-6 w-6 transform rounded-full bg-white transition-transform
                      ${emailNotifications ? 'translate-x-7' : 'translate-x-1'}
                    `}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Language Settings */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Til
            </h2>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option value="uz">O'zbekcha</option>
              <option value="ru">Русский</option>
              <option value="en">English</option>
            </select>
          </div>

          {/* System Info */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Tizim ma'lumotlari
            </h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">Versiya:</span>
                <span className="font-medium text-gray-900 dark:text-white">1.0.0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">Platforma:</span>
                <span className="font-medium text-gray-900 dark:text-white">Next.js 14</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">Oxirgi yangilanish:</span>
                <span className="font-medium text-gray-900 dark:text-white">
                  {new Date().toLocaleDateString('uz-UZ')}
                </span>
              </div>
            </div>
          </div>

          {/* Save Button */}
          <button
            onClick={handleSave}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            💾 Sozlamalarni saqlash
          </button>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}
