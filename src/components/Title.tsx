import styles from '../app/page.module.css'

export default function Title () {

    return (
        <>
        
            <span className={`${styles.title} gap-2 badge badge-ghost text-sm md:text-base`}>
                <p>ebook</p>
                <div className={`w-[5px] h-[5px] rounded-[10px] bg-landBlue`}></div>
                <p>grátis hoje</p>
            </span>
        </>
    )
}