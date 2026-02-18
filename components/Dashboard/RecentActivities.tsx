const recentActivities = [
  "✅ Yangi student qo'shildi",
  "💰 To'lov qabul qilindi",
  "👥 Yangi guruh ochildi",
  "📚 Yangi kurs yaratildi",
];

export default function RecentActivities() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md">
      <h2 className="text-xl font-bold mb-4">🕒 So'nggi faoliyatlar</h2>
      <ul className="space-y-2">
        {recentActivities.map((activity, idx) => (
          <li
            key={idx}
            className="py-2 px-3 hover:bg-gray-50 rounded-lg transition"
          >
            {activity}
          </li>
        ))}
      </ul>
    </div>
  );
}
