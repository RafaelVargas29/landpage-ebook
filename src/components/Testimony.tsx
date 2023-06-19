import { poppins } from "@/app/fonts"
import  mask  from '../assets/mask_group.png'
import Image from "next/image"

export default function Testimony () {
    return (
        <>
            <div className="flex flex-row gap-2 text-landWhite ">
                <div>
                    <div className="avatar placeholder boder-2">
                        <div className="bg-neutral-focus text-neutral-content rounded-full w-20 md:w-32">
                            <Image 
                                src={mask}
                                fill
                                alt=""
                                className="object-contain"
                            />
                        </div>
                    </div> 
                </div>

                <div className="flex flex-col gap-2 md:gap-4 w-60 md:w-96"> 
                    <div>
                        <p className={`text-10 md:text-sm ${poppins.className}`}>Fisioterapeuta</p>
                        <p className={`text-xs md:text-base font-bold ${poppins.className}`}>Lyvia Nagib Fulanetti</p>
                        <p className={`text-xs md:text-base font-medium text-landBlue ${poppins.className}`}><a href="">@Lyvia Nagib Fulanetti</a></p>
                    </div>
                    
                    <div className="text-10 md:text-sm">
                        <p className={`${poppins.className} font-medium`}>‘‘Adorei o ebook, tem muitas funções que eu não sabia e estou utilizando muito no meu dia.’’</p>
                    </div>
                </div>
            </div>
        </>
    )
}