import { poppins } from "@/app/fonts"
import styles from '../app/page.module.css'

export default function Button () {
    return (
        <>
            <div className={`${poppins.className} pt-[64px]`}>
                <button className={`
                        btn
                        bg-landBlue 
                        rounded-lg 
                        h-14 md:h-16 
                        w-[270px] md:w-[17rem] 
                        text-xl md:text-2xl 
                        text-landWhite
                        font-bold
                    `}>Baixar Ebook</button>
                <div className={`
                        ${styles['btn-gold']}
                        badge
                        border-landGold 
                        flex justify-center items-center 
                        relative 
                        left-48 
                        bottom-3 
                        text-landBlack
                    `}>
                    <p className="text-xs font-bold">Grátis Hoje!</p>
                </div>
            </div>
        </>
    )
}