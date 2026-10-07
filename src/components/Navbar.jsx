import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { 
  Compass, 
  Sparkles, 
  LogOut, 
  LogIn, 
  UserPlus, 
  Menu, 
  X,
  LayoutDashboard,
  User,
  FileText,
  Briefcase
} from 'lucide-react';

export default function Navbar() {
  const { isAuthenticated, user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-[#0B0F19]/90 backdrop-blur-xl border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-400 p-0.5 shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all duration-300">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Compass className="w-5 h-5 text-indigo-400 group-hover:rotate-45 transition-transform duration-500" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold bg-gradient-to-r from-white via-slate-100 to-indigo-200 bg-clip-text text-transparent tracking-tight">
                Career<span className="text-indigo-400">Lynx</span>
              </span>
              <span className="text-[10px] font-semibold text-indigo-400/90 uppercase tracking-widest -mt-1 flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5 inline" /> AI Career Engine
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/80 p-1.5 rounded-full border border-slate-800/80 shadow-inner">
            <Link 
              to="/" 
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                isActive('/') 
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30' 
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              Home
            </Link>

            <Link 
              to="/dashboard" 
              className={`px-3.5 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                isActive('/dashboard') 
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30' 
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              Dashboard
            </Link>

            <Link 
              to="/resume-analyzer" 
              className={`px-3.5 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                isActive('/resume-analyzer') 
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30' 
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              ATS Analyzer
            </Link>

            <Link 
              to="/career-guidance" 
              className={`px-3.5 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                isActive('/career-guidance') 
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30' 
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              Career Guidance
            </Link>

            <Link 
              to="/jobs" 
              className={`px-3.5 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                isActive('/jobs') 
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30' 
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              Job Matching
            </Link>
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {isAuthenticated ? (
              <div className="flex items-center gap-3">
                <Link
                  to="/profile"
                  className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900 border border-slate-700/80 hover:border-indigo-500/50 transition-all group"
                >
                  <img 
                    src={user.avatar} 
                    alt={user.name} 
                    className="w-7 h-7 rounded-full object-cover ring-2 ring-indigo-500/40"
                  />
                  <span className="text-xs font-semibold text-slate-200 group-hover:text-white">
                    {user.name}
                  </span>
                </Link>

                <button
                  onClick={handleLogout}
                  title="Log Out"
                  className="p-2.5 rounded-full text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 transition-all border border-slate-800"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2.5">
                <Link
                  to="/login"
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/60 transition-all border border-slate-800"
                >
                  <LogIn className="w-4 h-4 text-indigo-400" />
                  Login
                </Link>

                <Link
                  to="/register"
                  className="flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-semibold bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-lg shadow-indigo-600/25 transition-all duration-200"
                >
                  <UserPlus className="w-4 h-4" />
                  Get Started
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0F172A] border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 animate-in fade-in slide-in-from-top duration-200">
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 rounded-xl text-sm font-medium text-slate-300 hover:bg-slate-800">Home</Link>
          <Link to="/dashboard" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 rounded-xl text-sm font-medium text-slate-300 hover:bg-slate-800">Dashboard</Link>
          <Link to="/profile" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 rounded-xl text-sm font-medium text-slate-300 hover:bg-slate-800">Profile</Link>
          <Link to="/resume-analyzer" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 rounded-xl text-sm font-medium text-slate-300 hover:bg-slate-800">ATS Resume Analyzer</Link>
          <Link to="/career-guidance" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 rounded-xl text-sm font-medium text-slate-300 hover:bg-slate-800">Career Guidance</Link>
          <Link to="/jobs" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 rounded-xl text-sm font-medium text-slate-300 hover:bg-slate-800">Job Matching</Link>
          
          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            {isAuthenticated ? (
              <button onClick={() => { handleLogout(); setMobileMenuOpen(false); }} className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-rose-400 bg-rose-500/10 font-medium">
                <LogOut className="w-4 h-4" /> Sign Out
              </button>
            ) : (
              <>
                <Link to="/login" onClick={() => setMobileMenuOpen(false)} className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 text-slate-200 font-medium">Login</Link>
                <Link to="/register" onClick={() => setMobileMenuOpen(false)} className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 text-white font-medium">Get Started</Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
