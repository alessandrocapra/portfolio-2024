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
  return (
    <div className={`aspect-[${aspectRatio}]`}>
      <img
        src={src}
        alt={alt}
        className={`rounded-lg w-full h-full object-cover ${hasShadow ? 'shadow-lg' : ''}`}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}; 