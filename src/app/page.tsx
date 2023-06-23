import Form from '@/components/Form'
import Testimony from '@/components/Testimony'
import Image from 'next/image'
import ebookImage from '../assets/ebook.png';
import Button from '@/components/Button';
import styles from './page.module.css'
import Title from '@/components/Title';
import FeaturedText from '@/components/FeaturedText';
import ImageEbook from '@/components/ImageEbook';

export default function Home() {
  return (
    <main className={`
          font-poppins
          bg-landGray
        `}>
        <div className='
          flex flex-col
          relative
          max-w-4xl
          min-h-screen
          p-6
          mx-auto
          gap-14 md:gap-9
        '>
          <ImageEbook />

          <Title />

          <FeaturedText />

          <Testimony />

          <div className={`flex flex-col justify-between md:flex-row`}>
            <Form />

            <Button />
          </div>
        </div>   
    </main>
  )
}
