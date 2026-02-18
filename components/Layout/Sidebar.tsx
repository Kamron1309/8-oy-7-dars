'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  {
    section: "Menu",
    items: [
      { text: "Asosiy", icon: "🏠", path: "/" },
      { text: "Dashboard", icon: "📊", path: "/dashboard" },
      { text: "Menegerlar", icon: "👨‍💼", path: "/managers" },
      { text: "Adminlar", icon: "👤", path: "/admins" },
      { text: "Ustozlar", icon: "👨‍🏫", path: "/teachers" },
      { text: "Studentlar", icon: "🎓", path: "/students" },
      { text: "Guruhlar", icon: "👥", path: "/groups" },
      { text: "Kurslar", icon: "📚", path: "/courses" },
      { text: "Payment", icon: "💰", path: "/payments" },
    ],
  },
  {
    section: "Boshqalar",
    items: [
      { text: "Sozlamalar", icon: "⚙️", path: "/settings" },
      { text: "Profile", icon: "👤", path: "/profile" },
      { text: "Chiqish", icon: "🚪", path: "/logout" },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-[300px] bg-black text-white min-h-screen p-5 border-r border-gray-800 flex-shrink-0">
      {/* Logo/Title */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-center mb-6">Admin CRM</h1>
      </div>

      {/* Menu Sections */}
      {menuItems.map((section) => (
        <div key={section.section} className="mb-6">
          {/* Section Title */}
          <h2 className="px-2 pt-2 pb-2 font-bold uppercase text-xs text-gray-400">
            {section.section}
          </h2>

          {/* Menu Items */}
          <nav>
            <ul className="space-y-1">
              {section.items.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <li key={item.text}>
                    <Link
                      href={item.path}
                      className={`
                        flex items-center gap-5 px-4 py-3 rounded-lg transition-all
                        ${
                          isActive
                            ? "bg-[#222] text-white"
                            : "text-gray-300 hover:bg-[#111]"
                        }
                      `}
                    >
                      <span className="text-xl">{item.icon}</span>
                      <span className="font-medium">{item.text}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Divider */}
          <div className="mt-4 border-t border-gray-800"></div>
        </div>
      ))}
    </aside>
  );
}
