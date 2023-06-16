import styles from '../app/page.module.css'

export default function Title () {

    return (
        <>
            
            <span className={`${styles.title} badge badge-ghost text-lg md:text-xl`}>
                <p className='mr-5'>ebook</p> 
                <p>grátis hoje</p>
            </span>
            <span className={`${styles['blue-dot']} relative top-[9.65rem] md:top-[10rem] left-[12.2rem] md:left-[12.3rem]`}></span>
        </>
    )
}