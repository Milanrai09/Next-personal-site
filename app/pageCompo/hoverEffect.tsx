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
    link: "https://github.com/Milanrai09/fullstack-health",

    
  },
  {
    title: "FUllSTACK-ECOMMERCE",
    description:
      "Search product add to cart , checkout, ordelist, admin funtionalities are some of the features ",
    link: "https://github.com/Milanrai09/ecommerce-fullstack",
  },

  {
    title: "TRAVLLING-SITE",
    description:
      "A travel site where you can plan your travles",
    link: "https://github.com/Milanrai09/React-Traveling-site",
  },


];
