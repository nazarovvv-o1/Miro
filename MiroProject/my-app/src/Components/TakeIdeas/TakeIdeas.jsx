'use client'

import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import Icon from '../../../public/Icon/TakeIdeasIcons/icon.svg'
import Vector from '../../../public/Icon/TakeIdeasIcons/Vector1.svg'
import Vector2 from '../../../public/Icon/TakeIdeasIcons/Vector2.svg'
import Image from "next/image";
import Foto from '../../../public/img/TakeIdeasFoto/Foto.png'


export default function TakeIdeas() {
  return (
    <div className='max-w-[1380px] m-auto flex justify-between items-center mt-[60px] px-10'>
      <div>
        <h1 className='font-bold text-5xl text-[rgba(5,0,56,1)]'>
          Take ideas from <br /> better to best
        </h1>
        <p className='font-normal text-lg text-[rgba(5,0,56,0.72)] mt-4'>
          Miro is your team's visual platform to connect, <br /> collaborate, and create — together.
        </p>
        <div className='flex flex-col items-start space-y-2.5 mt-6'>
          <input
            className='text-[rgba(95,92,128,1)] font-normal text-lg h-12 px-4 rounded-4xl border border-[rgba(95,92,128,1)] w-[440px] max-w-md'
            type="text"
            placeholder='Enter your work email'
          />
          <button className='bg-blue-600 cursor-pointer text-lg font-normal text-white w-[440px] h-[51px] rounded-4xl hover:bg-blue-700 transition'>
            Sign up free →
          </button>
          <p className='text-[rgba(5,0,56,0.4)] text-sm'>Collaborate with your team within minutes</p>
        </div>
        <div className="flex rounded-[8px] gap-4 bg-[rgba(245,245,247,1)] w-[350px] h-[60px] p-3.5 mt-[41px]">
            <div>
        <div className="flex items-center text-[rgba(255,157,72,1)] text-lg">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
        </div>
        <p className="font-normal text-[11px] mt-0.5">Based on 5149+ reviews:</p>
        </div>
        <div className="flex items-center gap-3.5">
            <Image src={Icon} alt="Icon" width={19} height={32} />
            <Image src={Vector} alt="Icon" width={50} height={32} />
            <Image src={Vector2} alt="Icon" width={59} height={32} />
        </div>
        </div>
      </div>
    <Image src={Foto} alt="Foto" width={640} height={462.84} />
    </div>
  );
}
