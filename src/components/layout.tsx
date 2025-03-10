import React from "react";
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
  const childrenArray = React.Children.toArray(children);

  return (
    <section className={`grid grid-cols-1 md:grid-cols-2 gap-8 py-8 items-${contentVerticalAlignment} ${reverse ? 'md:[direction:rtl]' : ''}`}>
      {childrenArray.map((child, index) => (
        <div key={index} className="md:[direction:ltr]">
          {child}
        </div>
      ))}
    </section>
  );
}

export const OneColumnSection = ({ children, position = 'center' }: PropsWithChildren<{ position?: 'start' | 'center' | 'end' }>) => {
  return (
    <section className={`flex flex-col py-4 sm:py-8 ${position === 'center'
      ? 'items-center md:max-w-prose mx-auto text-left'
      : position === 'start'
        ? 'items-start lg:ml-0 text-left'
        : 'items-end lg:ml-auto lg:mr-0 text-right'
      }`}>{children}</section>
  )
}

export const ThreeColumnsSection = ({
  children,
  className
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <section className={twMerge(`grid grid-cols-1 lg:grid-cols-3 gap-8`, className)}>
      {children}
    </section>
  )
}

