import * as React from 'react';
import { Card } from '../components/ui';

const STEPS = [
  { num: '01', title: 'Deposit &amp; Configure', desc: 'Add your tokens and set your max IL tolerance.', color: 'from-purple-500/10 to-purple-500/5 border-purple-500/15' },
  { num: '02', title: 'RSC Monitors 24/7', desc: 'On-chain Reactive Smart Contract watches every swap.', color: 'from-cyan-500/10 to-cyan-500/5 border-cyan-500/15' },
  { num: '03', title: 'Auto-Exit on Breach', desc: 'When IL hits your limit, position exits to lending pool.', color: 'from-amber-500/10 to-amber-500/5 border-amber-500/15' },
  { num: '04', title: 'Auto-Reenter', desc: 'When price recovers, RSC re-adds liquidity + yield.', color: 'from-emerald-500/10 to-emerald-500/5 border-emerald-500/15' },
];

export const SlideSolution: React.FC = () => (
  <div className="flex flex-col items-center justify-center h-full">
    <div className="text-center mb-8">
      <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 mb-4 text-xs font-semibold text-emerald-400">
        The Solution
      </div>
      <h3 className="text-4xl md:text-5xl font-black">How It Works</h3>
      <p className="mt-2 text-sm text-gray-500 font-medium">Fully on-chain. No bots. No keepers.</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-4xl">
      {STEPS.map((step) => (
        <Card key={step.num} className={`text-center bg-gradient-to-b ${step.color} border ${step.color.split(' ')[2]}`}>
          <div className="text-3xl font-black text-white mb-2">{step.num}</div>
          <h4 className="font-bold text-sm md:text-base text-white mb-2" dangerouslySetInnerHTML={{ __html: step.title }} />
          <p className="text-xs text-gray-500 font-medium">{step.desc}</p>
        </Card>
      ))}
    </div>

    <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 px-4 py-2 text-xs font-semibold text-purple-300">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
      Powered by Reactive Network
    </div>
  </div>
);

export default SlideSolution;
