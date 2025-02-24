import { Link } from "react-router";
import AnimatedPage from "../../components/AnimatedPage";
import { BackgroundImage } from "../../components/images";
import { useEffect } from "react";

type ProjectCardProps = {
  title: string, url: string, bgImageUrl?: string
}

const ProjectCard = ({ title, url, bgImageUrl }: ProjectCardProps) => {
  useEffect(() => {
    if (bgImageUrl) {
      const img = new Image();
      img.src = bgImageUrl;
    }
  }, [bgImageUrl]);

  return (
    <Link
      to={url}
      className={`p-4 border border-gray-100 dark:border-gray-800 rounded-lg aspect-square hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex flex-col relative
        ${bgImageUrl ? 'text-white' : 'text-gray-900 dark:text-gray-100'}`}
      aria-label={`View project: ${title}`}
    >
      {bgImageUrl && <BackgroundImage src={bgImageUrl} priority />}
      <h2 className="relative z-10">{title}</h2>
    </Link>
  )
}

export default function Projects() {
  const imagesFolder = '/images/projects'

  return (
    <AnimatedPage>
      <div>
        <h1 className="text-gray-900 dark:text-gray-300">Projects</h1>
        <div className="py-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <ProjectCard title='Custodian' url='/projects/custodian' bgImageUrl={`${imagesFolder}/custodian/custodian-header.png`} />
          <ProjectCard title='Whistleblower' url='/projects/whistleblower' bgImageUrl={`${imagesFolder}/whistleblower/whistleblower-header.png`} />
          <ProjectCard title='Gamified respiratory exercises' url='/projects/gamified-respiratory-exercises' bgImageUrl={`${imagesFolder}/gamified-respiratory-exercises/master-thesis-header.png`} />
          <ProjectCard title='Babbelbord' url='/projects/babbelbord' bgImageUrl={`${imagesFolder}/babbelbord/babbelbord.png`} />
        </div>
      </div>
    </AnimatedPage>
  );
}
