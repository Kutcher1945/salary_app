'use client';

export default function StatsCards() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {/* Customers */}
      <div className="bg-white p-4 rounded-2xl shadow flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">Customers</p>
          <p className="text-2xl font-semibold">78</p>
        </div>
        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
          <div className="text-green-600 text-lg">👥</div>
        </div>
      </div>

      {/* Deals */}
      <div className="bg-white p-4 rounded-2xl shadow flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">Deals</p>
          <p className="text-2xl font-semibold">136</p>
        </div>
        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
          <div className="text-red-600 text-lg">💼</div>
        </div>
      </div>
    </div>
  );
}
