interface ProfileImageProps {
  src: string;
  alt: string;
}

export const ProfileImage = ({ src, alt }: ProfileImageProps) => {
  return (
    <div className="flex-none w-32 h-32 sm:w-48 sm:h-48 rounded-full overflow-hidden mx-auto sm:mx-0">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover object-center"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}; 