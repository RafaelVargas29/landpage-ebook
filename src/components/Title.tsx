import styles from '../app/page.module.css'

export default function Title () {

    return (
        <>
            
            <span className={`${styles.title} badge badge-ghost ml-24 text-xl`}>
                <p className='mr-5'>ebook</p> 
                <p>grátis hoje</p>
            </span>
            <span className={`${styles['blue-dot']} relative top-4 left-[183px]`}></span>
        </>
    )
}