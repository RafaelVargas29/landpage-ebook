import Form from '@/components/Form'
import Testimony from '@/components/Testimony'
import Image from 'next/image'
import ebookImage from '../assets/ebook.png';
import Button from '@/components/Button';
import styles from './page.module.css'
import Title from '@/components/Title';
import FeaturedText from '@/components/FeaturedText';

export default function Home() {
  return (
    <main className={`
          ${styles['bg-main']} 
          w-full h-screen 
          container 
          px-28 
          md:px-14 md:mx-14
        `}>
        <div className='
          flex flex-col 
          gap-8 md:gap-16 
          py-2 md:py-36
        '>
          <div>
            <Title />
          </div>
          
          <div className={`${styles.img} hidden lg:block`}>
          </div>

          <div className={`${styles['featured-text']}`}>
            <FeaturedText />
          </div>
          
          <div>
            <Testimony />
          </div>
          
          <div className={`${styles['form-and-button']}`}>
            <div className={`${styles.form}`}>
              <Form />
            </div>

            <div className={`${styles['btn-blue']}`}>
              <Button />
            </div>
          </div>
        </div>   
    </main>
  )
}
