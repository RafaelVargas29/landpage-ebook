import styles from '../app/page.module.css'

export default function Title () {

    return (
        <>
            
            <span className={`${styles.title} badge badge-ghost text-lg`}>
                <p className='mr-5'>ebook</p> 
                <p>grátis hoje</p>
            </span>
            <span className={
                `${styles['blue-dot']} 
                relative 
                top-[1.25rem] md:top-[10rem] 
                left-[12rem] md:left-[12.3rem]`
            }></span>
        </>
    )
}