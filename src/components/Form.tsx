"use client"
import { useState } from 'react';
import { mask, unMask } from 'remask';

export default function Form () {
   const [ whatsapp, setWhatsapp ] = useState('');

    const onChange = (e: { target: { value: string; }; }) => {
        const unmaskedValue = unMask(e.target.value);
        const maskedValue = mask(unmaskedValue, ['(99) 99999-9999']);
        setWhatsapp(maskedValue);
   }

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
                        
                        type="tel" 
                        name="whatsapp" 
                        id="whatsapp"
                        value={whatsapp}
                        onChange={onChange}
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