import AnimatedPage from "../../components/AnimatedPage";
import ScrollReveal from "../../components/ScrollReveal";
import { GalleryImage } from "../../components/images";

export default function About() {
  const images = [
    { id: '1', url: '/images/about/venice.png', alt: 'Venice', position: '50% 50%', aspectRatio: '4/3' },
    { id: '2', url: '/images/about/cima-dasta.jpg', alt: 'Cima D\'Asta, Trentino', position: '50% 30%', aspectRatio: '3/4' },
    { id: '3', url: '/images/about/mulaz.jpg', alt: 'Monte Mulaz, Trentino', position: '50% 0%', aspectRatio: '4/3' },
    { id: '4', url: '/images/about/japan-daruma.png', alt: 'Temple, Japan', position: '90% 50%', aspectRatio: '1/1' },
    { id: '5', url: '/images/about/trentino.jpg', alt: 'Trentino', position: '0% 100%', aspectRatio: '4/3' },
    { id: '6', url: '/images/about/japan.png', alt: 'Image 6', position: '50% 50%', aspectRatio: '3/4' },
  ];

  return (
    <AnimatedPage>
      <div className="lg:space-y-6">
        <ScrollReveal>
          <div className="xl:flex xl:flex-row-reverse xl:justify-between xl:items-center">
            <div className="w-full xl:w-1/2 aspect-[16/9] rounded-lg overflow-hidden">
              <img
                src='/images/about/south-africa.jpg'
                alt="South Africa landscape"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="py-4 max-w-prose">
              <h1>Something about me</h1>
              <p>Born and raised surrounded by the Italian Dolomites, I've had the privilege to live and work across Europe:</p>
              <ul className="list-disc list-inside space-y-1">
                <li><span className="font-bold">Erasmus exchange</span> in Nijmegen, Netherlands</li>
                <li><span className="font-bold">Professional experience</span> in Bonn, Germany</li>
                <li><span className="font-bold">EIT Digital Master's</span> at Aalto University (Finland) and University of Twente (Netherlands)</li>
              </ul>
              <p>Living in different countries has taught me to adapt quickly and collaborate effectively with people from all walks of life.</p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="flex flex-col xl:flex-row-reverse xl:items-start xl:justify-between gap-8">
            <div className="max-w-prose xl:w-1/2 xl:sticky xl:top-20">
              <h2>Passions and interests</h2>
              <p>Beyond software development, here's what keeps me curious and engaged:</p>
              <ul className="list-inside space-y-4">
                <li><span className="font-bold">🎸 Music</span>: Former bass guitarist in several bands. While my career took a different path, music remains a cherished part of my life</li>
                <li><span className="font-bold">🏔️ Mountains</span>: Growing up in the Dolomites instilled a deep love for hiking. Currently based in the Netherlands, I seize every opportunity to return to the peaks</li>
                <li><span className="font-bold">🍕 Cooking</span>: Passionate about Italian cuisine and exploring international recipes. I view cooking as a creative outlet where tradition meets innovation</li>
                <li><span className="font-bold">📖 Reading</span>: Constantly expanding my horizons through books, particularly in philosophy and other challenging domains that push my perspective</li>
                <li><span className="font-bold">🌍 Travel</span>: Drawn to experiencing different cultures and their unique ways of life. Japan stands out as a favorite destination, where tradition and innovation coexist beautifully</li>
              </ul>
            </div>
            <div className="xl:w-1/2">
              <div className="columns-2 md:columns-3 gap-3 space-y-3">
                {images.map((image) => (
                  <GalleryImage
                    key={image.id}
                    src={image.url}
                    alt={image.alt}
                    aspectRatio={image.aspectRatio}
                    position={image.position}
                  />
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </AnimatedPage>
  );
}
