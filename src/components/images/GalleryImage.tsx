interface GalleryImageProps {
  src: string;
  alt: string;
  position?: string;
}

export const GalleryImage = ({ src, alt, position = '50% 50%' }: GalleryImageProps) => {
  const lastDotIndex = src.lastIndexOf('.');
  const basePath = lastDotIndex !== -1 ? src.substring(0, lastDotIndex) : src;
  const originalExt = lastDotIndex !== -1 ? src.substring(lastDotIndex + 1) : 'jpg';

  const webpPath = `${basePath}.webp`;
  const originalPath = src; 

  return (
    <div 
      className="break-inside-avoid mb-3 rounded-lg overflow-hidden h-64"
    >
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
          className="w-full h-full object-cover"
          style={{ objectPosition: position }}
          loading="lazy"
          decoding="async"
        />
      </picture>
    </div>
  );
};
