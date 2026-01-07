import { useState } from 'react';
import { X, Calendar, Upload, Plus } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

interface LeaveRequestFormProps {
  onClose: () => void;
  onSubmit: (data: any) => void;
}

export function LeaveRequestForm({ onClose, onSubmit }: LeaveRequestFormProps) {
  const [leaveType, setLeaveType] = useState('Leave');
  const [selectedLeaveCategory, setSelectedLeaveCategory] = useState('Annual Leaves');
  const [numberOfDays, setNumberOfDays] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [reason, setReason] = useState('');
  const [informTo, setInformTo] = useState<string[]>(['Christopher JD']);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      leaveType,
      selectedLeaveCategory,
      numberOfDays,
      fromDate,
      toDate,
      reason,
      informTo,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">New Leave Request</h2>
            <p className="text-sm text-gray-500 mt-1">You have 18 leaves in your account</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Leave Type Tabs */}
          <div>
            <Label className="text-sm font-medium text-gray-900 mb-3 block">Leave Type</Label>
            <div className="flex gap-2">
              {['Leave', 'Permission', 'Compensatory Off'].map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setLeaveType(type)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    leaveType === type
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Employee Section */}
          <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-lg border border-purple-100">
            <Avatar className="w-10 h-10">
              <AvatarFallback className="bg-orange-500 text-white">N</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium text-gray-900">Natalie</p>
              <p className="text-xs text-gray-500">UI/UX Designer</p>
            </div>
          </div>

          {/* Approved By */}
          <div>
            <Label className="text-sm font-medium text-gray-900 mb-3 block">Approved by</Label>
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
              <Avatar className="w-10 h-10">
                <AvatarFallback className="bg-purple-500 text-white">EP</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium text-gray-900">Elizabeth Penelope</p>
                <p className="text-xs text-gray-500">Team Lead UI/UX</p>
              </div>
            </div>
          </div>

          {/* Leave Type and Number of Days */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="text-sm font-medium text-gray-900 mb-2 block">Leave Type</Label>
              <div className="relative">
                <select
                  value={selectedLeaveCategory}
                  onChange={(e) => setSelectedLeaveCategory(e.target.value)}
                  className="w-full px-4 py-3 pr-10 bg-gray-50 border border-gray-200 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option>Annual Leaves</option>
                  <option>Sick Leaves</option>
                  <option>Personal Leaves</option>
                  <option>Maternity Leaves</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <Label className="text-sm font-medium text-gray-900 mb-2 block">Number of Days</Label>
              <div className="relative">
                <Input
                  type="number"
                  value={numberOfDays}
                  onChange={(e) => setNumberOfDays(e.target.value)}
                  placeholder="2"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center hover:bg-gray-200 rounded"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* From Date and To Date */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="text-sm font-medium text-gray-900 mb-2 block">From Date</Label>
              <div className="relative">
                <Input
                  type="date"
                  value={fromDate}
                  onChange={(e) => setFromDate(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg"
                />
                <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            <div>
              <Label className="text-sm font-medium text-gray-900 mb-2 block">To Date</Label>
              <div className="relative">
                <Input
                  type="date"
                  value={toDate}
                  onChange={(e) => setToDate(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg"
                />
                <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Inform To */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <Label className="text-sm font-medium text-gray-900">Inform To</Label>
              <button type="button" className="text-sm text-purple-600 font-medium hover:text-purple-700">
                +Add New
              </button>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <Avatar className="w-8 h-8">
                <AvatarFallback className="bg-blue-500 text-white">CJ</AvatarFallback>
              </Avatar>
              <span className="font-medium text-gray-900">Christopher JD</span>
              <button
                type="button"
                className="ml-auto w-6 h-6 rounded-full border border-red-300 flex items-center justify-center hover:bg-red-50"
              >
                <X className="w-3 h-3 text-red-500" />
              </button>
            </div>
          </div>

          {/* Reason and Image Upload */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="text-sm font-medium text-gray-900 mb-2 block">Reason</Label>
              <Textarea
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder="Enter maximum 150 Charactesr"
                maxLength={150}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg resize-none h-32"
              />
            </div>

            <div>
              <Label className="text-sm font-medium text-gray-900 mb-2 block">Image Upload</Label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center h-32 flex flex-col items-center justify-center hover:border-purple-500 cursor-pointer transition-colors">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-2">
                  <Upload className="w-6 h-6 text-purple-600" />
                </div>
                <p className="text-xs text-gray-500">PNG, JPG and Gif files are allowed</p>
                <p className="text-xs text-gray-400">Click or drag file to upload to choose a file</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 py-6 border-2 border-purple-600 text-purple-600 hover:bg-purple-50 rounded-xl"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 py-6 bg-purple-600 text-white hover:bg-purple-700 rounded-xl"
            >
              Apply Leave
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
