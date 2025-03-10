interface ProjectImageProps {
  src: string;
  alt: string;
  aspectRatio?: '16/9' | '4/3' | '1/1' | 'unset';
  hasShadow?: boolean;
  objectFit?: 'cover' | 'contain';
  lazyLoad?: boolean
}

export const ProjectImage = ({
  src,
  alt,
  aspectRatio = '16/9',
  hasShadow = false,
  objectFit = 'contain',
  lazyLoad = true
}: ProjectImageProps) => {
  const aspectRatioClass = {
    'unset': '',
    '16/9': 'aspect-video',
    '4/3': 'aspect-[4/3]',
    '1/1': 'aspect-square'
  }[aspectRatio];

  const lastDotIndex = src.lastIndexOf('.');
  const basePath = lastDotIndex !== -1 ? src.substring(0, lastDotIndex) : src;
  const originalExt = lastDotIndex !== -1 ? src.substring(lastDotIndex + 1) : 'jpg';

  const webpPath = `${basePath}.webp`;
  const originalPath = src;

  return (
    <div className={`w-full ${aspectRatioClass}`}>
      <picture>
        <source
          srcSet={webpPath}
          type="image/webp"
        />
        <source
          srcSet={originalPath}
          type={`image/${originalExt === 'jpg' ? 'jpeg' : originalExt}`}
        />
        <img
          src={originalPath}
          alt={alt}
          className={`w-full h-full object-${objectFit} rounded-lg ${hasShadow ? 'shadow-lg' : ''}`}
          loading={lazyLoad ? 'lazy' : undefined}
          decoding="async"
        />
      </picture>
    </div>
  );
};
