"use client"
import { useState } from 'react';
import { useEffect, useRef } from 'react';
import Inputmask from 'inputmask';

export default function Form () {
    const inputRef = useRef<HTMLInputElement>(null);
    const initialMask = '(99) 99999-9999';

    useEffect(() => {
        if (inputRef.current) {
          Inputmask(initialMask).mask(inputRef.current);
        }
    }, []);

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
                w-full max-sm md:w-[20rem]
            ">
            <form action="" className={`flex flex-col md:gap-0`} >
                <div className="form-control w-full">
                    <label htmlFor="name" className='label text-13'>Nome Completo</label>
                    <input 
                        className='input bg-landWhite text-landBlack w-full h-8 md:h-10' 
                        type="text" 
                        name="name" 
                        id="name"
                    />
                </div>

                <div className=" form-control w-full">
                    <label htmlFor="email" className='label text-13'>E-mail</label>
                    <input 
                        className='input bg-landWhite text-landBlack w-full h-8 md:h-10' 
                        type="email" 
                        name="email" 
                        id="email"
                    />
                </div>

                <div className=" form-control w-full">
                    <label htmlFor="whatsapp" className='label text-13'>Whatsapp</label>
                    <input 
                        className='input bg-landWhite text-landBlack w-full h-8 md:h-10'
                        ref={inputRef} 
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
            <p className="text-10">Você receberá seu ebook em seu número de whatsApp.</p>
        </div>
    )
}