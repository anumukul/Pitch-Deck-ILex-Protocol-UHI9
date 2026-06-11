import * as React from 'react';
import { Shield, Database, Zap, ArrowRight, ArrowLeft } from 'lucide-react';

export const SlideArchitecture: React.FC = () => (
  <div className="flex flex-col items-center justify-center h-full">
    <div className="text-center mb-6">
      <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 mb-4 text-xs font-semibold text-cyan-400">
        Architecture
      </div>
      <h3 className="text-4xl font-black">System Design</h3>
    </div>

    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 w-full max-w-5xl">
      {/* Left: Unichain Sepolia */}
      <div className="flex-1 space-y-3">
        <div className="text-center text-xs font-bold text-purple-400 uppercase tracking-wider mb-3">Unichain Sepolia</div>

        {/* Pool */}
        <div className="glass rounded-xl px-5 py-3 text-center border border-purple-500/10">
          <div className="text-xs text-gray-500 font-medium mb-0.5">Uniswap v4</div>
          <div className="font-bold text-sm text-white">PoolManager</div>
          <div className="text-[10px] text-gray-600">modifyLiquidity · swap</div>
        </div>

        <div className="flex justify-center">
          <ArrowLeftRight />
        </div>

        {/* Hook */}
        <div className="glass rounded-xl px-5 py-3 text-center border border-purple-500/20 glow-card bg-gradient-to-r from-purple-500/5 to-purple-500/10">
          <Shield size={20} className="mx-auto mb-1 text-purple-500" />
          <div className="font-black text-sm text-white">ILexHook</div>
          <div className="text-[10px] text-purple-300 font-medium">afterSwap · deposit · exit · reentry</div>
        </div>

        <div className="flex justify-center">
          <ArrowDown />
        </div>

        {/* Lending Pool */}
        <div className="glass rounded-xl px-5 py-3 text-center border border-emerald-500/10">
          <Database size={18} className="mx-auto mb-1 text-emerald-400" />
          <div className="font-bold text-sm text-white">Lending Pool</div>
          <div className="text-[10px] text-emerald-300 font-medium">Yield while parked</div>
        </div>
      </div>

      {/* Center: Event flow */}
      <div className="flex flex-col items-center gap-2">
        <div className="glass rounded-full px-3 py-1.5 text-[10px] font-bold text-cyan-400 border border-cyan-500/20">
          events →
        </div>
        <div className="w-px h-6 bg-gradient-to-b from-cyan-500/40 to-transparent" />
        <div className="glass rounded-full px-3 py-1.5 text-[10px] font-bold text-purple-400 border border-purple-500/20">
          ← callbacks
        </div>
      </div>

      {/* Right: Reactive Network */}
      <div className="flex-1 space-y-3">
        <div className="text-center text-xs font-bold text-cyan-400 uppercase tracking-wider mb-3">Reactive Network Lasna</div>

        {/* RSC */}
        <div className="glass rounded-xl px-5 py-4 text-center border border-cyan-500/20 bg-gradient-to-r from-cyan-500/5 to-cyan-500/10">
          <Zap size={22} className="mx-auto mb-1 text-cyan-400" />
          <div className="font-black text-sm text-white">ILexReactive</div>
          <div className="text-[10px] text-cyan-300 font-medium">RSC · subscribes to topics</div>
        </div>

        <div className="flex justify-center">
          <ArrowDown />
        </div>

        {/* Subscriptions */}
        <div className="space-y-2">
          <div className="glass rounded-lg px-4 py-2 text-center border border-white/5">
            <div className="text-[10px] font-medium text-gray-400">
              TOPIC_POSITION_CREATED
            </div>
          </div>
          <div className="glass rounded-lg px-4 py-2 text-center border border-white/5">
            <div className="text-[10px] font-medium text-gray-400">
              TOPIC_PRICE_UPDATE
            </div>
          </div>
          <div className="glass rounded-lg px-4 py-2 text-center border border-white/5">
            <div className="text-[10px] font-medium text-gray-400">
              react() → checks IL → fires callback
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Flow description */}
    <div className="mt-5 flex flex-wrap justify-center gap-2 text-[10px] text-gray-600 font-medium">
      <span className="glass rounded-lg px-2.5 py-1">① LP deposits via Hook → Pool adds liquidity</span>
      <span className="glass rounded-lg px-2.5 py-1">② Swap emits PriceUpdate → RSC detects</span>
      <span className="glass rounded-lg px-2.5 py-1">③ IL breached → RSC fires triggerExit()</span>
      <span className="glass rounded-lg px-2.5 py-1">④ Hook → remove LP → supply to Lending Pool</span>
      <span className="glass rounded-lg px-2.5 py-1">⑤ Price recovers → RSC fires triggerReentry()</span>
    </div>
  </div>
);

const ArrowLeftRight: React.FC = () => (
  <div className="flex items-center gap-1 text-purple-400/60">
    <ArrowRight size={12} />
    <ArrowLeft size={12} />
  </div>
);

const ArrowDown: React.FC = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" className="text-gray-600">
    <polygon points="6,12 0,0 12,0" fill="currentColor" />
  </svg>
);

export default SlideArchitecture;
