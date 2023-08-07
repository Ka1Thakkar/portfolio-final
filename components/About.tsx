'use client'
import { Pacifico } from "next/font/google";
import Lottie from 'lottie-react';
import animationData from '@/public/assets/animations/music.json'
import Link from "next/link";

const satisfy = Pacifico({weight:['400'], subsets:["latin"]})

const About = () => {
    return (
        <section id="about" className="min-h-screen w-full bg-bggray flex flex-col sm:flex-row justify-around items-center px-5 md:px-0 py-16 gap-10">
            <div className="sm:w-5/12">
                <div className={satisfy.className}>
                    <h1 className="text-5xl md:text-5xl lg:text-7xl 2xl:text-8xl text-textblue text-center pb-10">Namaste!</h1>
                </div>
                <p className="text-justify text-xl sm:text-base md:text-xl lg:text-2xl font-medium">
                    I'm <span className="font-extrabold">Kavan!</span> A <span className="bg-textgreen px-2 text-emerald-700 font-semibold rounded-tl-xl rounded-br-xl">front-end developer</span> and a <span className="underline underline-offset-4 decoration-2 decoration-orange-500 font-semibold">UI/UX designer</span>, doing bacholars in <span className=" italic">Electronics Engineering</span>, from BITS Pilani. I love making creative and beautiful websites while vibing to music, and challenging myself to <span className=" italic">gain new skills</span>. I consider myself to be a <span className=" italic underline underline-offset-8 decoration-2 decoration-dashed decoration-textblue">hardworking</span> and <span className=" italic">easy to adapt</span> individual.
                </p>
                <p className="text-xl sm:text-base md:text-xl lg:text-2xl font-medium pt-5">
                    I hope I can help you make your <span className="italic font-semibold">dream website come true</span>, and be a <span className="font-bold bg-orange-500 px-2 text-white rounded-tr-xl rounded-bl-xl">resource to your company.</span>
                </p>
                <div className="flex justify-center items-center pt-10">
                <Link href={"#professional"}>
                <button className="font-medium text-xl border-4 border-navbg rounded-full py-2 px-10 hover:bg-navbg hover:text-white transition-all ease-in-out">
                    Scroll
                </button>
                </Link>
            </div>
            </div>
            <div className="sm:w-5/12 rounded-full shadow-md shadow-gray-500">
                <Lottie loop autoPlay animationData={animationData} />
            </div>
        </section>
    );
}
 
export default About;