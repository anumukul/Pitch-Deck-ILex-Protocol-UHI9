import * as React from 'react';
import { ExternalLink, BookOpen, Play, Github, Shield } from 'lucide-react';
import { Button, Card } from '../components/ui';

const LINKS = [
  {
    label: 'Documentation', url: 'https://anumukul.github.io/Documentation-ILex-Protocol-Hook/',
    icon: BookOpen, gradient: 'from-purple-600 to-purple-700',
  },
  {
    label: 'Live Demo', url: 'https://ilex-protocol.vercel.app',
    icon: Play, gradient: 'from-emerald-600 to-emerald-700',
  },
  {
    label: 'GitHub', url: 'https://github.com/anumukul/ILex-Protocol-UHI9',
    icon: Github, gradient: 'from-cyan-600 to-cyan-700',
  },
];

export const SlideLinks: React.FC = () => (
  <div className="flex flex-col items-center justify-center h-full text-center">
    <div className="relative mb-6">
      <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white leading-none">
        ILex
      </h1>
      <span className="absolute -top-1 -right-10 bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-md shadow-lg">
        try it
      </span>
    </div>

    <p className="text-sm md:text-base text-gray-400 mb-8 max-w-md glass rounded-xl p-4">
      Fully on-chain IL protection for Uniswap v4 LPs. No bots. No keepers.
    </p>

    <div className="flex flex-col sm:flex-row gap-3 mb-8">
      {LINKS.map((link) => (
        <Button
          key={link.label}
          onClick={() => window.open(link.url, '_blank')}
          variant="primary"
          className="bg-gradient-to-r text-sm"
        >
          <link.icon size={16} /> {link.label} <ExternalLink size={12} />
        </Button>
      ))}
    </div>

    <Card className="text-center border-white/5 max-w-md">
      <p className="text-xs font-medium text-gray-500">
        Unichain Sepolia &middot; Reactive Lasna
      </p>
    </Card>

    <div className="mt-6 flex items-center gap-2 text-[10px] text-gray-600 font-medium">
      <Shield size={12} /> ILex Protocol — Built for the Reactive Network + Uniswap v4 ecosystem
    </div>
  </div>
);

export default SlideLinks;
