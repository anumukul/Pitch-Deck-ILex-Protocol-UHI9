import * as React from 'react';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Shield, ExternalLink, BookOpen, Github } from 'lucide-react';
import { Button } from './ui';
import {
  SlideIntro,
  SlideProblem,
  SlideSolution,
  SlideArchitecture,
  SlideUnderTheHood,
  SlideLinks,
} from '../slides';

const SLIDES: { id: string; component: React.FC; label: string }[] = [
  { id: 'intro', component: SlideIntro, label: 'Intro' },
  { id: 'problem', component: SlideProblem, label: 'Problem' },
  { id: 'solution', component: SlideSolution, label: 'How It Works' },
  { id: 'architecture', component: SlideArchitecture, label: 'Architecture' },
  { id: 'under-the-hood', component: SlideUnderTheHood, label: 'Under the Hood' },
  { id: 'links', component: SlideLinks, label: 'Links' },
];

export const DeckApp: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const go = (i: number) => {
    setDirection(i > current ? 1 : -1);
    setCurrent(Math.max(0, Math.min(i, SLIDES.length - 1)));
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') go(current + 1);
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') go(current - 1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [current]);

  const Slide = SLIDES[current].component;

  return (
    <div className="h-screen w-screen flex overflow-hidden bg-[#0a0a0f] text-white font-sans">
      {/* Left sidebar */}
      <aside className="hidden md:flex flex-col items-center justify-center gap-6 w-20 border-r border-white/5 bg-white/[0.02]">
        {SLIDES.map((s, i) => (
          <button
            key={s.id}
            onClick={() => go(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === current
                ? 'bg-gradient-to-r from-purple-500 to-cyan-500 scale-150 shadow-lg shadow-purple-500/20'
                : 'bg-white/20 hover:bg-white/40'
            }`}
            title={s.label}
          />
        ))}
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="flex items-center justify-between px-6 py-4 border-b border-white/5">
          <div className="flex items-center gap-3">
            <Shield className="text-purple-500" size={22} />
            <span className="font-bold text-lg tracking-tight">ILex</span>
            <span className="hidden sm:inline text-[11px] text-gray-600 font-medium ml-1">
              Pitch Deck
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <Button variant="ghost" onClick={() => window.open('https://anumukul.github.io/Documentation-ILex-Protocol-Hook/', '_blank')} className="text-xs">
              <BookOpen size={14} /> Docs
            </Button>
            <Button variant="ghost" onClick={() => window.open('https://github.com/anumukul/ILex-Protocol-UHI9', '_blank')} className="text-xs">
              <Github size={14} /> GitHub
            </Button>
          </div>
        </header>

        {/* Slide content */}
        <main className="flex-1 flex items-center justify-center p-6 md:p-12 overflow-auto" key={current}>
          <div className={`w-full max-w-5xl ${direction >= 0 ? 'anim-in' : 'anim-right'}`}>
            <Slide />
          </div>
        </main>

        {/* Bottom bar */}
        <footer className="flex items-center justify-between px-6 py-3 border-t border-white/5">
          <Button
            variant="ghost"
            onClick={() => go(current - 1)}
            disabled={current === 0}
            className="text-sm"
          >
            <ChevronLeft size={18} />
            <span className="hidden sm:inline">Previous</span>
          </Button>

          <span className="text-xs text-gray-600 font-medium">
            {String(current + 1).padStart(2, '0')} / {String(SLIDES.length).padStart(2, '0')}
          </span>

          <Button
            variant="primary"
            onClick={() => go(current + 1)}
            disabled={current === SLIDES.length - 1}
            className="text-sm"
          >
            <span className="hidden sm:inline">Next</span>
            <ChevronRight size={18} />
          </Button>
        </footer>
      </div>
    </div>
  );
};

export default DeckApp;
