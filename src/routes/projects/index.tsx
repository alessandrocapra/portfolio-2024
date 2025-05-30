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
      {bgImageUrl && <BackgroundImage src={bgImageUrl} />}
      <h2 className="relative z-10 text-xl">{title}</h2>
    </Link>
  )
}

export function meta() {
  return [
    { title: 'Projects - Alessandro Capra - Frontend Engineer' },
    {
      name: 'description',
      content: 'Explore my portfolio of frontend development projects including React Native apps, UX/UI design work, and innovative healthcare technology solutions.'
    },
    {
      tagName: 'link',
      rel: 'canonical',
      href: 'https://alessandrocapra.me/projects'
    }
  ];
}

export default function Projects() {
  const imagesFolder = '/images/projects'

  return (
    <AnimatedPage>
      <h1 className="text-gray-900 dark:text-gray-300">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-12 pt-4 md:pt-8">
        <ProjectCard title='Custodian' url='/projects/custodian' bgImageUrl={`${imagesFolder}/custodian/custodian-header.jpg`} />
        <ProjectCard title='Whistleblower' url='/projects/whistleblower' bgImageUrl={`${imagesFolder}/whistleblower/whistleblower-header.jpg`} />
        <ProjectCard title='Gamified respiratory exercises' url='/projects/gamified-respiratory-exercises' bgImageUrl={`${imagesFolder}/gamified-respiratory-exercises/master-thesis-header.jpg`} />
        <ProjectCard title='Babbelbord' url='/projects/babbelbord' bgImageUrl={`${imagesFolder}/babbelbord/babbelbord.jpg`} />
      </div>
    </AnimatedPage>
  );
}
