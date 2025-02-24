interface GalleryImageProps {
  src: string;
  alt: string;
  aspectRatio: string;
  position?: string;
}

export const GalleryImage = ({ src, alt, aspectRatio, position = '50% 50%' }: GalleryImageProps) => {
  return (
    <div 
      className="break-inside-avoid mb-3 rounded-lg overflow-hidden h-64"
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        style={{ objectPosition: position }}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}; 