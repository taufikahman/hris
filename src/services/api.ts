// frontend/src/services/api.ts
const API_BASE_URL = 'http://localhost:8000/api';

// Get token from localStorage
const getToken = () => localStorage.getItem('token');

// Auth headers
const authHeaders = () => ({
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${getToken()}`
});

export const authService = {
  login: async (email: string, password: string) => {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await response.json();
    
    if (response.ok && data.token) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
    }
    
    return data;
  },
  
  register: async (data: any) => {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    const result = await response.json();
    
    if (response.ok && result.token) {
      localStorage.setItem('token', result.token);
      localStorage.setItem('user', JSON.stringify(result.user));
    }
    
    return result;
  },
  
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },
  
  getCurrentUser: () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }
};

export const leaveService = {
  createLeave: async (leaveData: any) => {
    const response = await fetch(`${API_BASE_URL}/leaves`, {
      method: 'POST',
      headers: authHeaders(),
      body: JSON.stringify(leaveData)
    });
    return response.json();
  },
  
  getAllLeaves: async () => {
    const response = await fetch(`${API_BASE_URL}/leaves`, {
      headers: authHeaders()
    });
    return response.json();
  },
  
  getMyLeaves: async () => {
    const response = await fetch(`${API_BASE_URL}/leaves/my`, {
      headers: authHeaders()
    });
    return response.json();
  },
  
  approveLeave: async (id: number) => {
    const response = await fetch(`${API_BASE_URL}/leaves/${id}/approve`, {
      method: 'POST',
      headers: authHeaders()
    });
    return response.json();
  },
  
  rejectLeave: async (id: number, reason: string) => {
    const response = await fetch(`${API_BASE_URL}/leaves/${id}/reject`, {
      method: 'POST',
      headers: authHeaders(),
      body: JSON.stringify({ reason })
    });
    return response.json();
  }
};