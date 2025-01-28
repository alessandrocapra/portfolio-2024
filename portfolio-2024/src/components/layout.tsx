import { PropsWithChildren } from "react"

export const OneColumnSection = ({ children }: PropsWithChildren) => {
  return (
    <section className="flex flex-col justify-center items-center py-4 sm:py-8 lg:max-w-prose lg:mx-auto">{children}</section>
  )
}

export const TwoColumnsSection = ({ children, reverse }: PropsWithChildren<{ reverse?: boolean }>) => {
  return (
    <section className={`lg:flex ${reverse ? 'lg:flex-row-reverse' : ''} lg:items-center gap-8 py-4 sm:py-8`}>
      {children}
    </section>
  )
}

