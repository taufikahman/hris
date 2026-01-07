import { useState } from 'react';
import { Calendar, Search, Filter, CheckCircle2, XCircle, Clock, FileText, Users } from 'lucide-react';
import { Button } from './ui/button';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Badge } from './ui/badge';
import { Input } from './ui/input';

interface PendingRequest {
  id: string;
  employeeName: string;
  employeeRole: string;
  leaveType: string;
  fromDate: string;
  toDate: string;
  numberOfDays: number;
  reason: string;
  status: 'pending' | 'approved' | 'rejected';
  appliedDate: string;
}

export function ManagerDashboard() {
  const [activeTab, setActiveTab] = useState<'pending' | 'approved' | 'rejected'>('pending');
  const [searchQuery, setSearchQuery] = useState('');

  const pendingRequests: PendingRequest[] = [
    {
      id: '1',
      employeeName: 'Natalie',
      employeeRole: 'UI/UX Designer',
      leaveType: 'Annual Leave',
      fromDate: '06-06-2023',
      toDate: '10-06-2023',
      numberOfDays: 5,
      reason: "Hello, i'm not feeling mother to attend at my hometown",
      status: 'pending',
      appliedDate: '01-06-2023',
    },
    {
      id: '2',
      employeeName: 'John Smith',
      employeeRole: 'Frontend Developer',
      leaveType: 'Sick Leave',
      fromDate: '08-06-2023',
      toDate: '09-06-2023',
      numberOfDays: 2,
      reason: 'Medical appointment and recovery needed',
      status: 'pending',
      appliedDate: '02-06-2023',
    },
    {
      id: '3',
      employeeName: 'Sarah Johnson',
      employeeRole: 'Product Manager',
      leaveType: 'Personal Leave',
      fromDate: '12-06-2023',
      toDate: '14-06-2023',
      numberOfDays: 3,
      reason: 'Family event attendance',
      status: 'pending',
      appliedDate: '03-06-2023',
    },
  ];

  const approvedRequests: PendingRequest[] = [
    {
      id: '4',
      employeeName: 'Mike Brown',
      employeeRole: 'Backend Developer',
      leaveType: 'Annual Leave',
      fromDate: '15-05-2023',
      toDate: '20-05-2023',
      numberOfDays: 6,
      reason: 'Vacation trip',
      status: 'approved',
      appliedDate: '01-05-2023',
    },
  ];

  const rejectedRequests: PendingRequest[] = [
    {
      id: '5',
      employeeName: 'Emily Davis',
      employeeRole: 'QA Engineer',
      leaveType: 'Personal Leave',
      fromDate: '10-05-2023',
      toDate: '11-05-2023',
      numberOfDays: 2,
      reason: 'Personal matters',
      status: 'rejected',
      appliedDate: '05-05-2023',
    },
  ];

  const handleApprove = (id: string) => {
    console.log('Approved request:', id);
    // Handle approval logic
  };

  const handleReject = (id: string) => {
    console.log('Rejected request:', id);
    // Handle rejection logic
  };

  const getCurrentRequests = () => {
    if (activeTab === 'pending') return pendingRequests;
    if (activeTab === 'approved') return approvedRequests;
    return rejectedRequests;
  };

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
            <Users className="w-6 h-6" />
          </button>
          <button className="w-12 h-12 rounded-xl flex items-center justify-center text-purple-300 hover:bg-purple-800 hover:text-white">
            <FileText className="w-6 h-6" />
          </button>
        </nav>

        <Avatar className="w-10 h-10">
          <AvatarFallback className="bg-purple-600 text-white">EP</AvatarFallback>
        </Avatar>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white border-b px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="text-gray-600 hover:text-gray-900">← Back</button>
            <div className="text-sm text-gray-500">
              <span>Home</span> / <span>Leave Request</span> / <span className="text-gray-900 font-medium">Approval Dashboard</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">Elizabeth Penelope</p>
                <p className="text-xs text-gray-500">Team Lead UI/UX</p>
              </div>
              <Avatar className="w-10 h-10">
                <AvatarFallback className="bg-purple-600 text-white">EP</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        <div className="p-8">
          {/* Stats Overview */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-600">Total Requests</h3>
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-purple-600" />
                </div>
              </div>
              <p className="text-3xl font-bold text-gray-900">28</p>
              <p className="text-xs text-gray-500 mt-1">This month</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-600">Pending</h3>
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-yellow-600" />
                </div>
              </div>
              <p className="text-3xl font-bold text-gray-900">{pendingRequests.length}</p>
              <p className="text-xs text-gray-500 mt-1">Awaiting approval</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-600">Approved</h3>
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                </div>
              </div>
              <p className="text-3xl font-bold text-gray-900">22</p>
              <p className="text-xs text-gray-500 mt-1">This month</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-600">Rejected</h3>
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <XCircle className="w-5 h-5 text-red-600" />
                </div>
              </div>
              <p className="text-3xl font-bold text-gray-900">3</p>
              <p className="text-xs text-gray-500 mt-1">This month</p>
            </div>
          </div>

          {/* Filters and Search */}
          <div className="bg-white rounded-t-2xl">
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-xl font-semibold text-gray-900">Leave Requests</h2>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Search employee..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 w-64"
                  />
                </div>
                <Button variant="outline" className="gap-2">
                  <Filter className="w-4 h-4" />
                  Filter
                </Button>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex border-b">
              <button
                onClick={() => setActiveTab('pending')}
                className={`px-6 py-4 font-medium border-b-2 transition-colors relative ${
                  activeTab === 'pending'
                    ? 'border-purple-600 text-purple-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Pending
                {pendingRequests.length > 0 && (
                  <span className="ml-2 px-2 py-0.5 bg-yellow-100 text-yellow-700 text-xs rounded-full">
                    {pendingRequests.length}
                  </span>
                )}
              </button>
              <button
                onClick={() => setActiveTab('approved')}
                className={`px-6 py-4 font-medium border-b-2 transition-colors ${
                  activeTab === 'approved'
                    ? 'border-purple-600 text-purple-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Approved
              </button>
              <button
                onClick={() => setActiveTab('rejected')}
                className={`px-6 py-4 font-medium border-b-2 transition-colors ${
                  activeTab === 'rejected'
                    ? 'border-purple-600 text-purple-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Rejected
              </button>
            </div>

            {/* Request List */}
            <div className="p-6 space-y-4">
              {getCurrentRequests().map((request) => (
                <div
                  key={request.id}
                  className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <Avatar className="w-12 h-12">
                        <AvatarFallback className="bg-orange-500 text-white">
                          {request.employeeName.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-gray-900">{request.employeeName}</p>
                        <p className="text-sm text-gray-500">{request.employeeRole}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      {getStatusBadge(request.status)}
                      <span className="text-xs text-gray-500">Applied: {request.appliedDate}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-6 mb-4">
                    <div>
                      <label className="text-xs font-medium text-gray-500 uppercase mb-1 block">Leave Type</label>
                      <p className="text-sm font-medium text-gray-900">{request.leaveType}</p>
                    </div>
                    <div>
                      <label className="text-xs font-medium text-gray-500 uppercase mb-1 block">Duration</label>
                      <p className="text-sm font-medium text-gray-900">
                        {request.fromDate} to {request.toDate}
                      </p>
                      <Badge variant="secondary" className="mt-1 bg-purple-100 text-purple-700 text-xs">
                        {request.numberOfDays} days
                      </Badge>
                    </div>
                    <div>
                      <label className="text-xs font-medium text-gray-500 uppercase mb-1 block">Status</label>
                      <p className="text-sm font-medium text-gray-900 capitalize">{request.status}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="text-xs font-medium text-gray-500 uppercase mb-1 block">Reason</label>
                    <p className="text-sm text-gray-700">{request.reason}</p>
                  </div>

                  {request.status === 'pending' && (
                    <div className="flex gap-3 pt-4 border-t">
                      <Button
                        onClick={() => handleReject(request.id)}
                        variant="outline"
                        className="flex-1 gap-2 border-red-200 text-red-600 hover:bg-red-50"
                      >
                        <XCircle className="w-4 h-4" />
                        Reject
                      </Button>
                      <Button
                        onClick={() => handleApprove(request.id)}
                        className="flex-1 gap-2 bg-green-600 hover:bg-green-700"
                      >
                        <CheckCircle2 className="w-4 h-4" />
                        Approve
                      </Button>
                    </div>
                  )}

                  {request.status === 'approved' && (
                    <div className="flex items-center gap-2 pt-4 border-t text-sm text-green-600">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Approved by you</span>
                    </div>
                  )}

                  {request.status === 'rejected' && (
                    <div className="flex items-center gap-2 pt-4 border-t text-sm text-red-600">
                      <XCircle className="w-4 h-4" />
                      <span>Rejected by you</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}