import React from 'react';
import { ArrowUpRight } from '@phosphor-icons/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  href?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', children, href, ...props }, ref) => {
    const innerContent = (
      <>
        <span className="relative z-10">{children}</span>
        <div className="w-8 h-8 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center ms-4 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:ltr:translate-x-1 group-hover:rtl:-translate-x-1 group-hover:-translate-y-[1px] group-hover:scale-105">
          <ArrowUpRight weight="light" size={16} className="rtl:-scale-x-100" />
        </div>
      </>
    );

    const baseClasses = "group relative inline-flex items-center justify-center rounded-full px-6 py-3 font-medium transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]";
    
    const variants = {
      primary: "bg-white text-black hover:bg-white/90 shadow-[inset_0_1px_1px_rgba(255,255,255,1)]",
      secondary: "bg-white/5 text-white ring-1 ring-white/10 hover:bg-white/10 backdrop-blur-md"
    };

    if (href) {
      const isInternal = href.startsWith('#');
      return (
        <a 
          href={href} 
          target={isInternal ? undefined : "_blank"} 
          rel={isInternal ? undefined : "noopener noreferrer"} 
          className={cn(baseClasses, variants[variant], className)}
          onClick={(e) => {
            if (isInternal) {
              e.preventDefault();
              document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          {innerContent}
        </a>
      );
    }

    return (
      <button ref={ref} className={cn(baseClasses, variants[variant], className)} {...props}>
        {innerContent}
      </button>
    );
  }
);
Button.displayName = 'Button';
