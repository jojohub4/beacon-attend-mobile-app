
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const AdminDashboard = () => {
  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Today's Attendance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">85%</div>
            <p className="text-sm text-muted-foreground">32/38 Staff Present</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Active Beacons</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">12</div>
            <p className="text-sm text-muted-foreground">All working properly</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Staff List</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Placeholder for staff list */}
            <div className="flex justify-between items-center p-2 bg-secondary rounded">
              <div>John Doe</div>
              <div className="text-green-500">Present</div>
            </div>
            <div className="flex justify-between items-center p-2 bg-secondary rounded">
              <div>Jane Smith</div>
              <div className="text-red-500">Absent</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;
