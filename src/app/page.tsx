import Form from '@/components/Form'
import Testimony from '@/components/Testimony'
import Image from 'next/image'
import ebookImage from '../assets/ebook.png';
import Button from '@/components/Button';
import styles from './page.module.css'
import Title from '@/components/Title';

export default function Home() {
  return (
    <main className={`${styles['bg-main']} flex flex-col w-full h-screen container px-14 mx-14 gap-16`}>
        <div className='flex flex-col justify-center gap-16 py-36'>
          <div>
            <Title />
          </div>
          
          <div className={`${styles.img} hidden lg:block`}>
          </div>

          <div className={`${styles['featured-text']}  text-4xl md:text-5xl`}>
            <p>24 funcionalidades</p>
            <p><span className={`${styles['geadiente-text']}`}>secretas</span> no seu iPhone</p>
            <p>que irá te surpreender</p>
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
