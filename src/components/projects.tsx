import { PropsWithChildren } from "react"
import { twMerge } from "tailwind-merge"

const PillContainer = ({ children }: PropsWithChildren) => {
  return <div className="flex flex-wrap gap-3">{children}</div>
}

const Pill = ({ text }: { text: string }) => {
  return (
    <span className="px-2 py-1 bg-gray-50 rounded-full text-gray-400 shadow-sm shadow-black-50">{text}</span>
  )
}

type ProjectHeaderProps = {
  title: string,
  tags: Array<string>
}

export const ProjectHeader = ({ title, tags }: ProjectHeaderProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-6 p-4 min-h-[40vh] md:min-h-[50vh] lg:min-h-[30vh] text-center border-b border-dotted border-b-gray-200">
      <h1>{title}</h1>
      <PillContainer>
        {tags.map(tag =>
          <Pill text={tag} />
        )}
      </PillContainer>
    </div >
  )
}

export const ProjectHighlight = ({ text }: { text: string }) => {
  return (
    <div className="md:text-center p-4 sm:p-12 text-lg md:mx-auto max-w-prose">
      <p>{text}</p>
    </div>
  )
}

export const SectionTitle = (({ children }: PropsWithChildren) => <h3 className="text-2xl font-medium">{children}</h3>)

export const NiceInlineLink = (({ children, to }: PropsWithChildren<{ to: string }>) => <a href={to} className=
  "text-green-600 relative after:absolute after:bg-green-500 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:duration-400"
>{children}</a>)

export const BulletList = (({ children, className }: PropsWithChildren<{ className?: string }>) => <ul className={twMerge("list-disc list-inside", className)}>{children}</ul>)
