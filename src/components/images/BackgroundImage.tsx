interface BackgroundImageProps {
  src: string;
  hasOverlay?: boolean;
}

export const BackgroundImage = ({ src, hasOverlay = true }: BackgroundImageProps) => {
  return (
    <div
      className="absolute inset-0 rounded-lg bg-cover bg-center"
      style={{
        backgroundImage: `url(${src})`,
      }}
    >
      {hasOverlay && (
        <div className="absolute inset-0 bg-black/20 rounded-lg" />
      )}
    </div>
  );
}; 