import styles from '../app/page.module.css'

export default function ImageEbook () {
    return (
        <>
            <div className={`
                    ${styles.img}
                    w-[730px]
                    h-[476px]
                    bg-contain
                    hidden 
                    lg:block 
                    absolute 
                    top-[-80px] 
                    right-[-280px]
                `}>
            </div>
        </>
    )
}