'use client'
import { Pacifico } from "next/font/google";
import Link from "next/link";
import { TbBrandBehance, TbBrandGithub, TbBrandGmail, TbBrandLinkedin, TbBrandStackoverflow } from "react-icons/tb";
import Form from "@/components/Form";

const pacifico = Pacifico({weight:['400'],subsets:['latin']})

const Contact = () => {
    const socials = [
        {
            icon: TbBrandGmail,
            value: "kavan1357@gmail.com",
            link: "#contact"
        },
        {
            icon: TbBrandLinkedin,
            value: "Kavan Thakkar",
            link: "https://www.linkedin.com/in/kavan-thakkar/"
        },
        {
            icon: TbBrandGithub,
            value: "Ka1Thakkar",
            link: "https://github.com/Ka1Thakkar"
        },
        {
            icon: TbBrandStackoverflow,
            value: "KAVAN THAKKAR",
            link: "https://stackoverflow.com/users/21417020/kavan-thakkar",
        },
    ]
    return (
        <section id="contact" className="min-h-screen w-full flex flex-col justify-between md:flex-row items-center md:justify-around bg-bggray pt-16 md:pt-0 gap-10">
            <div className="md:w-6/12 px-5">
            <div className="pb-10">
                <div className={pacifico.className}>
                    <h1 className="text-5xl sm:text-7xl md:text-5xl lg:text-7xl 2xl:text-8xl text-textblue text-center">Liked My Work?</h1>
                </div>
                <p className="text-center text-lg md:text-xl lg:text-2xl font-semibold text-orange-500 pt-10">
                    {"Let's work together to build something meaningfull & beautiful!"}
                </p>
            </div>
            <div className="flex justify-center">
            <div className=" grid grid-flow-row gap-y-1">
                    {socials.map((social, key) => (
                        <div className="flex items-center text-gray-800 text-2xl lg:text-3xl gap-5" key={key}>
                            <Link href={social.link} target="_blank">
                                <div>
                                    <social.icon />
                                </div>
                            </Link>
                            <h1 className="font-semibold text-lg lg:text-xl">{social.value}</h1>
                        </div>
                    ))}
            </div>
            </div>
            </div>
            <div className="bg-navbg py-5 md:rounded-t-3xl md:min-h-screen w-full md:w-6/12 flex flex-col justify-center items-center h-1/2">
                <Form />
            </div>
        </section>
    );
}
 
export default Contact;