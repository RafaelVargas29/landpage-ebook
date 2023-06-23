import  mask  from '../assets/mask_group.png'
import Image from "next/image"

export default function Testimony () {
    return (
        <>
        <div className="carousel md:w-[500px]">
            <div id="item1" className="carousel-item w-full">
                <div className="flex flex-row gap-2 text-landWhite ">
                    <div>
                        <div className="avatar placeholder boder-2">
                            <div className="bg-neutral-focus text-neutral-content rounded-full w-20 md:w-24">
                                <Image 
                                    src={mask}
                                    fill
                                    alt=""
                                    className="object-contain"
                                />
                            </div>
                        </div> 
                    </div>

                    <div className="flex flex-col gap-2 md:gap-2 w-60 md:w-80"> 
                        <div>
                            <p className={`text-10 md:text-xs font-poppins`}>Fisioterapeuta</p>
                            <p className={`text-xs md:text-sm font-bold font-poppins`}>Lyvia Nagib Fulanetti</p>
                            <p className={`text-xs md:text-sm font-medium text-landBlue font-poppins`}><a href="">@Lyvia Nagib Fulanetti</a></p>
                        </div>
                        
                        <div className="text-10 md:text-xs">
                            <p className={`font-poppins font-medium`}>‘‘Adorei o ebook, tem muitas funções que eu não sabia e estou utilizando muito no meu dia.’’</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="item2" className="carousel-item w-full">
                <div className="flex flex-row gap-2 text-landWhite ">
                    <div>
                        <div className="avatar placeholder boder-2">
                            <div className="bg-neutral-focus text-neutral-content rounded-full w-20 md:w-24">
                                <Image 
                                    src={mask}
                                    fill
                                    alt=""
                                    className="object-contain"
                                />
                            </div>
                        </div> 
                    </div>

                    <div className="flex flex-col gap-2 md:gap-2 w-60 md:w-80"> 
                        <div>
                            <p className={`text-10 md:text-xs font-poppins`}>Fisioterapeuta</p>
                            <p className={`text-xs md:text-sm font-bold font-poppins`}>Lyvia Nagib Fulanetti</p>
                            <p className={`text-xs md:text-sm font-medium text-landBlue font-poppins`}><a href="">@Lyvia Nagib Fulanetti</a></p>
                        </div>
                        
                        <div className="text-10 md:text-xs">
                            <p className={`font-poppins font-medium`}>‘‘Adorei o ebook, tem muitas funções que eu não sabia e estou utilizando muito no meu dia.’’</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="item3" className="carousel-item w-full">
                <div className="flex flex-row gap-2 text-landWhite ">
                    <div>
                        <div className="avatar placeholder boder-2">
                            <div className="bg-neutral-focus text-neutral-content rounded-full w-20 md:w-24">
                                <Image 
                                    src={mask}
                                    fill
                                    alt=""
                                    className="object-contain"
                                />
                            </div>
                        </div> 
                    </div>

                    <div className="flex flex-col gap-2 md:gap-2 w-60 md:w-80"> 
                        <div>
                            <p className={`text-10 md:text-xs font-poppins`}>Fisioterapeuta</p>
                            <p className={`text-xs md:text-sm font-bold font-poppins`}>Lyvia Nagib Fulanetti</p>
                            <p className={`text-xs md:text-sm font-medium text-landBlue font-poppins`}><a href="">@Lyvia Nagib Fulanetti</a></p>
                        </div>
                        
                        <div className="text-10 md:text-xs">
                            <p className={`font-poppins font-medium`}>‘‘Adorei o ebook, tem muitas funções que eu não sabia e estou utilizando muito no meu dia.’’</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="item4" className="carousel-item w-full">
                <div className="flex flex-row gap-2 text-landWhite ">
                    <div>
                        <div className="avatar placeholder boder-2">
                            <div className="bg-neutral-focus text-neutral-content rounded-full w-20 md:w-24">
                                <Image 
                                    src={mask}
                                    fill
                                    alt=""
                                    className="object-contain"
                                />
                            </div>
                        </div> 
                    </div>

                    <div className="flex flex-col gap-2 md:gap-2 w-60 md:w-80"> 
                        <div>
                            <p className={`text-10 md:text-xs font-poppins`}>Fisioterapeuta</p>
                            <p className={`text-xs md:text-sm font-bold font-poppins`}>Lyvia Nagib Fulanetti</p>
                            <p className={`text-xs md:text-sm font-medium text-landBlue font-poppins`}><a href="">@Lyvia Nagib Fulanetti</a></p>
                        </div>
                        
                        <div className="text-10 md:text-xs">
                            <p className={`font-poppins font-medium`}>‘‘Adorei o ebook, tem muitas funções que eu não sabia e estou utilizando muito no meu dia.’’</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='hidden lg:block'>
            <div className="flex justify-start py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a> 
                <a href="#item2" className="btn btn-xs">2</a> 
                <a href="#item3" className="btn btn-xs">3</a> 
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
        </>
    )
}