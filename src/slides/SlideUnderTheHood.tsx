import * as React from 'react';
import { Card } from '../components/ui';

const DETAILS = [
  {
    title: 'IL Math',
    desc: 'Compares entry sqrtPriceX96 vs current price. IL = |1 - sqrt(Pcurrent/Pentry)|. Protected against division by zero.',
    lang: 'ILMath.sol',
    color: 'from-purple-500/10 to-purple-500/5 border-purple-500/15',
  },
  {
    title: 'Two-Layer Security',
    desc: 'Callback proxy whitelist + authorized RVM ID. Both must pass. Compromised RSC cannot call the hook.',
    lang: 'ILexHook.sol',
    color: 'from-cyan-500/10 to-cyan-500/5 border-cyan-500/15',
  },
  {
    title: 'Double-Trigger Prevention',
    desc: 'State machine: ACTIVE → EXITING → EXITED → REENTERING → ACTIVE. COOLDOWN_BLOCKS in RSC prevents rapid re-callbacks.',
    lang: 'ILexReactive.sol',
    color: 'from-amber-500/10 to-amber-500/5 border-amber-500/15',
  },
  {
    title: 'Yield Parking',
    desc: 'On exit: funds supplied to lending pool via supply(). On reentry: withdrawn via withdraw(). Yield auto-included in re-add.',
    lang: 'MockLendingPool.sol',
    color: 'from-emerald-500/10 to-emerald-500/5 border-emerald-500/15',
  },
];

export const SlideUnderTheHood: React.FC = () => (
  <div className="flex flex-col items-center justify-center h-full">
    <div className="text-center mb-8">
      <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 border border-purple-500/20 px-3 py-1 mb-4 text-xs font-semibold text-purple-400">
        Deep Dive
      </div>
      <h3 className="text-4xl md:text-5xl font-black">Under the Hood</h3>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
      {DETAILS.map((d) => (
        <Card key={d.title} className={`bg-gradient-to-br ${d.color}`}>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-bold bg-black/30 text-gray-300 rounded-md px-2 py-0.5 border border-white/5">
              {d.lang}
            </span>
          </div>
          <h4 className="font-bold text-sm text-white mb-1">{d.title}</h4>
          <p className="text-xs text-gray-400 leading-relaxed">{d.desc}</p>
        </Card>
      ))}
    </div>
  </div>
);

export default SlideUnderTheHood;
