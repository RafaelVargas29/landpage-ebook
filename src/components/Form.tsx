"use client"
import { useState } from 'react';

export default function Form () {
    const [form, setForm] = useState({
        whatsapp: '',
    });
    
    const formatWhatsapp = (input: string): string => {
    const cleaned = input.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);

    if (match) {
        return `(${match[1]}) ${match[2]}-${match[3]}`;
    }

    return cleaned;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    const formattedWhatsapp = formatWhatsapp(input);
    setForm({ ...form, whatsapp: formattedWhatsapp });
    };

    return (
        <div className="
                flex flex-col 
                justify-start 
                gap-2
                w-full max-sm md:w-[17rem]
            ">
            <form action="" className={`font-poppins flex flex-col text-8 md:text-xs gap-2`}>
                <div className="flex flex-col gap-1">
                    <label htmlFor="">Nome Completo</label>
                    <input 
                        className='bg-landWhite h-5 md:h-7 text-landBlack px-2' 
                        type="name" 
                        name="email" 
                        id="name"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="">E-mail</label>
                    <input 
                        className='bg-landWhite h-5 md:h-7 text-landBlack px-2' 
                        type="email" 
                        name="email" 
                        id="email"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="">Whatsapp</label>
                    <input 
                        className='bg-landWhite h-5 md:h-7 text-landBlack px-2' 
                        type="whatsapp" 
                        name="whatsapp" 
                        id="whatsapp"
                        value={form.whatsapp}
                        onChange={handleChange}
                        placeholder="(99) 9999-9999"
                        maxLength={15}
                        required
                    />
                </div>
            </form>
            <p className="text-[7px] md:text-8">Você receberá seu ebook em seu número de whatsApp.</p>
        </div>
    )
}