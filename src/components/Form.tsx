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
            <form action="" className={`flex flex-col gap-2`} >
                <div className=" form-control w-full">
                    <label htmlFor="name" className='label'>Nome Completo</label>
                    <input 
                        className='input bg-landWhite text-landBlack w-full' 
                        type="text" 
                        name="name" 
                        id="name"
                    />
                </div>

                <div className=" form-control w-full">
                    <label htmlFor="email" className='label'>E-mail</label>
                    <input 
                        className='input bg-landWhite text-landBlack w-full' 
                        type="email" 
                        name="email" 
                        id="email"
                    />
                </div>

                <div className=" form-control w-full">
                    <label htmlFor="whatsapp" className='label'>Whatsapp</label>
                    <input 
                        className='input bg-landWhite text-landBlack w-full' 
                        type="tel" 
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