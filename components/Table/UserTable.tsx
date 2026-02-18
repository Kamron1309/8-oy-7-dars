'use client';

interface User {
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

interface UserTableProps {
  rows: User[];
}

const roleColors: Record<string, string> = {
  admin: "bg-red-100 text-red-800 border-red-300",
  manager: "bg-blue-100 text-blue-800 border-blue-300",
  student: "bg-green-100 text-green-800 border-green-300",
  teacher: "bg-yellow-100 text-yellow-800 border-yellow-300",
};

export default function UserTable({ rows }: UserTableProps) {
  if (!Array.isArray(rows)) {
    console.error("rows massiv emas:", rows);
    return (
      <div className="text-red-500 font-bold p-4">
        Xatolik: ma'lumot formati noto'g'ri
      </div>
    );
  }

  return (
    <div className="overflow-x-auto shadow-[0_5px_15px_rgba(0,0,0,0.1)] rounded-lg">
      <table className="min-w-[650px] w-full bg-white dark:bg-gray-900">
        <thead className="bg-gray-100 dark:bg-gray-800">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-bold text-gray-900 dark:text-white">
              Ism
            </th>
            <th className="px-6 py-3 text-left text-sm font-bold text-gray-900 dark:text-white">
              Familiya
            </th>
            <th className="px-6 py-3 text-left text-sm font-bold text-gray-900 dark:text-white">
              Email
            </th>
            <th className="px-6 py-3 text-left text-sm font-bold text-gray-900 dark:text-white">
              Rol
            </th>
            <th className="px-6 py-3 text-left text-sm font-bold text-gray-900 dark:text-white">
              Yoshi
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          {rows.length > 0 ? (
            rows.map((row) => (
              <tr
                key={row._id || row.id}
                className="hover:bg-gray-50 dark:hover:bg-gray-800 transition"
              >
                <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-300">
                  {row.first_name || row.name || "-"}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-300">
                  {row.last_name || "-"}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-300">
                  {row.email || "-"}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`
                      inline-block px-3 py-1 text-xs font-semibold rounded-full border
                      ${roleColors[row.role?.toLowerCase() || ""] || "bg-blue-100 text-blue-800 border-blue-300"}
                    `}
                  >
                    {row.role || "Noma'lum"}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-300">
                  {row.age || "-"}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={5}
                className="px-6 py-8 text-center text-gray-500 dark:text-gray-400"
              >
                Ma'lumot topilmadi 😢
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
