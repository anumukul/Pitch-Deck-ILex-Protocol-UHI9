import * as React from 'react';
import { Shield, Zap, TrendingUp } from 'lucide-react';
import { Badge } from '../components/ui';

export const SlideIntro: React.FC = () => (
  <div className="flex flex-col items-center justify-center h-full text-center py-8">
    <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 border border-purple-500/20 px-4 py-1.5 mb-10 text-xs font-semibold text-purple-300 tracking-wider uppercase">
      Uniswap v4 Hook + Reactive Network
    </div>

    <div className="relative mb-6">
      <h1 className="text-8xl md:text-[10rem] font-black tracking-tighter text-white leading-none">
        ILex
      </h1>
      <div className="absolute -top-2 -right-16 md:-right-24 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs md:text-sm font-bold px-3 py-1 rounded-lg shadow-lg shadow-cyan-500/20">
        v1.0.0
      </div>
    </div>

    <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
      Impermanent Loss Protection
    </h2>

    <p className="text-base md:text-lg text-gray-400 max-w-xl mb-8 leading-relaxed">
      An automated <strong className="text-white">Uniswap v4 hook</strong> powered by{' '}
      <strong className="text-white">Reactive Network</strong> that monitors, exits, and re-enters
      LP positions when IL hits your limit.
    </p>

    <div className="flex flex-wrap justify-center gap-3">
      <Badge text="ILexHook.sol" icon={Shield} color="purple" />
      <Badge text="ILexReactive.sol" icon={Zap} color="cyan" />
      <Badge text="No Bots" icon={TrendingUp} color="emerald" />
    </div>
  </div>
);

export default SlideIntro;
