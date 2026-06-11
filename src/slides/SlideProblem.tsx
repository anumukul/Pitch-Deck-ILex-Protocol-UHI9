import * as React from 'react';
import { X, TrendingDown, AlertTriangle } from 'lucide-react';
import { Card } from '../components/ui';

const Shield: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

export const SlideProblem: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center h-full">
    <div className="anim-in">
      <div className="inline-flex items-center gap-2 rounded-full bg-red-500/10 border border-red-500/20 px-3 py-1 mb-5 text-xs font-semibold text-red-400">
        <AlertTriangle size={12} /> The Problem
      </div>
      <h3 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
        IL Kills LP Returns
      </h3>
      <p className="text-base md:text-lg font-medium text-gray-300 mb-6 bg-white/[0.03] rounded-xl p-4 border border-white/5">
        Concentrated LP positions suffer{' '}
        <span className="text-red-400 font-bold">massive impermanent loss</span>{' '}
        during volatile moves with no safety net.
      </p>
      <div className="space-y-3 text-sm">
        <div className="flex items-center gap-3 rounded-xl bg-red-500/5 border border-red-500/10 p-3">
          <X size={18} className="text-red-400 shrink-0" />
          <span className="text-gray-400">No automated protection exists today</span>
        </div>
        <div className="flex items-center gap-3 rounded-xl bg-red-500/5 border border-red-500/10 p-3">
          <X size={18} className="text-red-400 shrink-0" />
          <span className="text-gray-400">Bots and keepers are centralized and expensive</span>
        </div>
        <div className="flex items-center gap-3 rounded-xl bg-red-500/5 border border-red-500/10 p-3">
          <X size={18} className="text-red-400 shrink-0" />
          <span className="text-gray-400">LPs must watch positions 24/7</span>
        </div>
      </div>
      <div className="mt-5 flex items-center gap-2 text-sm font-bold text-red-400">
        <AlertTriangle size={16} /> Result: LPs lose yield to IL
      </div>
    </div>

    <div className="flex flex-col items-center gap-8 anim-right">
      <Card className="w-3/4 text-center opacity-50">
        <h4 className="font-bold text-gray-500 mb-3">Typical LP</h4>
        <TrendingDown size={48} className="mx-auto text-red-500/50" />
        <div className="mt-3 text-xs font-bold text-red-500/50 uppercase tracking-wider">Watch &amp; Hope</div>
      </Card>

      <div className="text-xs font-bold text-gray-600 bg-white/5 rounded-full px-4 py-1">VS</div>

      <div className="w-3/4 glow-card rounded-2xl p-6 text-center bg-gradient-to-br from-purple-500/10 to-cyan-500/10">
        <Shield className="mx-auto mb-2 text-purple-400" />
        <h4 className="font-black text-lg text-white mb-1">ILex LP</h4>
        <p className="text-sm font-medium text-gray-300">Set &amp; Forget Protection</p>
        <div className="mt-3 inline-block text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
          Protected Automatically
        </div>
      </div>
    </div>
  </div>
);

export default SlideProblem;
