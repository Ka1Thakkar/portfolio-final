import Image from 'next/image'
import image from '@/public/assets/pictures/Kavan-removebg-preview.png'
import {TbBrandGithub, TbBrandGmail, TbBrandLinkedin} from 'react-icons/tb'
import {MdLocationOn} from 'react-icons/md'
import Link from 'next/link'
import { Pacifico } from 'next/font/google'
import Homescreen from '@/components/Homescreen'
import Projects from '@/components/Projects'
import Professional from '@/components/Professional'
import About from '@/components/About'
import Contact from '@/components/Contact'

const paris = Pacifico({weight:['400'], subsets:['latin']})

export default function Home() {
  return (
    <section>
      <Homescreen />
      <About />
      <Professional />
      <Projects />
      <Contact />
    </section>
  )
}
