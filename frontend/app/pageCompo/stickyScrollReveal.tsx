"use client";
import React from "react";
import Image from 'next/image';
import { StickyScroll } from "../../components/ui/sticky-scroll-reveal";
import ecommerceImage from '../media/ecommerce.png';
import healthImage from '../media/health.png'

const content = [
  {
    title: "HEALTH-HUB",
    description:
      "This health hub application leverages a robust technology stack that includes JavaScript (with a framework like React or Vue.js), CSS,Typescript,  Express.js, MongoDB, and Google Sign-In. This combination provides a solid foundation for building dynamic and interactive web interfaces, handling server-side logic efficiently, storing data in a flexible and scalable manner, and enabling seamless user authentication.  You can search and found food nutritional values, (creating, reading, editing, deleting ) Articles , admin role of approving created and edited articles are some of the features of the admin.",
      liveLink: "https://google.com",
      githubLink: "https://github.com",
  
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image src={healthImage}  width={500} height={300}  alt="healthImage" />
      </div>
    ),
  },
  {
    title: "FULLSTACK-ECOMMERCE",
    description:
      "This e-commerce application leverages a robust technology stack that includes HTML, CSS, and JavaScript for the frontend, Express.js (a Node.js framework) for the backend, and MongoDB for the database. This combination provides a solid foundation for building dynamic and interactive web interfaces, handling server-side logic efficiently, and storing data in a flexible and scalable manner.Add to cart ,checkout, orderlist , admin panel(userlist, add product, orderlist, product list),etc., are some of the features. ",
      liveLink: "https://google.com",
      githubLink: "https://github.com",
      content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image src={ecommerceImage} width={500} height={300} alt="E-commerce illustration" />
      </div>
    ),
  },
  {
    title: "TRAVELLING SITE",
    description:
      "Proficient in managing and deploying code using Git, GitHub, and Vercel. Skilled in leveraging these tools to streamline development workflows and ensure efficient deployment of high-quality solutions.",
      liveLink: "https://google.com",
      githubLink: "https://github.com",
      content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          <Image src={ecommerceImage} width={500} height={300} alt="E-commerce illustration" />
      </div>
    )
  }
];

export function StickyScrollRevealDemo() {
  return (
    <div className="  ">
      <StickyScroll content={content}/>
    </div>
  );
}