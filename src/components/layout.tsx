import { PropsWithChildren } from "react"

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

export const MultipleColumnsSection = ({ children, reverse }: PropsWithChildren<{ reverse?: boolean }>) => {
  return (
    <section className={`lg:flex ${reverse ? 'lg:flex-row-reverse' : ''} lg:items-center gap-8 py-4 sm:py-8`}>
      {children}
    </section>
  )
}

export const ThreeColumnsSection = ({ children }: PropsWithChildren) => {
  return (
    <section className={`lg:flex lg:items-center gap-8 py-4 sm:py-8`}>
      {children}
    </section>
  )
}

