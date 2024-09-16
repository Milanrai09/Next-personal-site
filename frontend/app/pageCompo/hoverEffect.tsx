import { HoverEffect } from "../../components/ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
          <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    title: "Health-Hub",
    description:"A health app where you can search and find food nutritional values, (read, create , edit, save ,like, dislike and delete) Articles.Admin panel is also there",
    link: "https://netflix.com",

    
  },
  {
    title: "FUllSTACK-ECOMMERCE",
    description:
      "Search product add to cart , checkout, ordelist, admin funtionalities are some of the features ",
    link: "https://netflix.com",
  },

  {
    title: "TRAVLLING-SITE",
    description:
      "A travel site where you can plan your travles",
    link: "https://google.com",
  },
  {
    title: "E",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },

];
