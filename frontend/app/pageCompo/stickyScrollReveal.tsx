"use client";
import React from "react";
import { StickyScroll } from "../../components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "HEALTH-HUB",
    description:
      "This health hub application leverages a robust technology stack that includes JavaScript (with a framework like React or Vue.js), CSS,Typescript,  Express.js, MongoDB, and Google Sign-In. This combination provides a solid foundation for building dynamic and interactive web interfaces, handling server-side logic efficiently, storing data in a flexible and scalable manner, and enabling seamless user authentication.  You can search and found food nutritional values, (creating, reading, editing, deleting ) Articles , admin role of approving created and edited articles are some of the features of the admin.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
  {

    title: "FULLSTACK-ECOMMERCE",
    description:
      "This e-commerce application leverages a robust technology stack that includes HTML, CSS, and JavaScript for the frontend, Express.js (a Node.js framework) for the backend, and MongoDB for the database. This combination provides a solid foundation for building dynamic and interactive web interfaces, handling server-side logic efficiently, and storing data in a flexible and scalable manner.Add to cart ,checkout, orderlist , admin panel(userlist, add product, orderlist, product list),etc., are some of the features. ",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "TRAVELLING SITE",
    description:
      "Proficient in managing and deploying code using Git, GitHub, and Vercel. Skilled in leveraging these tools to streamline development workflows and ensure efficient deployment of high-quality solutions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    )
  }
 
];


export function StickyScrollRevealDemo() {
  return (
    <div className=" ">
      <StickyScroll content={content} />
    </div>
  );
}
