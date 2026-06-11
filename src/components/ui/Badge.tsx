import * as React from 'react';
import type { LucideIcon } from 'lucide-react';

interface Props {
  text: string;
  icon?: LucideIcon;
  color?: string;
}

const COLORS: Record<string, string> = {
  purple: 'bg-purple-500/10 text-purple-300 border-purple-500/20',
  cyan: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
  emerald: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
  amber: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
  pink: 'bg-pink-500/10 text-pink-300 border-pink-500/20',
};

export const Badge: React.FC<Props> = ({ text, icon: Icon, color = 'purple' }) => (
  <span className={`inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-xs font-semibold ${COLORS[color] || COLORS.purple}`}>
    {Icon && <Icon size={12} />}
    {text}
  </span>
);

export default Badge;
