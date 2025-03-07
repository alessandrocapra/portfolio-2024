import { JsonLd } from 'react-schemaorg';
import { BreadcrumbList } from 'schema-dts';

export default function GlobalBreadcrumbs() {
  return (
    <JsonLd<BreadcrumbList>
      item={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Alessandro Capra",
            "item": "https://alessandrocapra.me/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Projects",
            "item": "https://alessandrocapra.me/projects"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "About",
            "item": "https://alessandrocapra.me/about"
          }
        ]
      }}
    />
  );
}
