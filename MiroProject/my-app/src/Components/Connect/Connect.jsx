import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';

export default function Connect() {
  return (
    <div className='flex items-center justify-between max pt-[100px] h-[497px]'>
        <Image src="/img/ConnectFoto/Foto.png" alt="Foto" height={497} width={550} />
        <div>
      <h1 className='font-bold text-5xl text-[rgba(5,0,56,1)]'>Connect <br /> your tools, <br /> close your tabs</h1>
      <p className='font-normal text-lg text-[rgba(5,0,56,0.72)] mb-10 mt-4 w-[445px]'>Whether you want to edit your Google Docs, resolve Jira issues, or collaborate over Zoom, Miro has 100+ integrations with tools you already use and love.</p>
      <a className='text-[rgba(66,98,255,1)] underline underline-offset-3' href="/">Learn more <ArrowForwardIcon sx={{ fontSize: 18 }} /> </a>
      </div>
    </div>
  );
}