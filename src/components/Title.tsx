import styles from '../app/page.module.css'

export default function Title () {

    return (
        <>
        
            <span className={`gap-2 badge badge-ghost text-sm md:text-base`}>
                <p>ebook</p>
                <div className={`${styles['blue-dot']}`}></div>
                <p>grátis hoje</p>
            </span>
        </>
    )
}