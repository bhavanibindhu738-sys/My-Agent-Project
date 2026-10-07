import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import AppNav from '../components/AppNav';
import { 
  Sparkles, 
  FileText, 
  Briefcase, 
  Target, 
  Award, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  Building2, 
  MapPin, 
  DollarSign, 
  BookOpen, 
  Zap, 
  Compass, 
  Send 
} from 'lucide-react';

export default function Dashboard() {
  const { user } = useAuth();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [toastMessage, setToastMessage] = useState(null);

  // Recommended Jobs mock data
  const recommendedJobs = [
    {
      id: 'job-1',
      title: 'Senior Full Stack Developer',
      company: 'Nexus Cloud Technologies',
      location: 'San Francisco, CA (Remote)',
      salary: '$135,000 - $165,000',
      matchScore: 96,
      tags: ['React', 'Node.js', 'TypeScript', 'PostgreSQL'],
      posted: '2 hours ago'
    },
    {
      id: 'job-2',
      title: 'Frontend React Architect',
      company: 'Apex Digital Systems',
      location: 'Austin, TX (Hybrid)',
      salary: '$125,000 - $150,000',
      matchScore: 93,
      tags: ['React', 'TypeScript', 'Tailwind CSS'],
      posted: '5 hours ago'
    },
    {
      id: 'job-3',
      title: 'Full Stack AI Solutions Engineer',
      company: 'Vanguard AI Labs',
      location: 'New York, NY (Remote)',
      salary: '$140,000 - $175,000',
      matchScore: 89,
      tags: ['React', 'Python', 'GraphQL'],
      posted: '1 day ago'
    }
  ];

  // Learning Roadmap Milestones
  const roadmapSteps = [
    { phase: 'Phase 1', title: 'Master Docker Containerization & Microservices', status: 'In Progress', progress: 65, duration: '2 weeks' },
    { phase: 'Phase 2', title: 'Implement GraphQL Subscriptions & Apollo Client', status: 'Next Up', progress: 20, duration: '3 weeks' },
    { phase: 'Phase 3', title: 'System Design: Distributed Caching with Redis', status: 'Upcoming', progress: 0, duration: '2 weeks' },
    { phase: 'Phase 4', title: 'CI/CD Pipeline Automation with GitHub Actions', status: 'Upcoming', progress: 0, duration: '1 week' },
  ];

  const handleApply = (job) => {
    if (appliedJobs.includes(job.id)) return;
    setAppliedJobs([...appliedJobs, job.id]);
    setToastMessage(`Application submitted to ${job.company} for ${job.title}!`);
    setTimeout(() => setToastMessage(null), 3000);
  };

  return (
    <div className="min-h-screen space-y-6 pb-20">
      <AppNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 pt-4">
        
        {/* Toast Notification */}
        {toastMessage && (
          <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold flex items-center gap-2 animate-in fade-in duration-200">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            {toastMessage}
          </div>
        )}

        {/* HERO WELCOME WIDGET */}
        <div className="glass-card p-8 rounded-3xl border border-indigo-500/30 bg-gradient-to-r from-slate-950 via-indigo-950/40 to-slate-950 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
            <div className="flex items-center gap-5">
              <img 
                src={user.avatar} 
                alt={user.name} 
                className="w-16 h-16 rounded-2xl object-cover ring-4 ring-indigo-500/30 shadow-xl"
              />
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
                    Welcome back, {user.name}!
                  </h1>
                  <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
                    Target Role: {user.targetRole || 'Senior Full Stack Engineer'}
                  </span>
                </div>
                <p className="text-xs text-slate-300 mt-1">
                  Your AI Career Engine is continuously analyzing active job openings and optimizing your trajectory.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Link
                to="/resume-analyzer"
                className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-lg shadow-indigo-600/30 flex items-center gap-2 transition-all"
              >
                <Sparkles className="w-4 h-4" />
                Analyze New Resume
              </Link>
            </div>
          </div>
        </div>

        {/* DASHBOARD METRICS GRID (EXACT REQUIREMENTS) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          
          {/* Metric 1: Career Readiness Score */}
          <div className="glass-card p-5 rounded-2xl border border-slate-800 glass-card-hover space-y-2">
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-[11px] font-bold uppercase tracking-wider">Career Readiness</span>
              <Award className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-3xl font-black text-white">88%</div>
            <div className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5" /> High Placement Potential
            </div>
          </div>

          {/* Metric 2: ATS Score */}
          <div className="glass-card p-5 rounded-2xl border border-slate-800 glass-card-hover space-y-2">
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-[11px] font-bold uppercase tracking-wider">ATS Resume Score</span>
              <FileText className="w-4 h-4 text-indigo-400" />
            </div>
            <div className="text-3xl font-black text-indigo-400">94%</div>
            <div className="text-[11px] text-indigo-300 font-semibold">
              Top 5% among React Applicants
            </div>
          </div>

          {/* Metric 3: Skill Match */}
          <div className="glass-card p-5 rounded-2xl border border-slate-800 glass-card-hover space-y-2">
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-[11px] font-bold uppercase tracking-wider">Skill Match %</span>
              <Briefcase className="w-4 h-4 text-purple-400" />
            </div>
            <div className="text-3xl font-black text-purple-400">88%</div>
            <div className="text-[11px] text-purple-300 font-semibold">
              Matches 8 of 10 market skills
            </div>
          </div>

          {/* Metric 4: Recommended Career */}
          <div className="glass-card p-5 rounded-2xl border border-slate-800 glass-card-hover space-y-2">
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-[11px] font-bold uppercase tracking-wider">Recommended Career</span>
              <Compass className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="text-sm font-bold text-white leading-tight">Senior Full Stack Architect</div>
            <div className="text-[11px] text-cyan-300 font-semibold">
              Avg Salary: $145,000 / yr
            </div>
          </div>

          {/* Metric 5: Skill Gap */}
          <div className="glass-card p-5 rounded-2xl border border-slate-800 glass-card-hover space-y-2">
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-[11px] font-bold uppercase tracking-wider">Skill Gap</span>
              <Target className="w-4 h-4 text-rose-400" />
            </div>
            <div className="text-xs font-bold text-rose-400">Docker, GraphQL</div>
            <div className="text-[11px] text-slate-400">
              ~ 5 weeks estimated study
            </div>
          </div>

        </div>

        {/* MAIN DASHBOARD CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT COLUMN: Recommended Jobs */}
          <div className="lg:col-span-2 space-y-6">
            
            <div className="glass-card p-6 rounded-3xl border border-slate-800">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-lg font-bold text-white flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-indigo-400" />
                    Recommended Jobs
                  </h2>
                  <p className="text-xs text-slate-400">Positions with 85%+ AI match score based on your profile.</p>
                </div>
                <Link to="/jobs" className="text-xs font-semibold text-indigo-400 hover:underline flex items-center gap-1">
                  View All Jobs <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="space-y-4">
                {recommendedJobs.map((job) => {
                  const isApplied = appliedJobs.includes(job.id);
                  return (
                    <div key={job.id} className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-indigo-500/40 transition-all space-y-3">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="text-base font-bold text-white hover:text-indigo-300 transition-colors">
                            {job.title}
                          </h3>
                          <div className="text-xs text-slate-400 mt-1 flex items-center gap-2">
                            <span className="flex items-center gap-1"><Building2 className="w-3.5 h-3.5 text-slate-500" /> {job.company}</span>
                            <span>•</span>
                            <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-slate-500" /> {job.location}</span>
                          </div>
                        </div>
                        <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-extrabold">
                          {job.matchScore}% Match
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-xs">
                        <div className="flex flex-wrap gap-1.5">
                          {job.tags.map((tag, i) => (
                            <span key={i} className="px-2.5 py-0.5 rounded bg-slate-900 text-[11px] text-slate-300 border border-slate-800">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <span className="text-emerald-400 font-semibold">{job.salary}</span>
                      </div>

                      <button
                        onClick={() => handleApply(job)}
                        disabled={isApplied}
                        className={`w-full py-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                          isApplied 
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 cursor-default'
                            : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/20'
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
                  );
                })}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Learning Roadmap */}
          <div className="space-y-6">
            
            <div className="glass-card p-6 rounded-3xl border border-slate-800">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-lg font-bold text-white flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-purple-400" />
                    Learning Roadmap
                  </h2>
                  <p className="text-xs text-slate-400">Steps to close your skill gap and reach 98% match.</p>
                </div>
              </div>

              <div className="space-y-4">
                {roadmapSteps.map((step, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-indigo-400">{step.phase}</span>
                      <span className="text-slate-400 text-[11px]">{step.duration}</span>
                    </div>
                    <div className="text-xs font-bold text-white">{step.title}</div>
                    <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-full" style={{ width: `${step.progress}%` }} />
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-slate-400">
                      <span>Status: <strong className="text-slate-200">{step.status}</strong></span>
                      <span>{step.progress}% Complete</span>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                to="/skill-gap"
                className="w-full mt-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
              >
                Detailed Skill Gap Analysis <ArrowRight className="w-3.5 h-3.5 text-indigo-400" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
