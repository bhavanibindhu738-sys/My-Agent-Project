import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Compass, 
  FileText, 
  Briefcase, 
  Target, 
  Bot, 
  MessageSquareCode, 
  CheckCircle2, 
  ArrowRight, 
  TrendingUp, 
  Award, 
  Zap, 
  ShieldCheck, 
  Users, 
  Search, 
  Upload, 
  BarChart3, 
  GraduationCap, 
  Brain, 
  Layers, 
  ChevronRight, 
  Terminal, 
  Check, 
  Star,
  BookOpen,
  Send,
  Building2,
  DollarSign,
  Video
} from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('resume');
  const [demoText, setDemoText] = useState('');
  const [scanning, setScanning] = useState(false);
  const [scanResult, setScanResult] = useState(null);

  const handleDemoScan = (e) => {
    e.preventDefault();
    if (!demoText.trim()) return;

    setScanning(true);
    setScanResult(null);

    setTimeout(() => {
      setScanning(false);
      setScanResult({
        atsScore: 92,
        foundKeywords: ['React.js', 'Tailwind CSS', 'TypeScript', 'Node.js', 'REST APIs'],
        missingKeywords: ['Docker', 'GraphQL', 'AWS EC2'],
        verdict: 'Excellent formatting! Adding 2 quantified metrics (e.g., "Reduced latency by 35%") will push score to 98%.'
      });
    }, 1000);
  };

  const featureTabs = [
    { id: 'guidance', name: 'AI Guidance', icon: Compass, color: 'from-blue-500 to-indigo-500' },
    { id: 'resume', name: 'ATS Resume', icon: FileText, color: 'from-indigo-500 to-purple-500' },
    { id: 'matching', name: 'Job Matching', icon: Briefcase, color: 'from-purple-500 to-pink-500' },
    { id: 'gap', name: 'Skill Gap', icon: Target, color: 'from-pink-500 to-rose-500' },
    { id: 'interview', name: 'Interview Prep', icon: Video, color: 'from-emerald-500 to-teal-500' },
    { id: 'assistant', name: 'AI Assistant', icon: MessageSquareCode, color: 'from-cyan-500 to-blue-500' },
  ];

  const steps = [
    {
      number: '01',
      title: 'Create Account & Profile Setup',
      desc: 'Sign up in 30 seconds and define your target job title, experience level, and preferred location or remote preferences.',
      icon: Users
    },
    {
      number: '02',
      title: 'Upload Resume & Skill Audit',
      desc: 'Upload your existing PDF/Word resume or paste raw experience text to parse your technical skills and ATS readability.',
      icon: FileText
    },
    {
      number: '03',
      title: 'Get AI Career Guidance & Skill Gap Insights',
      desc: 'Receive personalized salary benchmarks, industry growth metrics, and a curated roadmap to master missing skills.',
      icon: Brain
    },
    {
      number: '04',
      title: 'Instant Job Matching & Applications',
      desc: 'Browse live job postings with real-time match percentage badges and apply with 1-click synced tracking.',
      icon: Briefcase
    },
    {
      number: '05',
      title: 'Master Interview Prep & Land Your Role',
      desc: 'Practice STAR-formatted technical and behavioral interview questions with instant AI scoring and model answers.',
      icon: Award
    }
  ];

  return (
    <div className="space-y-28 pb-24 overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 sm:pt-20 lg:pt-28">
        
        {/* Glowing Background Orbs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-tr from-indigo-600/30 via-purple-600/20 to-cyan-500/20 blur-[140px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-8 shadow-inner animate-pulse">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Empowering Next-Gen Students & Job Seekers</span>
          </div>

          {/* Main Title - EXACT REQ */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08] max-w-5xl mx-auto">
            Build Your Career With <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent">
              AI Precision Intelligence
            </span>
          </h1>

          {/* Subtitle - EXACT REQ */}
          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            CareerLynx analyzes your skills, resume and career goals to provide personalized career guidance, job matching and interview preparation.
          </p>

          {/* Action Buttons - EXACT REQ */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/register"
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-base shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 transition-all transform hover:-translate-y-0.5"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>

            <a
              href="#features"
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-bold text-base transition-all"
            >
              Explore Features
              <Compass className="w-5 h-5 text-indigo-400" />
            </a>
          </div>

          {/* Hero SaaS Showcase Card */}
          <div className="mt-16 max-w-5xl mx-auto glass-card p-4 sm:p-6 rounded-3xl border border-indigo-500/30 shadow-2xl relative">
            <div className="flex items-center justify-between px-4 pb-4 border-b border-slate-800/80 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 font-mono text-slate-400">careerlynx.ai/dashboard</span>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-medium">
                ● Live AI Match Engine v4.2
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 text-left">
              <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>ATS Score Audit</span>
                  <FileText className="w-4 h-4 text-indigo-400" />
                </div>
                <div className="text-3xl font-black text-indigo-400">94%</div>
                <div className="text-xs text-slate-300">Target Role: <strong className="text-white">Full Stack Engineer</strong></div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-indigo-500 h-full w-[94%]" />
                </div>
              </div>

              <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Target Skill Gap</span>
                  <Target className="w-4 h-4 text-purple-400" />
                </div>
                <div className="text-3xl font-black text-purple-400">88%</div>
                <div className="text-xs text-slate-300">Missing: <span className="text-rose-400 font-semibold">Docker, GraphQL</span></div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-purple-500 h-full w-[88%]" />
                </div>
              </div>

              <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Interview Readiness</span>
                  <Award className="w-4 h-4 text-cyan-400" />
                </div>
                <div className="text-3xl font-black text-cyan-400">Level 4</div>
                <div className="text-xs text-slate-300">Completed 12 Technical Sims</div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-cyan-400 h-full w-[80%]" />
                </div>
              </div>
            </div>
          </div>

          {/* Social Proof Trust Bar */}
          <div className="mt-14 flex flex-wrap items-center justify-center gap-8 sm:gap-12 text-slate-400 text-xs font-semibold uppercase tracking-wider">
            <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-emerald-400" /> 100% Privacy Compliant</span>
            <span className="flex items-center gap-2"><Award className="w-4 h-4 text-indigo-400" /> 98.4% ATS Parser Accuracy</span>
            <span className="flex items-center gap-2"><Users className="w-4 h-4 text-purple-400" /> 12,500+ Hired Candidates</span>
          </div>

        </div>
      </section>

      {/* 2. DEDICATED FEATURE SECTIONS (ALL 6 REQUIRED MODULES) */}
      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest bg-indigo-500/10 px-3.5 py-1.5 rounded-full border border-indigo-500/20">
            Intelligent Platform Suite
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mt-4">
            Everything You Need for Career Success
          </h2>
          <p className="text-slate-400 text-base mt-3">
            Six specialized AI tools designed to take you from resume polishing to landing high-paying job offers.
          </p>
        </div>

        {/* FEATURE 1: AI CAREER GUIDANCE */}
        <div className="mb-16 glass-card p-8 sm:p-12 rounded-3xl border border-indigo-500/20 glass-card-hover relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                1. AI Career Guidance
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Discover personalized career paths tailored to your background. CareerLynx maps out target salary ranges, regional job growth metrics, and step-by-step career ladders from Junior to Principal Engineer.
              </p>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Personalized role trajectory & 5-year outlook</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Real-time salary benchmark calculator</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Curated learning pathways & certification recommendations</li>
              </ul>
            </div>
            <div className="bg-slate-950/90 p-6 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-400 pb-3 border-b border-slate-800">
                <span className="font-semibold text-white">Recommended Trajectory: Full Stack Specialist</span>
                <span className="text-indigo-400 font-bold">$125,000 / yr avg</span>
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between text-slate-300"><span>Mid-Level Developer (2-4 yrs)</span><span className="text-emerald-400 font-medium">94% Match</span></div>
                <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden"><div className="bg-indigo-500 h-full w-[94%]" /></div>
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between text-slate-300"><span>Senior Systems Architect (5+ yrs)</span><span className="text-purple-400 font-medium">Goal Path</span></div>
                <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden"><div className="bg-purple-500 h-full w-[78%]" /></div>
              </div>
            </div>
          </div>
        </div>

        {/* FEATURE 2: ATS RESUME ANALYZER */}
        <div className="mb-16 glass-card p-8 sm:p-12 rounded-3xl border border-purple-500/20 glass-card-hover relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="order-2 lg:order-1 bg-slate-950/90 p-6 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">ATS Parsing Engine Results</span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-bold">Passed Filters</span>
              </div>
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="bg-slate-900 p-3 rounded-xl border border-slate-800"><div className="text-xs text-slate-400">Impact</div><div className="text-lg font-bold text-indigo-400">96/100</div></div>
                <div className="bg-slate-900 p-3 rounded-xl border border-slate-800"><div className="text-xs text-slate-400">Format</div><div className="text-lg font-bold text-purple-400">92/100</div></div>
                <div className="bg-slate-900 p-3 rounded-xl border border-slate-800"><div className="text-xs text-slate-400">Keywords</div><div className="text-lg font-bold text-cyan-400">89/100</div></div>
              </div>
              <div className="text-xs text-slate-300 bg-slate-900/60 p-3 rounded-xl border border-slate-800/80">
                💡 <strong>AI Tip:</strong> Replace passive verbs ("worked on") with high-impact action verbs ("orchestrated", "engineered").
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-5">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                2. ATS Resume Analyzer
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Over 75% of resumes are rejected by ATS filters before reaching human recruiters. CareerLynx evaluates your bullet points, section hierarchy, keyword density, and formatting to guarantee maximum compatibility.
              </p>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Instant ATS score gauge & keyword match table</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Bullet point rewriter with STAR method metrics</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> One-click formatting export for target job descriptions</li>
              </ul>
            </div>
          </div>
        </div>

        {/* FEATURE 3: SMART JOB MATCHING */}
        <div className="mb-16 glass-card p-8 sm:p-12 rounded-3xl border border-cyan-500/20 glass-card-hover relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                3. Smart Job Matching
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Stop applying blindly. CareerLynx automatically scores incoming job postings against your exact skills and experience level, highlighting high-alignment opportunities with custom match percentages.
              </p>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> AI Match Percentage badge (e.g. 96% Match)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Remote, hybrid, salary range, and experience filters</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> 1-click Quick Apply with auto-synced Application Kanban</li>
              </ul>
            </div>
            <div className="bg-slate-950/90 p-5 rounded-2xl border border-slate-800 space-y-3">
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-white">Senior Frontend React Engineer</div>
                  <div className="text-[11px] text-slate-400">TechCorp • Remote</div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-bold">96% Match</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-white">Full Stack Node.js Specialist</div>
                  <div className="text-[11px] text-slate-400">Innovate Labs • Hybrid</div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-bold">92% Match</span>
              </div>
            </div>
          </div>
        </div>

        {/* FEATURE 4: SKILL GAP ANALYSIS */}
        <div className="mb-16 glass-card p-8 sm:p-12 rounded-3xl border border-rose-500/20 glass-card-hover relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="order-2 lg:order-1 bg-slate-950/90 p-6 rounded-2xl border border-slate-800 space-y-3">
              <div className="text-xs font-semibold text-slate-400 mb-1">Target Skill Audit vs. Market Benchmark</div>
              <div className="flex items-center justify-between text-xs text-slate-300"><span>React & State Management</span><span className="text-emerald-400 font-bold">Mastered (95%)</span></div>
              <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden"><div className="bg-emerald-400 h-full w-[95%]" /></div>
              <div className="flex items-center justify-between text-xs text-slate-300"><span>Docker Containerization</span><span className="text-rose-400 font-bold">Gap (-35%)</span></div>
              <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden"><div className="bg-rose-400 h-full w-[40%]" /></div>
            </div>
            <div className="order-1 lg:order-2 space-y-5">
              <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                4. Skill Gap Analysis
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Know exactly what skills stand between you and a higher salary tier. Select your target job title and get a visual audit of missing technologies along with estimated learning timeframes.
              </p>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Target role competency radar & bar graphs</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Estimated hours to close key technical gaps</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Recommended courses & hands-on project ideas</li>
              </ul>
            </div>
          </div>
        </div>

        {/* FEATURE 5: INTERVIEW PREPARATION */}
        <div className="mb-16 glass-card p-8 sm:p-12 rounded-3xl border border-emerald-500/20 glass-card-hover relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Video className="w-6 h-6" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                5. Interview Preparation
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Build rock-solid confidence before your interview. Practice tailored technical, behavioral (STAR method), and system design questions with instant AI evaluation and model answers.
              </p>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Technical & behavioral interview question simulator</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Instant STAR format score & missing concepts notice</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Top company question banks with sample answers</li>
              </ul>
            </div>
            <div className="bg-slate-950/90 p-6 rounded-2xl border border-slate-800 space-y-3">
              <div className="text-xs font-semibold text-emerald-400">AI Interview Feedback</div>
              <p className="text-xs text-slate-300 bg-slate-900 p-3 rounded-xl border border-slate-800">
                "Great STAR structure! You clearly outlined the Situation and Task. To improve technical score, mention how you monitored API latency using Prometheus."
              </p>
              <div className="flex justify-between text-xs text-slate-400 pt-1">
                <span>Structure Score: <strong className="text-emerald-400">9/10</strong></span>
                <span>Clarity: <strong className="text-emerald-400">8.5/10</strong></span>
              </div>
            </div>
          </div>
        </div>

        {/* FEATURE 6: AI CAREER ASSISTANT */}
        <div className="glass-card p-8 sm:p-12 rounded-3xl border border-blue-500/20 glass-card-hover relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="order-2 lg:order-1 bg-slate-950/90 p-6 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-indigo-400 border-b border-slate-800 pb-2">
                <Bot className="w-4 h-4" /> CareerLynx AI Assistant Chat
              </div>
              <div className="bg-slate-900 p-3 rounded-xl text-xs text-slate-300">
                "Draft a 3-paragraph tailored cover letter for Senior Frontend Engineer at TechCorp highlighting my React & TypeScript achievements."
              </div>
              <div className="bg-indigo-600/20 p-3 rounded-xl text-xs text-indigo-200 border border-indigo-500/30">
                "Dear Hiring Manager, I am writing to express my enthusiasm for the Senior Frontend Engineer role at TechCorp. With over 3 years of experience..."
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-5">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <MessageSquareCode className="w-6 h-6" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                6. AI Career Assistant
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Your 24/7 personal career co-pilot. Generate tailored cover letters, refine resume bullet points, prepare salary negotiation scripts, and get instant answers to tough career questions.
              </p>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> One-click tailored cover letter generator</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Salary negotiation pitch generator</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Interactive career advice & resume bullet optimizer</li>
              </ul>
            </div>
          </div>
        </div>

      </section>

      {/* 3. HOW IT WORKS SECTION (5 STEPS - EXACT REQ) */}
      <section id="how-it-works" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest bg-indigo-500/10 px-3.5 py-1.5 rounded-full border border-indigo-500/20">
            5-Step Career Acceleration
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mt-4">
            How It Works
          </h2>
          <p className="text-slate-400 text-sm mt-3">
            Follow our proven 5-step roadmap to land your dream tech position faster.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx} 
                className="glass-card p-6 rounded-3xl border border-slate-800 glass-card-hover flex flex-col justify-between relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-black text-indigo-400/40 group-hover:text-indigo-400 transition-colors">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-indigo-400">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </section>

      {/* 4. ABOUT SECTION */}
      <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-10 sm:p-14 rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950/40 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest bg-indigo-500/10 px-3.5 py-1.5 rounded-full border border-indigo-500/20">
                About CareerLynx
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Empowering Students & Job Seekers Through Intelligent AI
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                CareerLynx was created to level the playing field for job seekers. Corporate ATS algorithms reject qualified candidates every day due to missing keywords or subtle formatting errors. 
              </p>
              <p className="text-sm text-slate-400 leading-relaxed">
                Our platform combines cutting-edge AI parsing, real-time job market matching, and interactive interview simulations into a single, unified workspace that puts candidates first.
              </p>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800">
                <div>
                  <div className="text-2xl font-black text-indigo-400">98.4%</div>
                  <div className="text-[11px] text-slate-400 uppercase">ATS Accuracy</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-purple-400">50K+</div>
                  <div className="text-[11px] text-slate-400 uppercase">Jobs Tracked</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-cyan-400">12.5K+</div>
                  <div className="text-[11px] text-slate-400 uppercase">Hired Candidates</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" /> 100% Privacy First Architecture
                </div>
                <p className="text-xs text-slate-400">
                  Your uploaded resumes, salary target data, and personal details remain securely stored in your local browser state.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <Brain className="w-5 h-5 text-indigo-400" /> Continuous Model Tuning
                </div>
                <p className="text-xs text-slate-400">
                  Our matching engine is continuously updated against real hiring patterns across top tech companies and startups.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <GraduationCap className="w-5 h-5 text-purple-400" /> Built for Students & Experienced Pros
                </div>
                <p className="text-xs text-slate-400">
                  Whether you are seeking your first internship or aiming for a Senior Engineer promotion, CareerLynx adapts to your career stage.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-12 sm:p-16 rounded-3xl border border-indigo-500/30 text-center relative overflow-hidden bg-gradient-to-r from-indigo-950/80 via-slate-900 to-purple-950/80 shadow-2xl">
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Build Your Career With AI Today
          </h2>
          <p className="text-slate-300 text-base max-w-2xl mx-auto mt-4 leading-relaxed">
            Join thousands of job seekers optimizing their resumes, mastering technical interviews, and landing top job offers.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/register"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-base shadow-xl shadow-indigo-600/30 transition-all transform hover:-translate-y-0.5"
            >
              Get Started Free
            </Link>
            <Link
              to="/login"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-base font-bold transition-all"
            >
              Sign In to Account
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
