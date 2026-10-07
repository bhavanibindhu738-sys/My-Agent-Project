import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('careerlynx_user');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse saved user state', e);
      }
    }
    return {
      name: 'Alex Johnson',
      email: 'alex.johnson@example.com',
      role: 'Student / Job Seeker',
      targetRole: 'Full Stack Engineer',
      resumeScore: 88,
      matchedJobsCount: 42,
      applicationsCount: 12,
      interviewsCount: 3,
      skills: ['React', 'Node.js', 'Tailwind CSS', 'TypeScript', 'Python', 'PostgreSQL'],
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
    };
  });

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('careerlynx_auth') === 'true';
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('careerlynx_user', JSON.stringify(user));
    }
  }, [user]);

  useEffect(() => {
    localStorage.setItem('careerlynx_auth', isAuthenticated ? 'true' : 'false');
  }, [isAuthenticated]);

  const login = (email, password) => {
    const newUser = {
      ...user,
      email: email || user.email,
      name: email ? email.split('@')[0].replace('.', ' ').toUpperCase() : user.name
    };
    setUser(newUser);
    setIsAuthenticated(true);
    return true;
  };

  const register = (userData) => {
    const newUser = {
      ...user,
      ...userData,
      resumeScore: 82,
      matchedJobsCount: 28,
      applicationsCount: 4,
      interviewsCount: 1,
    };
    setUser(newUser);
    setIsAuthenticated(true);
    return true;
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  const updateUser = (updatedData) => {
    setUser((prev) => ({ ...prev, ...updatedData }));
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, register, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
