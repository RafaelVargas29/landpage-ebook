import Form from '@/components/Form'
import Testimony from '@/components/Testimony'
import Image from 'next/image'
import ebookImage from '../assets/ebook.png';
import Button from '@/components/Button';
import styles from './page.module.css'
import Title from '@/components/Title';

export default function Home() {
  return (
    <main className={`${styles['bg-main']} container mx-auto pb-96`}>
      <div className={`relative top-52`}>
        <Title />
      </div>

      <div className={`${styles.img} hidden md:block`}></div>

      <div className={`${styles['featured-text']} relative top-20 text-5xl ml-24`}>
        <p>24 funcionalidades</p>
        <p><span className={`${styles['geadiente-text']} font-bold`}>secretas</span> no seu iPhone</p>
        <p>que irá te surpreender</p>
      </div>

      <div className={`${styles.testimony} absolute top-80 ml-24`}>
        <Testimony />
      </div>

      <div className={`${styles.form} absolute top-3/4 my-4 ml-24`}>
        <Form />
      </div>

      <div className={`${styles['btn-blue']} absolute`}>
        <Button />
      </div>
    </main>
  )
}
