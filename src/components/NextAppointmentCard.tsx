'use client';

export default function NextAppointmentCard() {
  return (
    <div className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-2xl p-6 shadow-lg">
      <h3 className="text-lg font-semibold mb-4">Next Appointment</h3>

      <div className="flex items-center gap-4 mb-4">
        <div className="w-10 h-10 rounded-full bg-white opacity-30" />
        <div>
          <p className="font-medium">319 Haul Road</p>
          <p className="text-sm text-indigo-100">Glenrock, WY 12345</p>
        </div>
      </div>

      <p className="text-sm mb-1">Appointment Date</p>
      <p className="font-semibold mb-4">Nov 18 2021, 17:00</p>

      <div className="flex justify-between text-sm mb-6">
        <div>
          <p className="text-indigo-200">Room Area</p>
          <p className="font-semibold">100 ㎡</p>
        </div>
        <div>
          <p className="text-indigo-200">People</p>
          <p className="font-semibold">10</p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <p className="text-lg font-semibold">$5750</p>
        <button className="bg-white text-indigo-600 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-indigo-100">
          See Detail
        </button>
      </div>
    </div>
  );
}
