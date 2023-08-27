import type { NextPage } from "next";
import Image from "next/image";
import Carousel from "./Carousel";
import image1 from '@/public/assets/pictures/websites/2023-08-05 16_45_35-ScienoMath - Brave.png'
import image2 from '@/public/assets/pictures/websites/2023-08-05 17_00_24-Americana Restaurant - Las Vegas, NV - Brave.png'
import image3 from '@/public/assets/pictures/websites/2023-08-05 17_05_42-Ka1 Portfolio - Brave.png'
import image4 from '@/public/assets/pictures/websites/SSMS_Mess_Menu.png'
import Link from "next/link";

const Reviews: NextPage = () => {
  const projects = [
    {
        image:  image1,
        name: "ScienoMath",
        description: "Website for small online tutoring solution.",
        code:"https://github.com/Ka1Thakkar/ScienoMath",
        link:"https://scieno-math.vercel.app/",
    },
    {
        image: image2,
        name: "Americana Restaurant",
        description: "A visual clone to practice adding, 3rd party widgets and carousel, in a Nextjs and Tailwindcss project.",
        code:"https://github.com/Ka1Thakkar/SSMS-Front-End-Team-Task1",
        link:"https://ssms-front-end-team-task1.vercel.app/",
    },
    {
        image: image3,
        name: "Personal Portfolio",
        description: "First attempt at making a personal portfolio and aminating elements using framer motion library.",
        code:"https://github.com/Ka1Thakkar/portfolio-2",
        link:"https://portfolio-2-ka1thakkar.vercel.app/",
    },
    {
      image : image4,
      name : "Mess Menu SSMS, BITS Pilani",
      description : "This website enables students of BITS PIlani to see the mess menu for the week.",
      code : "https://github.com/Ka1Thakkar/bppc-mess-menu",
      link : "https://bppc-mess-menu.vercel.app/",
    }
]
  return (
    <div
    className="mx-auto my-2">
      <Carousel loop>
        {projects.map((project, key) => {
          return (
            // 👇 style each individual slide.
            // relative - needed since we use the fill prop from next/image component
            // h-64 - arbitrary height
            // flex[0_0_100%]
            //   - shorthand for flex-grow:0; flex-shrink:0; flex-basis:100%
            //   - we want this slide to not be able to grow or shrink and take up 100% width of the viewport.
            <div className="relative h-fit flex-[0_0_100%]" key={key}>
              {/* use object-cover + fill since we don't know the height and width of the parent */}
              <div className="bg-white rounded-xl md:w-full p-5 shadow-md shadow-gray-300 gap-5 flex flex-col lg:flex-row" key={key}>
                <Image alt="website image" src={project.image} width={500} height={500} quality={100} className="shadow-md shadow-gray-300 rounded-xl w-full lg:w-1/2" />
                <div className="text-center flex flex-col justify-around">
                  <div>
                    <h1 className="text-xl font-black pt-5 text-orange-600">{project.name}</h1>
                    <p className="font-medium pt-2">{project.description}</p>
                  </div>
                  <div className="flex gap-5 justify-around items-center">
                    <Link href={project.link} target="_blank">
                      <button className="bg-textgreen text-black p-2 rounded-xl font-bold">
                        View Website
                      </button>
                    </Link>
                    <Link href={project.code} target="_blank">
                      <button className="bg-textgreen text-black p-2 rounded-xl font-bold">
                        View Code
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Reviews;


// const Testimonial = () => {
    // const testimonials = [
    //     [
    //         "My son totally loved the class. He wanted to join as soon as possible instead of waiting till January.",
    //         " Nimisha,"
    //     ],
    //     [
    //         "My daughter understood the concepts much better using ScienoMath's methodology. Even the more difficult concept of mathematics were at her fingertips now.",
    //         " Nilima,"
    //     ],
    //     [
    //         "I wish we had found ScienoMath earlier.",
    //         " Anvita,"
    //     ],
    //     [
    //         "My son found the classes very enjoyable along with making him understand some important concepts.",
    //         " "
    //     ]
    // ]
//     return (
//         <section id="testimonials" className="min-h-screen flex flex-col justify-center items-center bg-white pt-16">
//             <h1 className="text-5xl md:text-6xl font-semibold text-textgray underline underline-offset-8 decoration-4 decoration-buttonorange">Testimonials</h1>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-5 xl:px-40 pt-20 gap-x-2 gap-y-2 2xl:gap-x-10 2xl:gap-y-10">
//                 {testimonials.map((testimonial, key) => (
//                     <div className="bg-textblue rounded-xl px-2 md:px-5 py-5 text-center transition-all ease-in-out flex flex-col justify-center items-center" key={key}>
//                         <div className="flex justify-around">
//                             <h1 className="text-xl sm:text-3xl lg:text-7xl font-serif font-bold opacity-0 sm:opacity-100">"</h1>
//                             <h1 className="text-sm sm:text-2xl font-semibold sm:px-5">{testimonial[0]}</h1>
//                             <h1 className="text-xl sm:text-3xl lg:text-7xl font-serif font-bold opacity-0 sm:opacity-100">"</h1>
//                         </div>
//                         <h1 className="text-base sm:text-xl font-semibold pt-5"><span className="">~</span>{testimonial[1]} Parent</h1>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// }
 
// export default Testimonial;