"use client"
import { useState } from 'react';
import { mask, unMask } from 'remask';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { error } from 'console';

const ebookFreeFormSchema = z.object({
    name: z.string()
        .nonempty('O Nome Completo é obrigatório')
        .min(6, 'Preencha com seu nome completo')
        .transform(name => {
            return name.trim().split(' ').map(word => {
                return word[0].toLocaleUpperCase().concat(word.substring(1).toLocaleLowerCase())
            }).join(' ')
        }),
    email: z.string()
        .nonempty('O email é obrigatório')
        .email('Formato de E-mail inválido')
        .toLowerCase(),
    whatsapp: z.string()
        .nonempty('O Whatsapp é obrigatório')
        .min(15, 'O número de Whatsapp está incompleto'),
})

type ebookFreeFormData = z.infer<typeof ebookFreeFormSchema>

export default function Form () {
    const [ whatsapp, setWhatsapp ] = useState('')
    const [ output, setOutput] = useState('')
    
    const { 
        register, 
        handleSubmit, 
        formState: { errors }
    } = useForm<ebookFreeFormData>({
        resolver: zodResolver(ebookFreeFormSchema)
    })

    function ebookFree (data: any) {
        setOutput(JSON.stringify(data, null, 2))
    }

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
            <form onSubmit={handleSubmit(ebookFree)} action="" className={`flex flex-col md:gap-0`} >
                <div className="form-control w-full">
                    <label htmlFor="name" className='label text-13'>Nome Completo</label>
                    <input 
                        className='input bg-landWhite text-landBlack w-full h-8 md:h-10' 
                        type="text" 
                        id="name"
                        {...register('name')}
                    />
                    {errors.name && <span>{errors.name.message}</span>}
                </div>

                <div className=" form-control w-full">
                    <label htmlFor="email" className='label text-13'>E-mail</label>
                    <input 
                        className='input bg-landWhite text-landBlack w-full h-8 md:h-10' 
                        type="email"  
                        id="email"
                        {...register('email')}
                    />
                    {errors.email && <span>{errors.email.message}</span>}
                </div>

                <div className=" form-control w-full">
                    <label htmlFor="whatsapp" className='label text-13'>Whatsapp</label>
                    <input 
                        className='input bg-landWhite text-landBlack w-full h-8 md:h-10'
                        
                        type="tel" 
                        id="whatsapp"
                        {...register('whatsapp')}
                        value={whatsapp}
                        onChange={onChange}
                        placeholder="(99) 9999-9999"
                        maxLength={15}
                    />
                    {errors.whatsapp && <span>{errors.whatsapp.message}</span>}
                </div>
                <button type='submit'> Enviar </button>
            </form>
            <p className="text-10">Você receberá seu ebook em seu número de whatsApp.</p>
            <pre>{output}</pre>
        </div>
    )
}