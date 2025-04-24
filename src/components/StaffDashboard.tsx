
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const StaffDashboard = () => {
  const handleCheckIn = () => {
    // TODO: Implement beacon detection and check-in logic
    console.log("Checking in...");
  };

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-bold">Staff Dashboard</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Current Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center space-y-4">
            <div className="text-2xl font-semibold text-green-500">Checked In</div>
            <div className="text-sm text-muted-foreground">Last check-in: 9:00 AM</div>
            <Button onClick={handleCheckIn} className="w-full">
              Check Out
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Attendance History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {/* Placeholder for attendance history */}
            <div className="flex justify-between items-center text-sm">
              <div>Today</div>
              <div className="text-green-500">Present</div>
            </div>
            <div className="flex justify-between items-center text-sm">
              <div>Yesterday</div>
              <div className="text-green-500">Present</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StaffDashboard;
