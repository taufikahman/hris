import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StaffDashboard } from './StaffDashboard';
import { ManagerDashboard } from './ManagerDashboard';
import { LeaveRequestForm } from './LeaveRequestForm';
import { Button } from './ui/button';
import { Users, UserCircle, LogOut } from 'lucide-react';
import React from 'react';

type UserRole = 'staff' | 'manager';

export default function Dashboard() {
  const navigate = useNavigate();
  const [userRole, setUserRole] = useState<UserRole>('staff');
  const [showLeaveForm, setShowLeaveForm] = useState(false);

  const handleLogout = () => {
    // Clear any auth tokens/session data here
    navigate('/login');
  };

  const handleNewLeaveRequest = () => {
    setShowLeaveForm(true);
  };

  const handleFormSubmit = (data: any) => {
    console.log('Leave request submitted:', data);
    // Handle form submission logic here
  };

  return (
    <div className="relative w-full h-screen">
      {/* Role Switcher & Logout - Fixed at top */}
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
        <div className="w-px h-6 bg-gray-200"></div>
        <Button
          onClick={handleLogout}
          size="sm"
          variant="outline"
          className="gap-2 hover:bg-red-50 hover:text-red-600 hover:border-red-200"
        >
          <LogOut className="w-4 h-4" />
          Logout
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

