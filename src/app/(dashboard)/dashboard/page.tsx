import SalesLineChart from '@/components/SalesLineChart';
import CommissionsBarChart from '@/components/CommissionsBarChart';
import SalesBySellerBarChart from '@/components/SalesBySellerBarChart';
import CommissionStatusPie from '@/components/CommissionStatusPie';
import CategorySalesPieChart from '@/components/CategorySalesPieChart';
import SalesVsTargetGauge from '@/components/SalesVsTargetGauge';

export default function DashboardPage() {
  return (
    <main className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">📊 Analytics Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Row 1 */}
        <div className="bg-white p-4 rounded-xl shadow text-black">
          <h2 className="text-lg font-semibold mb-2">Sales (Last 30 Days)</h2>
          <SalesLineChart />
        </div>

        <div className="bg-white p-4 rounded-xl shadow text-black">
          <h2 className="text-lg font-semibold mb-2">Commissions (Weekly)</h2>
          <CommissionsBarChart />
        </div>

        {/* Row 2 */}
        <div className="bg-white p-4 rounded-xl shadow text-black">
          <h2 className="text-lg font-semibold mb-2">Sales by Seller</h2>
          <SalesBySellerBarChart />
        </div>

        <div className="bg-white p-4 rounded-xl shadow text-black">
          <h2 className="text-lg font-semibold mb-2">Commission Status</h2>
          <CommissionStatusPie />
        </div>

        {/* Row 3 */}
        <div className="bg-white p-4 rounded-xl shadow text-black md:col-span-1">
          <h2 className="text-lg font-semibold mb-2">Sales by Category</h2>
          <CategorySalesPieChart />
        </div>

        <div className="bg-white p-4 rounded-xl shadow text-black md:col-span-1">
          <h2 className="text-lg font-semibold mb-2">Sales Target Progress</h2>
          <SalesVsTargetGauge />
        </div>
      </div>
    </main>
  );
}
