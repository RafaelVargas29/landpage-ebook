import styles from '../app/page.module.css'

export default function Title () {

    return (
        <>
        <div>
            <span className={`${styles.title} badge badge-ghost text-sm md:text-base`}>
                <p className='mr-5'>ebook</p> 
                <p>grátis hoje</p>
            </span>
            <div className={`
                relative
                top-[-14px] md:top-[-17px] 
                left-[63px] md:left-[76px]`
            }>
                <div className={`${styles['blue-dot']}`}></div>
            </div>
        </div> 
        </>
    )
}