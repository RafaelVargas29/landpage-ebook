import styles from '../page.module.css'

export default function Thanks () {
    return (
        <div className="bg-landWhite h-screen flex justify-center items-center">
            <div className="
                flex flex-col
                gap-12 md:gap-10
                relative
            bg-landGray 
                md:rounded-lg
                m-auto
                h-screen md:h-[505px]
                w-full md:max-w-[1000px]
                justify-center
                items-center
                text-landWhite
            ">
                <h1 className="
                    text-4xl md:text-5xl
                    font-bold
                ">
                    Obrigado!
                </h1>

                <p className="
                    text-xs md:text-lg
                ">
                    Você receberá seu ebook em seu número de WhatsApp.
                </p>
            </div>
            {/* <div className={`
                    absolute 
                    hidden lg:block
                    ${styles.detective} 
                    w-[80px]
                    h-[145px]
                    top-[435px]
                    right-[130px]
                    bg-contain
                `}/> */}
        </div>
    )
}