'use client';

const customers = [
  { name: 'Deanna Annis', email: 'deannaannis@gmail.com' },
  { name: 'Andrea Willis', email: 'andreawillis@gmail.com', avatar: '/avatar2.jpg' },
  { name: 'Brent Rodrigues', email: 'brodrigues@gmail.com', avatar: '/avatar3.jpg' },
];

export default function Customers() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-700">Customers</h3>
        <button className="text-sm text-blue-600 hover:underline">View All</button>
      </div>

      <ul className="space-y-4">
        {customers.map((user, i) => (
          <li key={i} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gray-300 rounded-full" />
              <div>
                <p className="font-medium text-gray-800">{user.name}</p>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
            </div>
            <button className="text-gray-400 hover:text-blue-600">
              ✏️
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
