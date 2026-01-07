import { useState } from 'react';
import { Calendar, Plus, CalendarDays, Clock, CheckCircle2, XCircle, Trash2 } from 'lucide-react';
import { Button } from './ui/button';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Badge } from './ui/badge';
import { Label } from './ui/label';

interface LeaveRequest {
  id: string;
  leaveType: string;
  fromDate: string;
  toDate: string;
  reason: string;
  status: 'pending' | 'approved' | 'rejected';
  approver: string;
}

interface StaffDashboardProps {
  onNewLeaveRequest: () => void;
}

export function StaffDashboard({ onNewLeaveRequest }: StaffDashboardProps) {
  const [activeTab, setActiveTab] = useState<'leaves' | 'permission'>('leaves');
  const [calendarView, setCalendarView] = useState(false);

  const leaveRequests: LeaveRequest[] = [
    {
      id: '1',
      leaveType: 'Annual Leave',
      fromDate: '06-06-2023',
      toDate: '10-06-2023',
      reason: 'Hello, i\'m not feeling mother to attend at my hometown',
      status: 'pending',
      approver: 'Elizabeth Penelope',
    },
    {
      id: '2',
      leaveType: 'Sick Leave',
      fromDate: '12-06-2023',
      toDate: '14-06-2023',
      reason: 'Medical checkup and recovery',
      status: 'approved',
      approver: 'Elizabeth Penelope',
    },
    {
      id: '3',
      leaveType: 'Personal Leave',
      fromDate: '20-06-2023',
      toDate: '22-06-2023',
      reason: 'Family event',
      status: 'rejected',
      approver: 'Elizabeth Penelope',
    },
  ];

  const calendarDays = [
    { date: '04-06-2023', type: 'Annual Leave', name: 'Natalie' },
    { date: '15-06-2023', type: 'Sick Leave', name: 'Natalie' },
    { date: '23-06-2023', type: 'Late Login', name: '' },
    { date: '28-06-2023', type: 'Permission', name: '' },
  ];

  const getStatusBadge = (status: string) => {
    if (status === 'approved') {
      return <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Approved</Badge>;
    }
    if (status === 'rejected') {
      return <Badge className="bg-red-100 text-red-700 hover:bg-red-100">Rejected</Badge>;
    }
    return <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">Pending</Badge>;
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-20 bg-gradient-to-b from-purple-700 to-purple-900 flex flex-col items-center py-6 space-y-8">
        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
          <div className="w-6 h-6 bg-purple-600 rounded"></div>
        </div>
        
        <nav className="flex-1 flex flex-col items-center space-y-6">
          <button className="w-12 h-12 rounded-xl bg-purple-800 flex items-center justify-center text-white hover:bg-purple-600">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="w-12 h-12 rounded-xl flex items-center justify-center text-purple-300 hover:bg-purple-800 hover:text-white">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2"/>
              <rect x="14" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2"/>
              <rect x="14" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2"/>
              <rect x="3" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </button>
          <button className="w-12 h-12 rounded-xl bg-yellow-400 flex items-center justify-center text-purple-900 hover:bg-yellow-300">
            <CalendarDays className="w-6 h-6" />
          </button>
          <button className="w-12 h-12 rounded-xl flex items-center justify-center text-purple-300 hover:bg-purple-800 hover:text-white">
            <Clock className="w-6 h-6" />
          </button>
        </nav>

        <Avatar className="w-10 h-10">
          <AvatarFallback className="bg-purple-600 text-white">N</AvatarFallback>
        </Avatar>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white border-b px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="text-gray-600 hover:text-gray-900">← Back</button>
            <div className="text-sm text-gray-500">
              <span>Home</span> / <span>Leave Request</span> / <span className="text-gray-900 font-medium">Leaves</span>
            </div>
          </div>
        </header>

        <div className="p-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl p-6 text-white relative overflow-hidden">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-medium mb-2">Annual Leaves</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold">4/12</span>
                    <span className="text-sm opacity-80">(No of days)</span>
                  </div>
                </div>
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                  <Calendar className="w-8 h-8" />
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl p-6 text-white relative overflow-hidden">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-medium mb-2">Sick Leaves</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold">4/4</span>
                    <span className="text-sm opacity-80">(No of days)</span>
                  </div>
                </div>
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="bg-white rounded-t-2xl">
            <div className="flex border-b">
              <button
                onClick={() => setActiveTab('leaves')}
                className={`px-6 py-4 font-medium border-b-2 transition-colors ${
                  activeTab === 'leaves'
                    ? 'border-purple-600 text-purple-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Leaves
              </button>
              <button
                onClick={() => setActiveTab('permission')}
                className={`px-6 py-4 font-medium border-b-2 transition-colors ${
                  activeTab === 'permission'
                    ? 'border-purple-600 text-purple-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Permission
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              {!calendarView ? (
                <div className="space-y-4">
                  {leaveRequests.map((request) => (
                    <div key={request.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-2">
                            <Avatar className="w-10 h-10">
                              <AvatarFallback className="bg-orange-500 text-white">N</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium text-gray-900">Natalie</p>
                              <p className="text-sm text-gray-500">UI/UX Designer</p>
                            </div>
                          </div>
                        </div>
                        {getStatusBadge(request.status)}
                      </div>

                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <Label className="text-sm font-medium text-gray-900 mb-2 block">Leave Type</Label>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-gray-900">{request.leaveType}</span>
                            <Badge variant="secondary" className="bg-purple-100 text-purple-700 text-xs">
                              2 Days ({request.fromDate} to {request.toDate})
                            </Badge>
                          </div>
                        </div>

                        <div>
                          <Label className="text-sm font-medium text-gray-900 mb-2 block">Approver</Label>
                          <div className="flex items-center gap-3">
                            <Avatar className="w-8 h-8">
                              <AvatarFallback className="bg-purple-500 text-white">EP</AvatarFallback>
                            </Avatar>
                            <span className="text-sm text-gray-900">{request.approver}</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4">
                        <Label className="text-sm font-medium text-gray-900 mb-2 block">Reason/ Subject</Label>
                        <p className="text-sm text-gray-600">{request.reason}</p>
                      </div>

                      <div className="flex items-center gap-3 mt-4 pt-4 border-t">
                        <Avatar className="w-8 h-8">
                          <AvatarFallback className="bg-purple-500 text-white">EP</AvatarFallback>
                        </Avatar>
                        <span className="text-sm text-gray-600">Elizabeth Penelope</span>
                        <div className="ml-auto flex gap-2">
                          <button className="w-8 h-8 rounded-full border border-purple-600 flex items-center justify-center hover:bg-purple-50">
                            <CheckCircle2 className="w-4 h-4 text-purple-600" />
                          </button>
                          <button className="w-8 h-8 rounded-full border border-red-500 flex items-center justify-center hover:bg-red-50">
                            <XCircle className="w-4 h-4 text-red-500" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-purple-600 text-white p-6 rounded-xl">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold">June 2023</h3>
                    <div className="flex gap-2">
                      <button className="w-8 h-8 rounded-lg bg-white/20 hover:bg-white/30 flex items-center justify-center">
                        ←
                      </button>
                      <button className="w-8 h-8 rounded-lg bg-white/20 hover:bg-white/30 flex items-center justify-center">
                        →
                      </button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-7 gap-2 mb-4">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                      <div key={day} className="text-center text-sm font-medium py-2">
                        {day}
                      </div>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-7 gap-2">
                    {Array.from({ length: 30 }, (_, i) => i + 1).map((day) => (
                      <div
                        key={day}
                        className="aspect-square rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-sm cursor-pointer"
                      >
                        {day}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Floating Action Button */}
        <button
          onClick={onNewLeaveRequest}
          className="fixed bottom-8 right-8 w-14 h-14 bg-purple-600 rounded-full shadow-lg hover:bg-purple-700 flex items-center justify-center text-white hover:shadow-xl transition-all"
        >
          <Plus className="w-6 h-6" />
        </button>
      </main>
    </div>
  );
}