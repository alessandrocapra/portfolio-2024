import { PropsWithChildren } from "react"

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
    <div className="text-center p-4 sm:p-12 text-lg md:mx-auto max-w-prose">
      <p>{text}</p>
    </div>
  )
}

export const SectionTitle = (({ title }: { title: string }) => <h3 className="text-2xl font-medium">{title}</h3>)
