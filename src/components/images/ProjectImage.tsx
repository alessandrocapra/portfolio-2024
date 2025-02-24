interface ProjectImageProps {
  src: string;
  alt: string;
  aspectRatio?: '16/9' | '4/3' | '1/1';
  hasShadow?: boolean;
}

export const ProjectImage = ({ 
  src, 
  alt, 
  aspectRatio = '16/9',
  hasShadow = false 
}: ProjectImageProps) => {
  const aspectRatioClass = {
    '16/9': 'aspect-video',
    '4/3': 'aspect-[4/3]',
    '1/1': 'aspect-square'
  }[aspectRatio];

  return (
    <div className={`relative w-full ${aspectRatioClass}`}>
      <img
        src={src}
        alt={alt}
        className={`absolute inset-0 w-full h-full object-contain rounded-lg ${hasShadow ? 'shadow-lg' : ''}`}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}; 