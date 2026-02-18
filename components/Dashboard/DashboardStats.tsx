const stats = [
  { title: "Jami Studentlar", value: "1,450", icon: "🎓" },
  { title: "Faol Kurslar", value: "25", icon: "📚" },
  { title: "Oylik Daromad", value: "15.5 mln", icon: "💰" },
  { title: "Faol Guruhlar", value: "30", icon: "👥" },
];

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6">
      {stats.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition"
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-600 mb-1">{item.title}</p>
              <h3 className="text-2xl font-bold">{item.value}</h3>
            </div>
            <span className="text-5xl">{item.icon}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
