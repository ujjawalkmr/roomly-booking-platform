import "../styles/Dashboard.css";

function RecentBookings() {
  return (
    <div className="bookings-card">
      <h2>Recent Bookings</h2>

      <table className="bookings-table">
        <thead>
          <tr>
            <th>Guest</th>
            <th>Property</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>John Doe</td>
            <td>Ocean Villa</td>
            <td><span className="status-confirmed">Confirmed</span></td>
          </tr>

          <tr>
            <td>Sarah Smith</td>
            <td>Mountain Cabin</td>
            <td><span className="status-pending">Pending</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default RecentBookings;