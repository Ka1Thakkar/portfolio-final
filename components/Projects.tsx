'use client'
import { Pacifico } from "next/font/google";
import Lottie from 'lottie-react';
import animationData from '@/public/assets/animations/animation_lkxh7ov4.json'
import Image from "next/image";
import image1 from '@/public/assets/pictures/websites/2023-08-05 16_45_35-ScienoMath - Brave.png'
import image2 from '@/public/assets/pictures/websites/2023-08-05 17_00_24-Americana Restaurant - Las Vegas, NV - Brave.png'
import image3 from '@/public/assets/pictures/websites/2023-08-05 17_05_42-Ka1 Portfolio - Brave.png'
import Reviews from "./Reviews";
import Link from "next/link";

const pacifico = Pacifico({weight:['400'], subsets:['latin']})

const Projects = () => {
    return (
        <section id="projects" className="min-h-screen w-full bg-bggray flex flex-col justify-center py-16 px-5">
            <div className="flex flex-col md:flex-row-reverse justify-around items-center gap-20">
                <div className="md:w-5/12 w-full">
                    <div className={pacifico.className}>
                        <h1 className="text-5xl sm:text-7xl md:text-5xl lg:text-7xl 2xl:text-8xl text-textblue text-center">My Work!</h1>
                    </div>
                    <p className="text-center text-base pt-10 pb-5 text-navbg font-semibold">I have made quite a few websites, both as personal and freelance projects, over a year of starting front end development.</p>
                    <Reviews />
                    <p className="pt-5 text-base font-medium text-center">You can check out my other work on <span className="font-bold hover:underline hover:underline-offset-4 hover:decoration-2 transition-all ease-in-out hover:font-extrabold"><Link href={"https://github.com/Ka1Thakkar"} target="_blank">GitHub</Link></span>.</p>
                </div>
                <div className="md:w-4/12">
                    <Lottie autoPlay loop animationData={animationData} />
                </div>
            </div>
        </section>
    );
}
 
export default Projects;