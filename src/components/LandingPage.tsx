import React from 'react';
import { useTranslation } from 'react-i18next';
import { Swords, Shield, Zap, TrendingUp, Users, ChevronRight } from 'lucide-react';

interface LandingPageProps {
  onEnterDashboard: () => void;
}

const FEATURE_ITEMS = [
  {
    icon: <Zap className="w-5 h-5 text-amber-400" />,
    titleKey: 'landing.feature1Title',
    titleFallback: 'Real-Time Counter Picks',
    descKey: 'landing.feature1Desc',
    descFallback: 'Instant hero counter recommendations based on enemy draft composition.',
  },
  {
    icon: <Users className="w-5 h-5 text-purple-400" />,
    titleKey: 'landing.feature2Title',
    titleFallback: 'Team Synergy Analysis',
    descKey: 'landing.feature2Desc',
    descFallback: 'Find heroes that synergize best with your current team picks.',
  },
  {
    icon: <Shield className="w-5 h-5 text-blue-400" />,
    titleKey: 'landing.feature3Title',
    titleFallback: 'Item Counter Priority',
    descKey: 'landing.feature3Desc',
    descFallback: 'Anti-heal, anti-burst, anti-shield item recommendations per enemy comp.',
  },
  {
    icon: <TrendingUp className="w-5 h-5 text-emerald-400" />,
    titleKey: 'landing.feature4Title',
    titleFallback: '5v5 Draft Simulator',
    descKey: 'landing.feature4Desc',
    descFallback: 'Full ban/pick simulation for all 5 roles: Roam, Clash, Mid, Farm, Jungle.',
  },
];

export const LandingPage: React.FC<LandingPageProps> = ({ onEnterDashboard }) => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white flex flex-col overflow-x-hidden">
      {/* Ambient Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-purple-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] bg-amber-900/15 rounded-full blur-[100px]" />
        <div className="absolute top-1/3 right-0 w-[300px] h-[300px] bg-indigo-900/20 rounded-full blur-[80px]" />
      </div>

      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-4 md:px-12 border-b border-white/5">
        <div className="flex items-center gap-2.5">
          <div className="bg-amber-500/10 border border-amber-500/30 p-2 rounded-lg">
            <Swords className="w-5 h-5 text-amber-400" />
          </div>
          <span className="font-black text-lg tracking-tight bg-gradient-to-r from-amber-400 via-orange-400 to-red-500 bg-clip-text text-transparent">
            HOK DRAFT
          </span>
        </div>
        <button
          onClick={onEnterDashboard}
          className="flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-white/5"
        >
          {t('landing.launchApp', { defaultValue: 'Launch App' })}
          <ChevronRight className="w-4 h-4" />
        </button>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center text-center px-4 pt-20 pb-16 md:pt-32 md:pb-24 flex-1">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold px-3 py-1.5 rounded-full mb-6 tracking-wider uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          {t('landing.badge', { defaultValue: 'Honor of Kings · Draft Tool' })}
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 max-w-4xl">
          <span className="bg-gradient-to-r from-amber-400 via-orange-300 to-red-400 bg-clip-text text-transparent">
            HOK DRAFT
          </span>
          <br />
          <span className="text-white">
            {t('landing.titleLine2', { defaultValue: '& COUNTER ANALYZER' })}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-white/50 text-base md:text-lg max-w-xl mb-10 leading-relaxed">
          {t('landing.subtitle', {
            defaultValue:
              'Dominate every draft. Real-time counter picks, synergy analysis, and item recommendations for 5v5 ranked play.',
          })}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={onEnterDashboard}
            className="group flex items-center gap-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-black text-sm md:text-base px-8 py-4 rounded-xl transition-all shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-[1.02]"
          >
            <Swords className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            {t('landing.ctaPrimary', { defaultValue: 'START DRAFT SIMULATION' })}
          </button>
          <button
            onClick={onEnterDashboard}
            className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/25 text-white font-semibold text-sm md:text-base px-8 py-4 rounded-xl transition-all"
          >
            {t('landing.ctaSecondary', { defaultValue: 'GET STARTED' })}
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Meta Stats */}
        <div className="flex flex-wrap justify-center gap-6 mt-14 text-center">
          {[
            { label: 'Heroes', value: '120+' },
            { label: 'Counter Edges', value: '236+' },
            { label: 'Synergy Pairs', value: '233+' },
            { label: 'Roles', value: '5' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-black text-amber-400">{stat.value}</span>
              <span className="text-xs text-white/40 mt-0.5 uppercase tracking-widest">{stat.label}</span>
            </div>
          ))}
        </div>
      </main>

      {/* Features Grid */}
      <section className="relative z-10 max-w-5xl mx-auto w-full px-4 pb-20 md:pb-28">
        <div className="text-center mb-10">
          <h2 className="text-xl md:text-2xl font-black text-white mb-2">
            {t('landing.featuresTitle', { defaultValue: 'Everything You Need to Win Draft' })}
          </h2>
          <p className="text-white/40 text-sm">
            {t('landing.featuresSubtitle', { defaultValue: 'Built for competitive Honor of Kings players.' })}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {FEATURE_ITEMS.map((f, i) => (
            <div
              key={i}
              className="bg-white/[0.03] border border-white/10 hover:border-white/20 rounded-xl p-5 flex items-start gap-4 transition-colors group"
            >
              <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-white/20 transition-colors">
                {f.icon}
              </div>
              <div>
                <h3 className="font-bold text-sm text-white mb-1">
                  {t(f.titleKey, { defaultValue: f.titleFallback })}
                </h3>
                <p className="text-xs text-white/45 leading-relaxed">
                  {t(f.descKey, { defaultValue: f.descFallback })}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Draft Board Preview strip */}
        <div className="mt-10 bg-white/[0.03] border border-white/10 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col gap-1 text-center md:text-left">
            <p className="font-black text-white text-base">
              {t('landing.draftPreviewTitle', { defaultValue: 'Live Draft Board' })}
            </p>
            <p className="text-white/40 text-xs">
              {t('landing.draftPreviewDesc', { defaultValue: 'Select picks & bans, get instant analysis as you draft.' })}
            </p>
          </div>
          <div className="flex gap-2">
            {/* Blue Team slots */}
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={`b${i}`}
                className="w-8 h-8 md:w-10 md:h-10 rounded-md border border-blue-500/40 bg-blue-500/10 flex items-center justify-center text-blue-400/50 text-[10px] font-bold"
              >
                {i + 1}
              </div>
            ))}
            <div className="w-px bg-white/10 mx-1" />
            {/* Red Team slots */}
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={`r${i}`}
                className="w-8 h-8 md:w-10 md:h-10 rounded-md border border-red-500/40 bg-red-500/10 flex items-center justify-center text-red-400/50 text-[10px] font-bold"
              >
                {i + 1}
              </div>
            ))}
          </div>
          <button
            onClick={onEnterDashboard}
            className="flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 hover:bg-amber-500/20 text-amber-400 font-bold text-sm px-5 py-2.5 rounded-lg transition-all whitespace-nowrap"
          >
            <Swords className="w-4 h-4" />
            {t('landing.openDraft', { defaultValue: 'Open Draft' })}
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 px-6 py-4 text-center">
        <p className="text-white/25 text-xs">
          HOK Draft & Counter Analyzer · Built for competitive play ·{' '}
          <span className="text-white/40">120+ heroes</span>
        </p>
      </footer>
    </div>
  );
};
