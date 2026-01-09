import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Eye, EyeOff, Lock, Mail, User, Briefcase, Shield } from 'lucide-react';
import React from 'react';

interface RegisterPageProps {
  onRegister?: (data: RegisterData) => void;
  onNavigateToLogin?: () => void;
}

interface RegisterData {
  fullName: string;
  employeeId: string;
  email: string;
  password: string;
  confirmPassword: string;
  jobTitle: string;
  role: string;
  termsAccepted: boolean;
}

export function RegisterPage({ onRegister, onNavigateToLogin }: RegisterPageProps) {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [role, setRole] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [department, setDepartment] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate passwords match
    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match');
      return;
    }

    // Validate password strength
    if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
      return;
    }

    setPasswordError('');
    const data: RegisterData = {
      fullName,
      employeeId,
      email,
      password,
      confirmPassword,
      jobTitle,
      role,
      termsAccepted,
    };

    if (onRegister) {
      onRegister(data);
    } else {
      // Default behavior: register and navigate to dashboard
      console.log('Register:', data);
      // Here you would typically send registration data to your backend
      // For now, just navigate to dashboard
      navigate('/dashboard');
    }
  };

  const handleNavigateToLogin = () => {
    if (onNavigateToLogin) {
      onNavigateToLogin();
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-purple-50 p-4 py-8 md:py-12">
      <div className="w-full max-w-md lg:max-w-3xl">

        {/* Register Card */}
        <Card className="shadow-xl border-gray-200">
          <CardHeader className="space-y-1 px-4 md:px-6 lg:px-8 pt-6 pb-4">
            <CardTitle className="text-2xl md:text-3xl font-bold">Register</CardTitle>
            <CardDescription className="text-sm md:text-base">Create your account to get started</CardDescription>
          </CardHeader>
          <CardContent className="px-4 md:px-6 lg:px-8 pb-6">
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
              {/* Personal Information Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5">
                {/* Full Name Field */}
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-sm font-medium text-gray-900">
                    Full Name
                  </Label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                      <User className="w-5 h-5 text-gray-400" />
                    </div>
                    <Input
                      id="fullName"
                      type="text"
                      placeholder="John Doe"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                      className="pl-10 py-5 md:py-6 bg-gray-50 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-purple-500 text-sm md:text-base"
                    />
                  </div>
                </div>

                {/* Employee ID Field */}
                <div className="space-y-2">
                  <Label htmlFor="employeeId" className="text-sm font-medium text-gray-900">
                    Employee ID
                  </Label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                      <User className="w-5 h-5 text-gray-400" />
                    </div>
                    <Input
                      id="employeeId"
                      type="text"
                      placeholder="Tech-123"
                      value={employeeId}
                      onChange={(e) => setEmployeeId(e.target.value)}
                      required
                      className="pl-10 py-5 md:py-6 bg-gray-50 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-purple-500 text-sm md:text-base"
                    />
                  </div>
                </div>
              </div>

              {/* Email Field - Full Width */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-900">
                  Email Address
                </Label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                    <Mail className="w-5 h-5 text-gray-400" />
                  </div>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="pl-10 py-5 md:py-6 bg-gray-50 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-purple-500 text-sm md:text-base"
                  />
                </div>
              </div>

              {/* Work Information Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5">
                {/* Department Field */}
                <div className="space-y-2">
                  <Label htmlFor="department" className="text-sm font-medium text-gray-900">
                    Department
                  </Label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                      <Briefcase className="w-5 h-5 text-gray-400" />
                    </div>
                    <Input
                      id="department"
                      type="text"
                      placeholder="Technology"
                      value={department}
                      onChange={(e) => setDepartment(e.target.value)}
                      required
                      className="pl-10 py-5 md:py-6 bg-gray-50 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-purple-500 text-sm md:text-base"
                    />
                  </div>
                </div>

                {/* Role Field */}
                <div className="space-y-2">
                  <Label htmlFor="role" className="text-sm font-medium text-gray-900">
                    Role
                  </Label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none z-10">
                      <Shield className="w-5 h-5 text-gray-400" />
                    </div>
                    <Select value={role} onValueChange={setRole} required>
                      <SelectTrigger className="pl-10 py-5 md:py-6 bg-gray-50 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-purple-500 text-sm md:text-base h-auto">
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="staff">Staff</SelectItem>
                        <SelectItem value="manager">Manager</SelectItem>
                        <SelectItem value="hr_admin">HR Admin</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Job Title Field - Full Width */}
              <div className="space-y-2">
                <Label htmlFor="jobTitle" className="text-sm font-medium text-gray-900">
                  Job Title
                </Label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                    <Briefcase className="w-5 h-5 text-gray-400" />
                  </div>
                  <Input
                    id="jobTitle"
                    type="text"
                    placeholder="UI/UX Designer"
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                    required
                    className="pl-10 py-5 md:py-6 bg-gray-50 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-purple-500 text-sm md:text-base"
                  />
                </div>
              </div>

              {/* Password Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5">
                {/* Password Field */}
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm font-medium text-gray-900">
                    Password
                  </Label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                      <Lock className="w-5 h-5 text-gray-400" />
                    </div>
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Create a password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="pl-10 pr-10 py-5 md:py-6 bg-gray-50 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-purple-500 text-sm md:text-base"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                  <p className="text-xs text-gray-500">Must be at least 8 characters</p>
                </div>

                {/* Confirm Password Field */}
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-sm font-medium text-gray-900">
                    Confirm Password
                  </Label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                      <Lock className="w-5 h-5 text-gray-400" />
                    </div>
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? 'text' : 'password'}
                      placeholder="Confirm your password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      className="pl-10 pr-10 py-5 md:py-6 bg-gray-50 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-purple-500 text-sm md:text-base"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                  {passwordError && (
                    <p className="text-xs text-red-600">{passwordError}</p>
                  )}
                </div>
              </div>

              {/* Terms & Conditions */}
              <div className="flex items-start gap-2 pt-2">
                <input
                  id="terms"
                  type="checkbox"
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                  required
                  className="w-4 h-4 md:w-5 md:h-5 mt-0.5 rounded border-gray-300 text-purple-600 focus:ring-purple-500 cursor-pointer"
                />
                <label htmlFor="terms" className="text-xs md:text-sm text-gray-600 cursor-pointer leading-relaxed">
                  I agree to the{' '}
                  <button
                    type="button"
                    className="text-purple-600 hover:text-purple-700 font-medium underline-offset-2 hover:underline transition-all"
                  >
                    Terms of Service
                  </button>{' '}
                  and{' '}
                  <button
                    type="button"
                    className="text-purple-600 hover:text-purple-700 font-medium underline-offset-2 hover:underline transition-all"
                  >
                    Privacy Policy
                  </button>
                </label>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={!termsAccepted}
                className="w-full py-5 md:py-6 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-medium text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Create Account
              </Button>

              {/* Divider */}
              <div className="relative py-2">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
              </div>

              {/* Sign In Link */}
              {/* <div className="text-center">
                <p className="text-xs md:text-sm text-gray-600">
                  Already have an account?{' '}
                  <button
                    type="button"
                    onClick={handleNavigateToLogin}
                    className="text-purple-600 hover:text-purple-700 font-semibold underline-offset-2 hover:underline transition-all"
                  >
                    Sign in
                  </button>
                </p>
              </div> */}
            </form>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="mt-6 md:mt-8 text-center text-xs md:text-sm text-gray-500">
          <p>© 2026 HRIS. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

