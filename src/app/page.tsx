import DashboardLayout from '@/components/DashboardLayout';

export default function Home() {
  return (
    <DashboardLayout>
      <main className="p-6 text-white min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <div className="bg-white text-black p-6 rounded-xl shadow">
          📊 Welcome to your Salary Tracker Dashboard. Insights and stats coming soon.
        </div>
      </main>
    </DashboardLayout>
  );
}
