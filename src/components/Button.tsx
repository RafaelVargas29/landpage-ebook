import { poppins } from "@/app/fonts"
import styles from '../app/page.module.css'

export default function Button () {
    return (
        <>
            <div className={`${poppins.className}`}>
                <button className={`bg-landBlue rounded-lg h-16 w-72 text-3xl font-bold`}>Baixar Ebook</button>
                <span className={`${styles['btn-gold']} relative left-52 bottom-2 text-landBlack font-bold font-sm`}>Grátis Hoje</span>
            </div>
        </>
    )
}