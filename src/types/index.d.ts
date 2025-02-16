import type { LucideIcon } from 'lucide-react';
import type { ReactNode, HTMLAttributes } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: HTMLAttributes<HTMLElement>;
    }
  }
}

export interface ContainerProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export interface MagicCardProps {
  gradientFrom: string;
  gradientTo: string;
  gradientColor: string;
  className?: string;
  children: ReactNode;
}

export interface NavItem {
  name: string;
  href: string;
  icon: LucideIcon;
} 