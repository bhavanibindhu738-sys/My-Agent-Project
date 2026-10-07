import React, { useState } from 'react';
import AppNav from '../components/AppNav';
import { 
  Compass, 
  Target, 
  Sparkles, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  TrendingUp, 
  BookOpen, 
  Award, 
  DollarSign, 
  Briefcase 
} from 'lucide-react';

export default function CareerGuidance() {
  const [selectedGoal, setSelectedGoal] = useState('Full Stack Engineer');
  const [userSkills, setUserSkills] = useState(['React.js', 'JavaScript (ES6+)', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL']);
  const [userInterests, setUserInterests] = useState(['Artificial Intelligence', 'Web Architecture', 'UI/UX Design']);

  const careerOptions = [
    {
      id: 1,
      title: 'Senior Full Stack Engineer',
      matchScore: 94,
      avgSalary: '$145,000 / yr',
      demandGrowth: '+24% (High Demand)',
      overview: 'Develop scalable frontend interfaces in React/TypeScript and resilient backend APIs in Node.js & PostgreSQL.',
      requiredSkills: ['React.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'GraphQL'],
      missingSkills: ['Docker', 'GraphQL'],
      roadmap: [
        { phase: 'Month 1', task: 'Master Docker containerization & microservices orchestration' },
        { phase: 'Month 2', task: 'Build GraphQL schema APIs with Apollo Server & Node.js' },
        { phase: 'Month 3', task: 'Implement distributed caching with Redis & CI/CD Pipelines' },
      ]
    },
    {
      id: 2,
      title: 'AI Solutions Engineer',
      matchScore: 86,
      avgSalary: '$160,000 / yr',
      demandGrowth: '+38% (Extreme Growth)',
      overview: 'Integrate LLM APIs, vector embeddings, and predictive machine learning models into enterprise web applications.',
      requiredSkills: ['Python', 'React.js', 'FastAPI', 'LangChain', 'Vector DBs', 'LLMs'],
      missingSkills: ['Python', 'FastAPI', 'LangChain', 'Vector DBs'],
      roadmap: [
        { phase: 'Month 1', task: 'Learn Python syntax & FastAPI web backend framework' },
        { phase: 'Month 2', task: 'Build RAG pipelines using LangChain & Pinecone / Weaviate' },
        { phase: 'Month 3', task: 'Deploy AI agents with structured output validation' },
      ]
    },
    {
      id: 3,
      title: 'Technical Product Manager',
      matchScore: 82,
      avgSalary: '$140,000 / yr',
      demandGrowth: '+18% (Steady Growth)',
      overview: 'Bridge software engineering teams and business strategy. Define product specs, user stories, and system architecture.',
      requiredSkills: ['Agile / Scrum', 'API Design', 'System Architecture', 'Jira', 'Data Analytics'],
      missingSkills: ['Agile / Scrum', 'Jira', 'Data Analytics'],
      roadmap: [
        { phase: 'Month 1', task: 'Obtain Certified Scrum Product Owner (CSPO) credential' },
        { phase: 'Month 2', task: 'Master product telemetry & Google Analytics / Mixpanel' },
        { phase: 'Month 3', task: 'Lead sprint planning and technical RFC spec write-ups' },
      ]
    }
  ];

  return (
    <div className="min-h-screen space-y-6 pb-20">
      <AppNav />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 pt-4">
        
        {/* Header */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-2">
            <Compass className="w-6 h-6 text-indigo-400" />
            AI Career Guidance
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Personalized career path recommendations based on your current skills, interests, and target goals.
          </p>
        </div>

        {/* INPUT SELECTION WIDGET */}
        <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6">
          <h2 className="text-base font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
            <Target className="w-4 h-4 text-indigo-400" />
            Your Current Profile Signals
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Skills */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">Current Skills</label>
              <div className="flex flex-wrap gap-1.5">
                {userSkills.map((sk, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
                    {sk}
                  </span>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">Interests</label>
              <div className="flex flex-wrap gap-1.5">
                {userInterests.map((int, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold">
                    {int}
                  </span>
                ))}
              </div>
            </div>

            {/* Target Career Goal */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">Target Career Goal</label>
              <select
                value={selectedGoal}
                onChange={(e) => setSelectedGoal(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-white focus:outline-none focus:border-indigo-500"
              >
                <option value="Full Stack Engineer">Senior Full Stack Engineer</option>
                <option value="AI Solutions Engineer">AI Solutions Engineer</option>
                <option value="Technical Product Manager">Technical Product Manager</option>
              </select>
            </div>

          </div>
        </div>

        {/* RECOMMENDED CAREERS LIST (EXACT REQUIREMENTS: Recommended Careers, Match %, Required Skills, Missing Skills, Learning Roadmap) */}
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-extrabold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-indigo-400" />
              Recommended Career Paths
            </h2>
            <span className="text-xs text-slate-400">Showing top 3 aligned trajectories</span>
          </div>

          <div className="space-y-6">
            {careerOptions.map((career) => (
              <div key={career.id} className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800 glass-card-hover space-y-6">
                
                {/* Top Title & Match Score */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                  <div>
                    <h3 className="text-xl font-extrabold text-white flex items-center gap-2">
                      {career.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">{career.overview}</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-sm font-black">
                      {career.matchScore}% Match
                    </span>
                  </div>
                </div>

                {/* Salary & Demand Banner */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-emerald-400" />
                    <span className="text-slate-300">Avg Market Salary: <strong className="text-white">{career.avgSalary}</strong></span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-indigo-400" />
                    <span className="text-slate-300">Demand Growth: <strong className="text-indigo-300">{career.demandGrowth}</strong></span>
                  </div>
                </div>

                {/* REQUIRED SKILLS VS MISSING SKILLS */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  
                  {/* Required Skills */}
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Required Industry Skills</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {career.requiredSkills.map((sk, i) => {
                        const isPossessed = userSkills.includes(sk);
                        return (
                          <span
                            key={i}
                            className={`px-2.5 py-1 rounded-md text-xs font-medium border flex items-center gap-1 ${
                              isPossessed
                                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                                : 'bg-slate-900 border-slate-800 text-slate-400'
                            }`}
                          >
                            {isPossessed ? <CheckCircle2 className="w-3 h-3 text-emerald-400" /> : null}
                            {sk}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  {/* Missing Skills */}
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Missing Skills to Master</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {career.missingSkills.map((sk, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-md bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-medium flex items-center gap-1">
                          <XCircle className="w-3 h-3 text-rose-400" />
                          {sk}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* LEARNING ROADMAP */}
                <div className="pt-4 border-t border-slate-800 space-y-3">
                  <h4 className="text-xs font-bold text-purple-400 uppercase tracking-wider flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-purple-400" />
                    Customized Learning Roadmap
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {career.roadmap.map((step, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
                        <div className="text-[11px] font-bold text-indigo-400">{step.phase}</div>
                        <div className="text-xs font-semibold text-white">{step.task}</div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
