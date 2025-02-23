import AnimatedPage from "../../components/AnimatedPage";

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
    <AnimatedPage>
      <div className="lg:space-y-6">
        <h1>Something about me</h1>
        <div className="xl:flex xl:flex-row-reverse xl:justify-between xl:items-center">
          <img className="w-full xl:w-1/2 rounded-3xl py-4 lg:p-8" src={`https://placecats.com/600/300`} />
          <div className="py-4 max-w-prose">
            <p>My journey started from a small town surrounded by mountains in the north of Italy, but I could not scratch off the sensation that I wanted to see what lies beyond those rocky giants. In short:</p>
            <ul className="list-disc list-inside space-y-1">
              <li><span className="font-bold">Erasmus exchange</span> in Nijmegen (NL): my first experience abroad, sharing the flat and studies with people from all over the world. Intense and formative experience, it always has a special place in my memories</li>
              <li><span className="font-bold">Post-bachelor work experience</span> in Bonn (DE): the first work experience abroad, just for a few months.</li>
              <li><span className="font-bold">EIT Digital Master degree</span>: this was by far the most profound experience abroad, an improved version of the Erasmus exchange. The first year I had the pleasure to study at the excellent Aalto University nearby Helsinki (FI). The second year I completed my studies in Enschede (NL).</li>
            </ul>
            <p>As you can see from the list above, I have been living, studying and sharing experiences with people from all over the world, so I understand cultural differences well. I have come to realise the importance of these experiences for my career, as they allowed me to adapt well in a multicultural team.</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse md:items-center md:justify-between gap-8 md:space-y-16">
          <div className="max-w-prose md:w-1/2">
            <h2>Passions and interests</h2>
            <p>Apart from building user interfaces, I also have other interests!</p>
            <ul className="list-inside space-y-4">
              <li><span className="font-bold">🎸 Music</span>: In my teenage years I used to play the bass guitar in many local bands; unfortunately, that wasn't meant to become my career but I have fond memories of playing with my bandmates</li>
              <li><span className="font-bold">🏔️ Mountains</span>: I love to hike! I come from the Dolomites region, and I am always eager to go back whenever I can. Fate, ironically, decided I should live in the mountainless Netherlands..</li>
              <li><span className="font-bold">🍕 Cooking</span>: I love to cook all sorts of Italian dishes and try new recipes from other cultures. I am fascinated by how one can use ingredients and combine them in novel ways, it's like culinary alchemy!</li>
              <li><span className="font-bold">📖 Reading</span>: currently spanning to new areas where I am less comfortable (e.g. philosophy), I can't just have enough, I need to keep expanding my knowledge and have my ideas and values challenged.</li>
              <li><span className="font-bold">🌍 Travel</span>: as almost everybody else, I want to discover new places and how differently people live compared to our culture. Last trip to Japan was one of my favourite ever, I loved how tradition and modernity are in such symbiosis.</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <div className="columns-2 md:columns-3 gap-4 md:gap-12 space-y-4 md:space-y-12">
              {images.map((image) => (
                <div key={image.id} className="break-inside-avoid mb-4">
                  <img
                    className="w-full rounded-lg shadow-md transition-all duration-500 ease-out md:hover:scale-125"
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
    </AnimatedPage>
  );
}
