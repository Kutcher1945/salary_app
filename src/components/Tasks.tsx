'use client';

const tasks = [
  { date: '30 Nov 2021', title: 'Meeting with partners', urgent: true },
  { date: '24 Dec 2021', title: 'Web conference agenda', urgent: true },
  { date: '24 Oct 2022', title: 'Lunch with Steve' },
  { date: '24 Nov 2022', title: 'Meeting with partners' },
  { date: '24 Nov 2022', title: 'Weekly meeting' },
  { date: '24 Nov 2022', title: 'Add new services' },
];

export default function Tasks() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-700">Tasks To Do</h3>
        <button className="text-sm text-blue-600 hover:underline">View All</button>
      </div>

      <ul className="space-y-3 text-sm">
        {tasks.map((task, idx) => (
          <li key={idx} className="flex justify-between items-center">
            <span className={`text-sm ${task.urgent ? 'text-red-500 font-semibold' : 'text-gray-500'}`}>
              {task.date}
            </span>
            <span className="text-gray-700">{task.title}</span>
          </li>
        ))}
      </ul>

      <button className="mt-4 w-full text-sm text-blue-600 flex items-center justify-center gap-1 hover:underline">
        ➕ Add new task
      </button>
    </div>
  );
}
