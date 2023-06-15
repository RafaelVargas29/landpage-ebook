import { poppins } from "@/app/fonts"

export default function Form () {
    return (
        <div className="flex flex-col justify-start gap-2">
            <form action="" className={`${poppins.className} flex flex-col text-sm gap-1`}>
                <div className="flex flex-col">
                    <label htmlFor="">Nome Completo</label>
                    <input className='bg-landWhite h-8' type="name" name="email" id="name"/>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="">E-mail</label>
                    <input className='bg-landWhite h-8' type="email" name="email" id="email"/>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="">Whatsapp</label>
                    <input className='bg-landWhite h-8' type="whatsapp" name="whatsapp" id="whatsapp"/>
                </div>
            </form>
            <p className="text-xs">Você receberá seu ebook em seu número de whatsApp.</p>
        </div>
    )
}