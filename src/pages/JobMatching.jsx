import React, { useState } from 'react';
import AppNav from '../components/AppNav';
import { 
  Briefcase, 
  Search, 
  MapPin, 
  Building2, 
  DollarSign, 
  Filter, 
  CheckCircle2, 
  Send, 
  Sparkles,
  Bookmark,
  ChevronRight
} from 'lucide-react';

export default function JobMatching() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [savedJobs, setSavedJobs] = useState([]);
  const [toastMessage, setToastMessage] = useState(null);

  const mockJobs = [
    {
      id: 'job-1',
      title: 'Senior Full Stack Engineer',
      company: 'Nexus Cloud Technologies',
      location: 'San Francisco, CA (Remote)',
      type: 'Full-Time',
      workMode: 'Remote',
      salary: '$135,000 - $165,000',
      matchScore: 96,
      tags: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS'],
      description: 'Lead modern Web application development and high-throughput microservices. Experience with React 18, TypeScript, and Node APIs required.',
      posted: '2 hours ago'
    },
    {
      id: 'job-2',
      title: 'Frontend React Developer',
      company: 'Apex Digital Systems',
      location: 'Austin, TX (Hybrid)',
      type: 'Full-Time',
      workMode: 'Hybrid',
      salary: '$120,000 - $145,000',
      matchScore: 93,
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'JavaScript'],
      description: 'Build user interfaces, dynamic dashboards, and component libraries using React, TypeScript, and CSS design tokens.',
      posted: '5 hours ago'
    },
    {
      id: 'job-3',
      title: 'Full Stack Engineer (GraphQL & Node)',
      company: 'Vanguard AI Labs',
      location: 'New York, NY (Remote)',
      type: 'Full-Time',
      workMode: 'Remote',
      salary: '$140,000 - $175,000',
      matchScore: 88,
      tags: ['React', 'Node.js', 'GraphQL', 'TypeScript'],
      description: 'Build GraphQL backend services and interactive frontend interfaces for next-generation AI workflows.',
      posted: '1 day ago'
    },
    {
      id: 'job-4',
      title: 'Lead UI Architect',
      company: 'Starlight Interactive',
      location: 'Seattle, WA (On-site)',
      type: 'Full-Time',
      workMode: 'On-site',
      salary: '$150,000 - $185,000',
      matchScore: 84,
      tags: ['React', 'Tailwind CSS', 'System Design', 'Figma'],
      description: 'Spearhead frontend architecture, component libraries, accessibility compliance, and CSS performance.',
      posted: '2 days ago'
    }
  ];

  const handleApply = (job) => {
    if (appliedJobs.includes(job.id)) return;
    setAppliedJobs([...appliedJobs, job.id]);
    setToastMessage(`Applied to ${job.title} at ${job.company}!`);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleToggleSave = (jobId) => {
    if (savedJobs.includes(jobId)) {
      setSavedJobs(savedJobs.filter((id) => id !== jobId));
    } else {
      setSavedJobs([...savedJobs, jobId]);
    }
  };

  const filteredJobs = mockJobs.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesRole = selectedRole === 'All' || job.title.includes(selectedRole);
    const matchesLocation = selectedLocation === 'All' || job.workMode === selectedLocation;

    return matchesSearch && matchesRole && matchesLocation;
  });

  return (
    <div className="min-h-screen space-y-6 pb-20">
      <AppNav />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 pt-4">
        
        {/* Header */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-indigo-400" />
            Smart Job Matching
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Real-time job openings scored against your specific skills, resume keywords, and career preferences.
          </p>
        </div>

        {/* Toast Notification */}
        {toastMessage && (
          <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold flex items-center gap-2 animate-in fade-in duration-200">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            {toastMessage}
          </div>
        )}

        {/* SEARCH AND FILTERS BAR (EXACT REQUIREMENTS: Search jobs, Filter by role/location) */}
        <div className="glass-card p-6 rounded-3xl border border-slate-800 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            
            {/* Search Input */}
            <div className="md:col-span-2 relative">
              <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search job title, company, or tech stack (e.g. React)..."
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-all"
              />
            </div>

            {/* Filter by Role */}
            <div>
              <select
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                className="w-full px-3.5 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-white focus:outline-none focus:border-indigo-500"
              >
                <option value="All">All Job Roles</option>
                <option value="Full Stack">Full Stack Engineer</option>
                <option value="Frontend">Frontend Developer</option>
                <option value="UI Architect">UI Architect</option>
              </select>
            </div>

            {/* Filter by Location / Work Mode */}
            <div>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full px-3.5 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-white focus:outline-none focus:border-indigo-500"
              >
                <option value="All">All Work Modes</option>
                <option value="Remote">Remote Only</option>
                <option value="Hybrid">Hybrid</option>
                <option value="On-site">On-site</option>
              </select>
            </div>

          </div>
        </div>

        {/* JOB CARDS LIST (EXACT REQUIREMENTS: Job cards, Match percentage, Apply button) */}
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Showing <strong className="text-white">{filteredJobs.length}</strong> matched positions</span>
            <span className="flex items-center gap-1"><Sparkles className="w-3.5 h-3.5 text-indigo-400" /> Sorted by AI Match Score</span>
          </div>

          <div className="space-y-4">
            {filteredJobs.map((job) => {
              const isApplied = appliedJobs.includes(job.id);
              const isSaved = savedJobs.includes(job.id);

              return (
                <div key={job.id} className="glass-card p-6 rounded-3xl border border-slate-800 glass-card-hover space-y-4">
                  
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <h2 className="text-lg font-bold text-white hover:text-indigo-300 transition-colors">
                          {job.title}
                        </h2>
                        <span className="px-2.5 py-0.5 rounded-full bg-slate-800 text-[10px] text-slate-300 font-semibold border border-slate-700">
                          {job.type}
                        </span>
                      </div>

                      <div className="text-xs text-slate-400 mt-1 flex flex-wrap items-center gap-3">
                        <span className="flex items-center gap-1"><Building2 className="w-3.5 h-3.5 text-slate-500" /> {job.company}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-slate-500" /> {job.location}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1 font-semibold text-emerald-400"><DollarSign className="w-3.5 h-3.5" /> {job.salary}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-black">
                        {job.matchScore}% Match
                      </span>

                      <button
                        onClick={() => handleToggleSave(job.id)}
                        className={`p-2 rounded-xl border transition-all ${
                          isSaved ? 'bg-indigo-600/30 border-indigo-500 text-indigo-300' : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                        }`}
                      >
                        <Bookmark className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {job.description}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {job.tags.map((tag, i) => (
                        <span key={i} className="px-2.5 py-0.5 rounded bg-slate-900 text-[11px] text-slate-300 border border-slate-800">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => handleApply(job)}
                      disabled={isApplied}
                      className={`px-6 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                        isApplied 
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 cursor-default'
                          : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/25'
                      }`}
                    >
                      {isApplied ? (
                        <>
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          Applied
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Apply Now
                        </>
                      )}
                    </button>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
