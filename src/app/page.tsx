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
          font-poppins
        `}>
        <div className='
          flex flex-col
          relative
          max-w-4xl
          p-6
          mx-auto
          gap-12
        '>
          <div className={`${styles.img} hidden lg:block absolute`}>
          </div>
          <Title />
          <FeaturedText />
          <Testimony />
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
