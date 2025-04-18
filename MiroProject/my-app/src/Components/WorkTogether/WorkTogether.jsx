import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';

export default function WorkTogether() {
  return (
    <div className='max h-[535px] pt-[60px] flex items-center justify-between'>
        <div>
      <h1 className='font-bold text-5xl text-[rgba(5,0,56,1)]'>Work together, <br /> wherever you work</h1>
      <p className='font-normal text-lg text-[rgba(5,0,56,0.72)] mb-10 mt-4 w-[445px]'>In the office, remote, or a mix of the two, with Miro, your team can connect, collaborate, and co-create in one space no matter where you are.</p>
      <a className='text-[rgba(66,98,255,1)]  underline underline-offset-3' href="/">Learn more <ArrowForwardIcon sx={{ fontSize: 18 }} /> </a>
      </div>
    <Image src="/img/WorkTogetherFoto/Foto.png" alt="Foto" width={550} height={535} />
    </div>
  )
}
