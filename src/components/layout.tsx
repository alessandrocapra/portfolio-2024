import { PropsWithChildren } from "react"
import { twMerge } from 'tailwind-merge';

interface MultipleColumnsSectionProps {
  children: React.ReactNode;
  contentVerticalAlignment?: 'start' | 'center' | 'end';
  reverse?: boolean;
}

export function MultipleColumnsSection({ 
  children, 
  contentVerticalAlignment = 'center',
  reverse = false 
}: MultipleColumnsSectionProps) {
  return (
    <section className={`grid grid-cols-1 md:grid-cols-2 gap-8 py-8 items-${contentVerticalAlignment} ${
      reverse ? 'md:flex-row-reverse' : ''
    }`}>
      {children}
    </section>
  );
}

export const OneColumnSection = ({ children, position = 'center' }: PropsWithChildren<{ position?: 'start' | 'center' | 'end' }>) => {
  return (
    <section className={`flex flex-col justify-center py-4 sm:py-8 lg:max-w-prose ${
      position === 'center' 
        ? 'md:items-center lg:mx-auto text-left' 
        : position === 'start' 
          ? 'md:items-start lg:ml-0 text-left' 
          : 'md:items-end lg:ml-auto lg:mr-0 text-right'
    }`}>{children}</section>
  )
}

export const ThreeColumnsSection = ({ 
  children, 
  className 
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <section className={twMerge(`lg:flex lg:items-center gap-8 py-4 sm:py-8`, className)}>
      {children}
    </section>
  )
}

