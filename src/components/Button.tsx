
import styles from '../app/page.module.css'

export default function Button () {
    return (
        <>
            <div className={`font-bold pt-[25px] md:pt-[64px]`}>
                <button className={`
                        btn
                        hover:bg-hoverBlue
                        bg-landBlue 
                        rounded-lg 
                        md:h-16 
                        h-12
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
                        left-[245px] md:left-[190px]
                        bottom-2 md:bottom-3 
                        text-landBlack
                    `}>
                    <p className="text-xs font-bold">Grátis Hoje!</p>
                </div>
            </div>
        </>
    )
}