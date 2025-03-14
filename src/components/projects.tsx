import { PropsWithChildren } from "react"
import { twMerge } from "tailwind-merge"

const PillContainer = ({ children }: PropsWithChildren) => {
  return <div className="flex justify-center flex-wrap gap-3">{children}</div>
}

const Pill = ({ children }: PropsWithChildren) => {
  return (
    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm text-gray-600 dark:text-gray-300">
      {children}
    </span>
  )
}

export const ProjectHeader = ({ title, tags }: { title: string, tags: string[] }) => {
  return (
    <div className="p-2 sm:p-8 lg:p-12 flex flex-col items-center text-center max-w-prose mx-auto">
      <h1 className="text-gray-900 dark:text-gray-300 pb-8">{title}</h1>
      <PillContainer>
        {tags.map((tag) => (
          <Pill key={tag}>{tag}</Pill>
        ))}
      </PillContainer>
    </div>
  )
}

export const ProjectHighlight = ({ text }: { text: string }) => {
  return (
    <div className="py-8 max-w-prose mx-auto">
      <p className="text-lg text-gray-900 dark:text-gray-300 text-center">{text}</p>
    </div>
  )
}

export const SectionTitle = ({ children, className }: PropsWithChildren<{ className?: string }>) => {
  return (
    <h2 className={twMerge("text-xl font-medium text-gray-900 dark:text-gray-300", className)}>
      {children}
    </h2>
  )
}

export const BulletList = ({ children, className }: PropsWithChildren<{ className?: string }>) => {
  return (
    <ul className={twMerge("list-disc list-inside space-y-2", className)}>
      {children}
    </ul>
  )
}

export const NiceInlineLink = ({ children, to }: PropsWithChildren<{ to: string }>) => {
  return (
    <a
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 transition-colors duration-300"
    >
      {children}
      <span className="absolute left-0 -bottom-1 w-0 h-px bg-current transition-all duration-300 group-hover:w-full"></span>
    </a>
  )
}
