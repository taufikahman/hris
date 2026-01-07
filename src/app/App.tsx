import { useState } from 'react';
import { StaffDashboard } from './components/StaffDashboard';
import { ManagerDashboard } from './components/ManagerDashboard';
import { LeaveRequestForm } from './components/LeaveRequestForm';
import { Button } from './components/ui/button';
import { Users, UserCircle } from 'lucide-react';

type UserRole = 'staff' | 'manager';

export default function App() {
  const [userRole, setUserRole] = useState<UserRole>('staff');
  const [showLeaveForm, setShowLeaveForm] = useState(false);

  const handleNewLeaveRequest = () => {
    setShowLeaveForm(true);
  };

  const handleFormSubmit = (data: any) => {
    console.log('Leave request submitted:', data);
    // Handle form submission logic here
  };

  return (
    <div className="relative w-full h-screen">
      {/* Role Switcher - Fixed at top */}
      <div className="fixed top-4 right-4 z-50 flex items-center gap-3 bg-white rounded-xl shadow-lg p-2 border border-gray-200">
        <span className="text-sm font-medium text-gray-600 px-2">View as:</span>
        <Button
          onClick={() => setUserRole('staff')}
          size="sm"
          variant={userRole === 'staff' ? 'default' : 'outline'}
          className={`gap-2 ${
            userRole === 'staff'
              ? 'bg-purple-600 hover:bg-purple-700'
              : 'hover:bg-gray-100'
          }`}
        >
          <UserCircle className="w-4 h-4" />
          Staff
        </Button>
        <Button
          onClick={() => setUserRole('manager')}
          size="sm"
          variant={userRole === 'manager' ? 'default' : 'outline'}
          className={`gap-2 ${
            userRole === 'manager'
              ? 'bg-purple-600 hover:bg-purple-700'
              : 'hover:bg-gray-100'
          }`}
        >
          <Users className="w-4 h-4" />
          Manager
        </Button>
      </div>

      {/* Dashboard Content */}
      {userRole === 'staff' ? (
        <StaffDashboard onNewLeaveRequest={handleNewLeaveRequest} />
      ) : (
        <ManagerDashboard />
      )}

      {/* Leave Request Form Modal */}
      {showLeaveForm && (
        <LeaveRequestForm
          onClose={() => setShowLeaveForm(false)}
          onSubmit={handleFormSubmit}
        />
      )}
    </div>
  );
}
