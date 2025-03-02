interface ProjectImageProps {
  src: string;
  alt: string;
  aspectRatio?: '16/9' | '4/3' | '1/1' | 'unset';
  hasShadow?: boolean;
  objectFit?: 'cover' | 'contain';
}

export const ProjectImage = ({
  src,
  alt,
  aspectRatio = '16/9',
  hasShadow = false,
  objectFit = 'contain'
}: ProjectImageProps) => {
  const aspectRatioClass = {
    'unset': '',
    '16/9': 'aspect-video',
    '4/3': 'aspect-[4/3]',
    '1/1': 'aspect-square'
  }[aspectRatio];

  return (
    <div className={`w-full ${aspectRatioClass}`}>
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-${objectFit} rounded-lg ${hasShadow ? 'shadow-lg' : ''}`}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}; 
