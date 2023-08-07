import Image from 'next/image'
import image from '@/public/assets/pictures/Kavan-removebg-preview.png'
import {TbBrandGithub, TbBrandGmail, TbBrandLinkedin, TbBrandStackoverflow} from 'react-icons/tb'
import {MdLocationOn} from 'react-icons/md'
import Link from 'next/link'
import { Pacifico } from 'next/font/google'

const paris = Pacifico({weight:['400'], subsets:['latin']})

export default function Homescreen() {
  const contactcard = [
    {
      icon: MdLocationOn,
      value: "India",
      link: ""
    },
    {
      icon: TbBrandLinkedin,
      value: "Kavan Thakkar",
      link: "https://www.linkedin.com/in/kavan-thakkar/",
    },
    {
      icon: TbBrandGithub,
      value: "Ka1Thakkar",
      link: "https://github.com/Ka1Thakkar"
    },
    {
      icon: TbBrandStackoverflow,
      value: "KAVAN THAKKAR",
      link: "https://stackoverflow.com/users/21417020/kavan-thakkar"
    }
  ]
  return (
    <section id='home' className='min-h-screen w-full bg-bggray text-textblue flex flex-col justify-center px-5 md:px-0 py-16 '>
      <div className='flex flex-col md:flex-row md:justify-around items-center gap-10 '>
        <div className='rounded-xl bg-white w-full md:w-4/12 lg:w-3/12 shadow-md shadow-gray-400 flex flex-col sm:flex-row md:flex-col sm:justify-around sm:items-center'>
          <div className='rounded-xl flex flex-col items-center pt-5 px-5 sm:p-5 sm:w-1/2 md:w-full'>
            <Image src={image} alt='Profile Picture' height={500} width={500} quality={100} className='rounded-xl bg-gray-200' />
          </div>
          <div className=' text-sm md:text-2xl p-5 sm:w-1/2 md:w-full'>
            <h1 className='text-black font-bold text-lg md:text-2xl'>Kavan Thakkar</h1>
            {contactcard.map((element,key)=>(
              <div key={key}>
                <Link href={element.link} target='_blank'>
                  <div className='flex text-gray-600 items-center gap-2'>
                    <element.icon />
                    <h1 className='text-xs md:text-base font-medium'>{element.value}</h1>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className='w-full md:w-6/12 lg:w-7/12'>
          <p className='text-orange-600 text-xl md:text-2xl lg:text-3xl font-bold'>Hi, my name is</p>
          <div className={paris.className}><h1 className='text-5xl sm:text-7xl md:text-5xl lg:text-7xl 2xl:text-8xl py-2'>Kavan Thakkar</h1></div>
          <p className='font-bold text-xl md:text-2xl lg:text-3xl text-black'>I am a Full Stack Developer and a Designer,</p>
          <p className='text-base text-black py-2 lg:pt-5 lg:pb-5 font-semibold'>Full stack developer and a third year student at Birla Institute of Technology and Science, Pilani. Let's connect!</p>
          <button className='text-black border-4 bg-textgreen md:bg-textgreen/0 border-textgreen md:hover:bg-textgreen p-1 md:py-2 md:px-5 rounded-xl md:rounded-full font-medium md:font-bold transition-all ease-in-out'>Resume {"->"}</button>
        </div>
      </div>
    </section>
  )
}