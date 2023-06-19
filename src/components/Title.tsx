import styles from '../app/page.module.css'

export default function Title () {

    return (
        <>
        <div>
            <span className={`${styles.title} badge badge-ghost text-lg`}>
                <p className='mr-5'>ebook</p> 
                <p>grátis hoje</p>
            </span>
            <div className={`
                relative
                top-[-17px] md:top-[-23px] 
                left-[80px] md:left-[85px]`
            }>
                <div className={`${styles['blue-dot']}`}></div>
            </div>
        </div> 
        </>
    )
}