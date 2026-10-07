import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  User, 
  FileText, 
  Compass, 
  Briefcase 
} from 'lucide-react';

export default function AppNav() {
  const location = useLocation();

  const navItems = [
    { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/profile', label: 'Profile', icon: User },
    { path: '/resume-analyzer', label: 'ATS Resume Analyzer', icon: FileText },
    { path: '/career-guidance', label: 'Career Guidance', icon: Compass },
    { path: '/jobs', label: 'Job Matching', icon: Briefcase },
  ];

  return (
    <div className="bg-slate-900/80 border-b border-slate-800/80 py-3 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto no-scrollbar">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                active 
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30' 
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60 border border-slate-800'
              }`}
            >
              <Icon className="w-4 h-4 text-indigo-400" />
              {item.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
