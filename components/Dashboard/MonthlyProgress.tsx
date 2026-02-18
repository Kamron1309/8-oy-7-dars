export default function MonthlyProgress() {
  const progress = 90;

  return (
    <div className="bg-white rounded-2xl p-6 shadow-md h-full">
      <h2 className="text-xl font-bold mb-4">🎯 Oylik Reja</h2>
      <p className="text-sm text-gray-600 mb-4">
        Hozirda reja {progress}% bajarildi
      </p>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          className="bg-blue-600 h-full rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}
