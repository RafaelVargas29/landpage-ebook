import { poppins } from "@/app/fonts"
import styles from '../app/page.module.css'

export default function Button () {
    return (
        <>
            <div className={`${poppins.className}`}>
                <button className={`bg-landBlue rounded-lg h-14 md:h-16 w-72 text-2xl md:text-3xl font-bold`}>Baixar Ebook</button>
                <div className={`${styles['btn-gold']} flex justify-center items-center relative left-52 bottom-3 text-landBlack`}>
                    <p className="text-sm font-bold">Grátis Hoje!</p>
                </div>
            </div>
        </>
    )
}