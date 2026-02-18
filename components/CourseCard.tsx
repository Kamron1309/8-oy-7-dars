interface Course {
  id?: string | number;
  name?: string;
  field?: string;
  price?: number;
  is_freeze?: boolean;
}

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  const isFrozen = course.is_freeze;

  return (
    <div
      className={`
        p-6 w-[270px] rounded-2xl text-gray-200
        ${
          isFrozen
            ? 'bg-gradient-to-br from-[#1F2933] to-[#111827]'
            : 'bg-gradient-to-br from-[#0F172A] to-[#1E293B]'
        }
        shadow-[0_10px_30px_rgba(0,0,0,0.6)]
        transition-all duration-300 ease-in-out
        hover:translate-y-[-8px] hover:scale-[1.02]
        hover:shadow-[0_20px_45px_rgba(0,0,0,0.8)]
      `}
    >
      {/* STATUS */}
      <div className="flex justify-end mb-2">
        <span
          className={`
            px-3 py-1 text-xs font-semibold rounded-full border
            ${
              isFrozen
                ? 'text-[#FBBF24] bg-[rgba(251,191,36,0.15)] border-[#FBBF24]'
                : 'text-[#22C55E] bg-[rgba(34,197,94,0.15)] border-[#22C55E]'
            }
          `}
        >
          {isFrozen ? 'Muzlatilgan' : 'Aktiv'}
        </span>
      </div>

      {/* TITLE */}
      <h3 className="text-xl font-bold mb-2 text-[#F9FAFB] tracking-wide">
        {course.name || "Noma'lum kurs"}
      </h3>

      {/* INFO */}
      <p className="text-sm text-[#9CA3AF] mb-1">
        Yo'nalish:{' '}
        <span className="text-[#E5E7EB] font-medium">
          {course.field || '-'}
        </span>
      </p>

      <p className="text-sm text-[#9CA3AF]">
        Narxi:{' '}
        <span className="text-[#E5E7EB] font-medium">
          {course.price ? `${course.price} so'm` : "Noma'lum"}
        </span>
      </p>
    </div>
  );
}
