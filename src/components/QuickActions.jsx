function QuickActions() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>

      <div className="space-y-3">
        <button className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition">
          Add Property
        </button>

        <button className="w-full bg-slate-900 text-white py-3 rounded-xl hover:bg-slate-800 transition">
          Create Booking
        </button>

        <button className="w-full border py-3 rounded-xl hover:bg-slate-50 transition">
          View Reports
        </button>
      </div>
    </div>
  );
}

export default QuickActions;