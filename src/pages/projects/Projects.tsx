import { Link } from "react-router";
import AnimatedPage from "../../components/AnimatedPage";
import { BackgroundImage } from "../../components/images";

type ProjectCardProps = {
  title: string, url: string, bgImageUrl?: string
}

const ProjectCard = ({ title, url, bgImageUrl }: ProjectCardProps) => {
  return (
    <Link
      to={url}
      className={`p-4 border border-gray-100 rounded-lg aspect-square hover:bg-gray-50 transition-colors flex flex-col relative
        ${bgImageUrl ? 'text-white' : ''}`}
      aria-label={`View project: ${title}`}
    >
      {bgImageUrl && <BackgroundImage src={bgImageUrl} />}
      <h2 className="relative z-10">{title}</h2>
    </Link>
  )
}

export default function Projects() {
  const imagesFolder = '/images/projects'

  return (
    <AnimatedPage>
      <div>
        <h1>Projects</h1>
        <div className="py-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <ProjectCard title='Custodian' url='/projects/custodian' bgImageUrl={`${imagesFolder}/custodian/custodian-header.png`} />
          <ProjectCard title='Whistleblower' url='/projects/whistleblower' bgImageUrl={`${imagesFolder}/whistleblower/whistleblower-header.png`} />
          <ProjectCard title='Gamified respiratory exercises' url='/projects/gamified-respiratory-exercises' bgImageUrl={`${imagesFolder}/gamified-respiratory-exercises/master-thesis-header.png`} />
          <ProjectCard title='Babbelbord' url='/projects/babbelbord' bgImageUrl={`${imagesFolder}/babbelbord/babbelbord.png`} />
          <ProjectCard title='Beathoven' url='/projects/beathoven' bgImageUrl={`${imagesFolder}/beathoven/beathoven-header.png`} />
        </div>
      </div>
    </AnimatedPage>
  );
}
