import React from 'react';
import { Compass, Sparkles, Code2, Globe, Share2, Mail, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#080B13] border-t border-slate-800/80 text-slate-400 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/60">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-400 p-0.5 shadow-md shadow-indigo-500/20">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Compass className="w-4 h-4 text-indigo-400" />
                </div>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Career<span className="text-indigo-400">Lynx</span>
              </span>
            </Link>
            
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Empowering students and job seekers with next-generation AI resume scoring, target skill gap intelligence, automated job matching, and interview simulations.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 hover:text-indigo-400 transition-all">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 hover:text-indigo-400 transition-all">
                <Share2 className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 hover:text-indigo-400 transition-all">
                <Code2 className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 hover:text-indigo-400 transition-all">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Platform</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/" className="hover:text-indigo-400 transition-colors">Home Page</Link></li>
              <li><Link to="/dashboard" className="hover:text-indigo-400 transition-colors">Career Dashboard</Link></li>
              <li><a href="#features" className="hover:text-indigo-400 transition-colors">ATS Resume Analyzer</a></li>
              <li><a href="#features" className="hover:text-indigo-400 transition-colors">AI Job Matchmaker</a></li>
              <li><a href="#features" className="hover:text-indigo-400 transition-colors">Skill Gap Radar</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Resources</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Student Career Roadmap</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">ATS Resume Templates</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">STAR Method Guide</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Salary Insights 2026</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Tech Interview Bank</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Career Updates</h4>
            <p className="text-xs text-slate-400 mb-3">
              Get weekly AI-curated job drops and career tips delivered to your inbox.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
              />
              <button 
                type="submit" 
                className="w-full flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition-all shadow-md shadow-indigo-600/20"
              >
                Subscribe Free <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} CareerLynx Inc. All rights reserved. Built with AI precision.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
