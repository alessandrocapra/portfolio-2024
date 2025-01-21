export default function About() {
  const images = [
    { id: '1', url: '', alt: 'Image 1', width: 400, height: 300 },
    { id: '2', url: '', alt: 'Image 2', width: 400, height: 500 },
    { id: '3', url: '', alt: 'Image 3', width: 400, height: 400 },
    { id: '4', url: '', alt: 'Image 4', width: 400, height: 400 },
    { id: '5', url: '', alt: 'Image 5', width: 400, height: 350 },
    { id: '6', url: '', alt: 'Image 6', width: 400, height: 450 },
  ];
  return (
    <div className="lg:space-y-6">
      <h1>Something about me</h1>
      <div className="md:flex md:flex-row-reverse md:justify-between md:items-center">
        <img className="w-full md:w-1/2 rounded-lg py-8" src={`https://placecats.com/600/300`} />
        <div className="py-4 max-w-prose">
          <p>A bit of my journey, from the small town in Italy to studying abroad to find something (God knows what lol)</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Erasmus exchange in Nijmegen (NL)</li>
            <li>Post-bachelor degree work experience in Bonn (DE)</li>
            <li>EIT Digital Master degree, first year in Helsinki (FI) and the second in Enschede (NL)</li>
          </ul>
          <p>All of this to emphasize I have been living, studying and sharing experiences with people from all over the world, so I understand cultural differences and how to work well in a multicultural team</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row-reverse md:items-center md:justify-between gap-8 md:space-y-16">
        <div className="max-w-prose md:w-1/2">
          <h2>Passions and interests</h2>
          <p>Here I might want to say something about me apart from development, not too much, just to show I have a life</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Used to be a bass player</li>
            <li>Always love to go back to the mountains, especially Dolomites in my region (maybe masonry grid with some photos?)</li>
            <li>Cooking passion, versed in Italian cuisine but exploring others as well</li>
            <li>Avid reader (fiction, history, philosophy...)</li>
            <li>As everyone else I love travelling and been to some countries</li>
          </ul>
          <p>I guess the biggest quality is being curious and want to absorb as much knowledge as possible</p>
        </div>
        <div className="md:w-1/2">
          <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
            {images.map((image) => (
              <div key={image.id} className="break-inside-avoid mb-4">
                <img
                  className="w-full rounded-lg shadow-md animate-float transition-transform"
                  src={`https://placecats.com/${image.width}/${image.height}`}
                  alt={image.alt}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
