import React, { useState } from 'react';
import AppNav from '../components/AppNav';
import { 
  FileText, 
  Search, 
  Zap, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  Sparkles, 
  Download, 
  RefreshCw,
  Award
} from 'lucide-react';

export default function ResumeAnalyzer() {
  const [resumeText, setResumeText] = useState('');
  const [targetJobText, setTargetJobText] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const [results, setResults] = useState(null);

  const sampleResume = `Alex Johnson
Full Stack Engineer | alex.johnson@example.com | (555) 234-5678 | San Francisco, CA

SUMMARY
Experienced Full Stack Engineer with 3+ years building high-throughput web applications using React, Node.js, and TypeScript. Proven track record in optimizing page performance by 35% and managing PostgreSQL database schemas.

TECHNICAL SKILLS
- Frontend: React.js, JavaScript (ES6+), TypeScript, Tailwind CSS, HTML5/CSS3
- Backend: Node.js, Express.js, RESTful APIs, PostgreSQL
- Tools: Git, GitHub, VS Code, Webpack, Vite

EXPERIENCE
Full Stack Developer | TechFlow Solutions | 2023 - Present
- Architected responsive web dashboard for 50,000+ active monthly users in React and TypeScript.
- Designed REST APIs in Node.js and PostgreSQL reducing data retrieval latency by 40%.
- Integrated state management and automated component testing routines.

EDUCATION
B.S. in Computer Science | State University | CGPA: 3.85 / 4.00`;

  const handleFillSample = () => {
    setResumeText(sampleResume);
    setTargetJobText('Looking for Senior Full Stack Engineer proficient in React, Node.js, TypeScript, Docker, and GraphQL.');
  };

  const handleAnalyze = (e) => {
    e.preventDefault();
    if (!resumeText.trim()) return;

    setAnalyzing(true);
    setResults(null);

    setTimeout(() => {
      setAnalyzing(false);
      setResults({
        atsScore: 94,
        categoryScores: {
          impactVerbs: 96,
          formatting: 92,
          keywordMatch: 90,
          quantifiedMetrics: 95
        },
        strengths: [
          'Strong usage of quantified metrics (e.g. "50,000+ users", "reduced latency by 40%").',
          'Clean section hierarchy with modern technical skills categorized by tier.',
          'High match density for core frontend frameworks (React, TypeScript, Tailwind CSS).',
          'Clear academic standing included (CGPA: 3.85 / 4.00).'
        ],
        missingKeywords: [
          'Docker / Containerization',
          'GraphQL API queries',
          'CI/CD Pipelines (GitHub Actions)',
          'Cloud Microservices (AWS / GCP)'
        ],
        suggestions: [
          'Add a dedicated "Cloud & DevOps" section specifying experience with Docker or Kubernetes.',
          'Incorporate GraphQL or Apollo Client keywords if targeting Senior Full Stack roles.',
          'Replace generic phrases like "managed database" with specific action verbs like "engineered database schemas".'
        ]
      });
    }, 1200);
  };

  return (
    <div className="min-h-screen space-y-6 pb-20">
      <AppNav />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 pt-4">
        
        {/* Header */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-2">
            <FileText className="w-6 h-6 text-indigo-400" />
            ATS Resume Analyzer
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Audit your resume formatting, keyword density, action verbs, and ATS pass rates in seconds.
          </p>
        </div>

        {/* INPUT FORM SECTION */}
        <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div>
              <h2 className="text-base font-bold text-white">Paste Your Resume Content</h2>
              <p className="text-xs text-slate-400">Copy and paste your resume text below for instant AI parsing.</p>
            </div>

            <button
              type="button"
              onClick={handleFillSample}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-500/10 border border-indigo-500/30 hover:bg-indigo-500/20 text-indigo-300 text-xs font-semibold transition-all"
            >
              <Zap className="w-3.5 h-3.5 text-indigo-400" /> Fill Sample Resume
            </button>
          </div>

          <form onSubmit={handleAnalyze} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                Resume Content / Plain Text
              </label>
              <textarea
                rows="8"
                value={resumeText}
                onChange={(e) => setResumeText(e.target.value)}
                placeholder="Paste your resume summary, experience, skills, and education text here..."
                className="w-full px-4 py-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-all font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                Target Job Description (Optional for keyword matching)
              </label>
              <input
                type="text"
                value={targetJobText}
                onChange={(e) => setTargetJobText(e.target.value)}
                placeholder="e.g. Senior Full Stack Developer proficient in React, Node.js, TypeScript, Docker, and GraphQL."
                className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={analyzing || !resumeText.trim()}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 disabled:opacity-50 text-white font-bold text-xs shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 transition-all"
            >
              {analyzing ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  Running ATS Analysis Engine...
                </>
              ) : (
                <>
                  <Search className="w-4 h-4" />
                  Analyze ATS Compatibility
                </>
              )}
            </button>
          </form>
        </div>

        {/* RESULTS SECTION (EXACT REQUIREMENTS: Mock ATS Score, Strengths, Missing Keywords, Suggestions) */}
        {results && (
          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-indigo-500/30 space-y-8 animate-in fade-in slide-in-from-bottom duration-300">
            
            {/* Top Score Banner */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center p-6 rounded-2xl bg-slate-950/90 border border-slate-800">
              <div className="text-center md:text-left">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">ATS Match Score</span>
                <div className="text-5xl font-black text-indigo-400 mt-1">{results.atsScore}%</div>
                <div className="text-xs text-emerald-400 mt-1 font-semibold">✓ Outstanding Compatibility</div>
              </div>

              <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                  <div className="text-[11px] text-slate-400">Impact Verbs</div>
                  <div className="text-lg font-bold text-indigo-400">{results.categoryScores.impactVerbs}%</div>
                </div>
                <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                  <div className="text-[11px] text-slate-400">Formatting</div>
                  <div className="text-lg font-bold text-purple-400">{results.categoryScores.formatting}%</div>
                </div>
                <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                  <div className="text-[11px] text-slate-400">Keywords</div>
                  <div className="text-lg font-bold text-cyan-400">{results.categoryScores.keywordMatch}%</div>
                </div>
                <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                  <div className="text-[11px] text-slate-400">Metrics</div>
                  <div className="text-lg font-bold text-emerald-400">{results.categoryScores.quantifiedMetrics}%</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* STRENGTHS */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Key Resume Strengths
                </h3>
                <div className="space-y-2.5">
                  {results.strengths.map((str, i) => (
                    <div key={i} className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-200 flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{str}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* MISSING KEYWORDS */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-rose-400" />
                  Missing High-Value Keywords
                </h3>
                <div className="space-y-2.5">
                  {results.missingKeywords.map((kw, i) => (
                    <div key={i} className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-xs text-rose-200 flex items-center justify-between">
                      <span className="flex items-center gap-2 font-medium">
                        <AlertTriangle className="w-4 h-4 text-rose-400" />
                        {kw}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-rose-500/20 text-[10px] font-bold uppercase">Add to Skills</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* ACTIONABLE SUGGESTIONS */}
            <div className="space-y-4 pt-4 border-t border-slate-800">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-indigo-400" />
                Actionable AI Suggestions
              </h3>
              <div className="space-y-2">
                {results.suggestions.map((sug, i) => (
                  <div key={i} className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300 flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-indigo-600/20 text-indigo-400 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span>{sug}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
