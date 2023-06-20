import { poppins } from "@/app/fonts"
import styles from '../app/page.module.css'

export default function Button () {
    return (
        <>
            <div className={`${poppins.className} pt-[20px] md:pt-[64px]`}>
                <button className={`
                        btn
                        bg-landBlue 
                        rounded-lg 
                        md:h-16 
                        w-full md:w-[17rem] 
                        text-lg md:text-2xl 
                        text-landWhite
                        font-bold
                    `}>Baixar Ebook</button>
                <div className={`
                        ${styles['btn-gold']}
                        badge
                        border-landGold 
                        flex justify-center items-center 
                        relative 
                        left-60 md:left-48 
                        bottom-2 md:bottom-3 
                        text-landBlack
                    `}>
                    <p className="text-xs font-bold">Grátis Hoje!</p>
                </div>
            </div>
        </>
    )
}