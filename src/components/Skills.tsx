import { useState } from 'react';
import { skillCategories } from '../data/skills';
import {
  Code2,
  Server,
  Database,
  Layout,
  Wrench,
  Cpu,
  Coffee,
  Code,
  Shield,
  Layers,
  HardDrive,
  Globe,
  Terminal,
  Component,
  GitBranch,
  Box,
  Send,
  Blocks,
  ListOrdered,
  AlertCircle,
  Workflow,
  Key,
  Network,
  RotateCw,
  LayoutGrid
} from 'lucide-react';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'languages':
        return <Code2 className="w-5 h-5 text-[#3B82F6]" />;
      case 'backend':
        return <Server className="w-5 h-5 text-[#FACC15]" />;
      case 'database':
        return <Database className="w-5 h-5 text-[#3B82F6]" />;
      case 'frontend':
        return <Layout className="w-5 h-5 text-[#22C55E]" />;
      case 'tools':
        return <Wrench className="w-5 h-5 text-[#3B82F6]" />;
      case 'concepts':
        return <Cpu className="w-5 h-5 text-[#FACC15]" />;
      default:
        return <Code2 className="w-5 h-5 text-[#3B82F6]" />;
    }
  };

  const getSkillIcon = (iconName?: string) => {
    switch (iconName) {
      case 'Coffee':
        return <Coffee className="w-4 h-4 text-[#FACC15]" />;
      case 'Code':
      case 'Code2':
        return <Code className="w-4 h-4 text-[#3B82F6]" />;
      case 'Server':
        return <Server className="w-4 h-4 text-[#3B82F6]" />;
      case 'Shield':
        return <Shield className="w-4 h-4 text-[#22C55E]" />;
      case 'Layers':
        return <Layers className="w-4 h-4 text-[#3B82F6]" />;
      case 'Database':
      case 'HardDrive':
        return <Database className="w-4 h-4 text-[#3B82F6]" />;
      case 'Globe':
        return <Globe className="w-4 h-4 text-[#3B82F6]" />;
      case 'Terminal':
        return <Terminal className="w-4 h-4 text-[#FACC15]" />;
      case 'Component':
        return <Component className="w-4 h-4 text-[#3B82F6]" />;
      case 'GitBranch':
      case 'GitFork':
        return <GitBranch className="w-4 h-4 text-[#FACC15]" />;
      case 'Box':
        return <Box className="w-4 h-4 text-[#3B82F6]" />;
      case 'Send':
        return <Send className="w-4 h-4 text-[#22C55E]" />;
      case 'Blocks':
        return <Blocks className="w-4 h-4 text-[#3B82F6]" />;
      case 'ListOrdered':
        return <ListOrdered className="w-4 h-4 text-[#FACC15]" />;
      case 'AlertCircle':
        return <AlertCircle className="w-4 h-4 text-[#22C55E]" />;
      case 'Workflow':
        return <Workflow className="w-4 h-4 text-[#3B82F6]" />;
      case 'Key':
        return <Key className="w-4 h-4 text-[#FACC15]" />;
      case 'Network':
        return <Network className="w-4 h-4 text-[#3B82F6]" />;
      case 'RotateCw':
        return <RotateCw className="w-4 h-4 text-[#94A3B8]" />;
      case 'LayoutGrid':
        return <LayoutGrid className="w-4 h-4 text-[#3B82F6]" />;
      default:
        return <Code2 className="w-4 h-4 text-[#3B82F6]" />;
    }
  };

  const categoriesFilter = [
    { id: 'all', label: 'All Disciplines' },
    { id: 'languages', label: 'Languages' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Databases' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'tools', label: 'Tools' },
    { id: 'concepts', label: 'Concepts' },
  ];

  const filteredCategories =
    selectedCategory === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.category === selectedCategory);

  return (
    <section id="skills" className="py-24 relative bg-[#080B14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111827] border border-slate-800 text-[#3B82F6] font-mono text-xs font-medium">
            <span>&lt;stack &amp; capabilities /&gt;</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8FAFC] tracking-tight">
            Technical Skills
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8]">
            Categorized technical capabilities and real-world tools, focused on robust backend engineering and modern full-stack workflows.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {categoriesFilter.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  selectedCategory === tab.id
                    ? 'bg-[#2563EB] text-white shadow-md shadow-blue-600/30'
                    : 'bg-[#111827] text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#151C2C] border border-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => (
            <div
              key={cat.category}
              className="p-6 rounded-2xl bg-[#111827] border border-slate-800/90 hover:border-slate-700 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-black/30 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 pb-4 mb-4 border-b border-slate-800/80">
                  <div className="p-2.5 rounded-xl bg-[#080B14] border border-slate-800">
                    {getCategoryIcon(cat.category)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#F8FAFC] tracking-tight">
                      {cat.title}
                    </h3>
                    <p className="text-[11px] font-mono text-[#94A3B8]">
                      {cat.skills.length} competencies
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group/badge px-3 py-2 rounded-xl bg-[#0D1220] border border-slate-800 hover:border-[#3B82F6]/50 hover:bg-[#151C2C] transition-all duration-200 flex items-center gap-2"
                    >
                      <span className="p-1 rounded-md bg-[#080B14] border border-slate-800 group-hover/badge:border-slate-700 transition-colors">
                        {getSkillIcon(skill.iconName)}
                      </span>
                      <div className="flex flex-col">
                        <span className="text-xs font-semibold text-[#CBD5E1] group-hover/badge:text-[#F8FAFC] transition-colors">
                          {skill.name}
                        </span>
                        {skill.level && (
                          <span className="text-[10px] font-mono text-[#94A3B8]">
                            {skill.level}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-[#94A3B8]">
                <span>Verified in projects</span>
                <span className="text-[#22C55E]">● Active</span>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Code Note Strip */}
        <div className="mt-12 p-4 rounded-xl bg-[#0D1220] border border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#94A3B8]">
          <div className="flex items-center gap-2">
            <span className="text-[#FACC15]">// Architecture philosophy:</span>
            <span>Layered Architecture (Controller ➔ Service ➔ Repository ➔ DB)</span>
          </div>
          <div className="text-[#3B82F6]">
            Strict Type Safety &amp; REST Standards
          </div>
        </div>
      </div>
    </section>
  );
}
