import styles from '../app/page.module.css'

export default function Title () {

    return (
        <>
        <div>
            <span className={`${styles.title} badge badge-ghost text-base md:text-base`}>
                <p className='mr-5'>ebook</p> 
                <p>grátis hoje</p>
            </span>
            <div className={`
                relative
                top-[-18px] md:top-[-19px] 
                left-[85px] md:left-[74px]`
            }>
                <div className={`${styles['blue-dot']}`}></div>
            </div>
        </div> 
        </>
    )
}