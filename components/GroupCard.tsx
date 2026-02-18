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

interface GroupCardProps {
  group: Group;
  mode: "light" | "dark";
}

export default function GroupCard({ group, mode }: GroupCardProps) {
  const isOngoing = !group.endTime || new Date(group.endTime) > new Date();

  return (
    <div
      className={`
        ${mode === "dark" ? "bg-[#1e1e1e] text-white" : "bg-white text-black"}
        rounded-2xl shadow-[0_5px_15px_rgba(0,0,0,0.1)]
        hover:translate-y-[-3px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)]
        transition-all duration-300 ease-in-out
        relative
      `}
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold">
            {group.title || "Noma'lum guruh"}
          </h3>
          <button className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition">
            <svg
              className={`w-6 h-6 ${mode === "dark" ? "text-white" : "text-black"}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
            </svg>
          </button>
        </div>

        {/* Info */}
        <p className="text-sm mb-1">
          Ustoz: {group.teacher?.fullName || "Belgilanmagan"}
        </p>
        <p className="text-sm mb-1">
          O'quvchilar: {group.studentCount ?? 0}
        </p>
        <p className="text-sm mb-1">
          Boshlangan:{" "}
          {group.startTime
            ? new Date(group.startTime).toLocaleString()
            : "-"}
        </p>
        <p className="text-sm mb-3">
          Tugagan:{" "}
          {group.endTime
            ? new Date(group.endTime).toLocaleString()
            : "Davom etmoqda"}
        </p>

        {/* Status Badge */}
        <span
          className={`
            inline-block px-3 py-1 text-xs font-medium rounded-full
            ${
              isOngoing
                ? "bg-green-100 text-green-800"
                : "bg-gray-100 text-gray-800"
            }
          `}
        >
          {isOngoing ? "Davom etmoqda" : "Tugatildi"}
        </span>

        {/* Action Buttons */}
        <div className="flex justify-end gap-2 mt-4">
          <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </button>
          <button className="p-2 text-red-600 hover:bg-red-50 rounded-full transition">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
