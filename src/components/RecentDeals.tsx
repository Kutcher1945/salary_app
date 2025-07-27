'use client';

const deals = [
  { address: '319 Haul Road', city: 'Glenrock, WY', time: 'Nov 14, 07:00 AM', price: '$5750' },
  { address: '47 Spruce Drive', city: 'Quantico, VA', time: 'Nov 15, 08:00 AM', price: '$5750' },
  { address: '165 Belmont Drive', city: 'Parowan, UT', time: 'Nov 16, 09:00 AM', price: '$5750' },
  { address: '1538 Hammer Road', city: 'Cleveland, OH', time: 'Nov 17, 10:00 AM', price: '$5750' },
];

export default function RecentDeals() {
  return (
    <div className="col-span-1 lg:col-span-1 bg-white rounded-2xl p-6 shadow space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-700">Recent Deals</h3>
        <button className="text-sm text-blue-600 hover:underline">View All</button>
      </div>

      {deals.map((deal, index) => (
        <div key={index} className="flex justify-between items-center border-b pb-3 last:border-none">
          <div>
            <p className="font-medium">{deal.address}</p>
            <p className="text-sm text-gray-500">{deal.city}</p>
          </div>
          <div className="text-right">
            <p className="font-semibold">{deal.price}</p>
            <p className="text-sm text-gray-400">{deal.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
