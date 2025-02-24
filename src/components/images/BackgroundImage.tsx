interface BackgroundImageProps {
  src: string;
  hasOverlay?: boolean;
  priority?: boolean;
}

export const BackgroundImage = ({ src, hasOverlay = true, priority = false }: BackgroundImageProps) => {
  return (
    <div
      className="absolute inset-0 rounded-lg bg-cover bg-center"
      style={{
        backgroundImage: `url(${src})`,
      }}
    >
      {hasOverlay && (
        <div className="absolute inset-0 bg-black/40 rounded-lg" />
      )}
    </div>
  );
}; 