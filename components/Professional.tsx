import { Pacifico } from "next/font/google";

import {TbBrandFigma, TbBrandJavascript, TbBrandMysql, TbBrandNextjs, TbBrandPrisma, TbBrandReact, TbBrandTailwind, TbBrandTypescript, TbBrandVue} from 'react-icons/tb'
import {SiAdobephotoshop, SiPostgresql} from 'react-icons/si'

const satisfy = Pacifico({weight:['400'],subsets:['latin']})

const Professional = () => {
    const experiences = [
        [
            "Feb 2023 - Present",
            "FRONT-END DEV TEAM LEAD",
            "Google Developer Student Club, BITS Pilani Chapter",
        ],
        [
            "December 2022 - Present",
            "CORE TEAM MEMBER",
            "Google Developer Student Club, BITS Pilani Chapter",
        ],
        [
            "May 2023 - July 2023",
            "MACHINE LEARNING, REASEARCH INTERN",
            "Bhaskaracharya National Institute for Space Applications and Geo-informatics"
        ],
        [
            "NOW",
            "FREELANCER AND STUDY",
            "Front-end developer, UI/UX design.",
        ]
    ]
    const education = [
        [
            "March 2008 - March 2019",
            "Middle School",
            "Delhi Public School, Bopal, Ahmedabad",
            "95.6%",
        ],
        [
            "March 2019 - March 2021",
            "Higher Secondary School",
            "Rahul International School, Mumbai",
            "93.2%",
        ],
        [
            "October 2021 - Present",
            "MSc. Physics +  B.E. Electronics and Instrumentation",
            "Birla Institute of Technology and Science, Pilani",
            "7.08"
        ]
    ]

    const expertise = [
        {icons: TbBrandReact},
        {icons: TbBrandNextjs},
        {icons: TbBrandVue},
        {icons: TbBrandTailwind},
        {icons: TbBrandTypescript},
        {icons: TbBrandMysql},
        {icons: TbBrandFigma},
        {icons: SiAdobephotoshop},
    ]

    return (
        <section id="professional" className="min-h-screen w-full bg-bggray flex flex-col justify-center md:px-0 py-16">
            <div className="flex flex-col md:flex-row justify-around xl:justify-center gap-5">
                <div className="lg:w-6/12 md:w-5/12 w-full bg-white rounded-xl px-5 py-10 shadow-md shadow-gray-500 flex flex-col justify-center">
                    <h1 className="font-black text-3xl md:text-4xl text-textblue pb-5">EXPERIENCES</h1>
                    <div className="flex flex-col gap-5">
                        {experiences.map((experience, key)=>(
                            <div key={key} className="bg-gray-200/90 rounded-xl p-5">
                                <p className=" italic font-medium">{experience[0]}</p>
                                <h1 className="font-black text-xl">{experience[1]}</h1>
                                <h2 className="font-semibold text-lg">{experience[2]}</h2>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="md:w-5/12 flex flex-col gap-5 justify-center">
                    <div className="px-5 py-5">
                        <h1 className="font-black text-3xl md:text-4xl text-black pb-5 underline underline-offset-8 decoration-4 decoration-textblue">EDUCATION</h1>
                        <div className="flex flex-col gap-5">
                        {education.map((education, key)=>(
                            <div key={key} className="bg-textgreen rounded-xl p-5 shadow-md shadow-gray-500">
                                <p className=" italic">{education[0]}</p>
                                <h1 className="font-extrabold text-xl">{education[1]}</h1>
                                <h2 className="font-medium text-lg">{education[2]}</h2>
                            </div>
                        ))}
                        </div>
                    </div>
                    <div className="px-5 py-5">
                        <h1 className="font-black text-black text-3xl md:text-4xl pb-5 underline underline-offset-8 decoration-4 decoration-textblue">EXPERTISE</h1>
                        <div className="flex gap-2 overflow-x-auto pb-5">
                        {expertise.map((e, key)=>(
                            <div key={key} className="bg-orange-500 shadow-md shadow-gray-500 rounded-xl p-5 text-4xl">
                                <e.icons />
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Professional;