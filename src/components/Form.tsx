"use client"
require('dotenv').config();
import { useState } from 'react';
import { mask, unMask } from 'remask';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { error } from 'console';
import Button from './Button';

const ebookFreeFormSchema = z.object({
  name: z
    .string()
    .nonempty('O Nome Completo é obrigatório')
    .min(6, 'Preencha com seu nome completo')
    .transform((name) => {
      return name
        .trim()
        .split(' ')
        .map((word) => {
          return (
            word[0].toLocaleUpperCase() +
            word.substring(1).toLocaleLowerCase()
          );
        })
        .join(' ');
    }),
  email: z.string().nonempty('O email é obrigatório').email('Formato de E-mail inválido').toLowerCase(),
  whatsapp: z.string().nonempty('O Whatsapp é obrigatório').min(15, 'O número de Whatsapp está incompleto'),
});

type ebookFreeFormData = z.infer<typeof ebookFreeFormSchema>;

export default function Form() {
  const [whatsapp, setWhatsapp] = useState('');
  const [output, setOutput] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ebookFreeFormData>({
    resolver: zodResolver(ebookFreeFormSchema),
  });

  function ebookFree(data: ebookFreeFormData) {
    setOutput(JSON.stringify(data, null, 2));

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': process.env.NEXT_PUBLIC_API_KEY,  
      },
      body: JSON.stringify({ 
        email: data.email,
        attributes: {
          nome: data.name,
          whatsapp: '55' + unMask(data.whatsapp)
        },
        listIds: JSON.parse(process.env.NEXT_PUBLIC_LIST_IDS || "[]"),
        updateEnabled: true,
      }),
    };
    console.log(requestOptions);

    if(process.env.NEXT_PUBLIC_URL) {
      fetch(process.env.NEXT_PUBLIC_URL, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        window.location.href = "/thanks";
      })
      .catch((error) => {
        console.error(error);
      });
    }
  }

  const onChange = (e: { target: { value: string } }) => {
    const unmaskedValue = unMask(e.target.value);
    const maskedValue = mask(unmaskedValue, ['(99) 99999-9999']);
    setWhatsapp(maskedValue);
  };

  return (
    <form
      onSubmit={handleSubmit(ebookFree)}
      action=""
      className={`flex flex-col md:gap-0 w-full`}
    >
      <div className={`flex flex-col justify-between md:flex-row`}>
        <div>
          <div className="form-control w-full gap-2">
            <label htmlFor="name" className="label text-13">
              Nome Completo
            </label>
            <input
              className="input bg-landWhite text-landBlack w-full h-8 md:h-10"
              type="text"
              id="name"
              {...register('name')}
            />
            {errors.name && (
              <span className="text-landRed text-10">{errors.name.message}</span>
            )}
          </div>

          <div className=" form-control w-full gap-2">
            <label htmlFor="email" className="label text-13">
              E-mail
            </label>
            <input
              className="input bg-landWhite text-landBlack w-full h-8 md:h-10"
              type="email"
              id="email"
              {...register('email')}
            />
            {errors.email && (
              <span className="text-landRed text-10">{errors.email.message}</span>
            )}
          </div>

          <div className=" form-control w-full gap-2">
            <label htmlFor="whatsapp" className="label text-13">
              Whatsapp
            </label>
            <input
              className="input bg-landWhite text-landBlack w-full h-8 md:h-10"
              type="tel"
              id="whatsapp"
              {...register('whatsapp')}
              value={whatsapp}
              onChange={onChange}
              placeholder="(99) 9999-9999"
              maxLength={15}
            />
            {errors.whatsapp && (
              <span className="text-landRed text-10">{errors.whatsapp.message}</span>
            )}
          </div>
          <p className="text-10">Você receberá seu ebook em seu número de WhatsApp.</p>
        </div>
        <div>
          <Button />
        </div>
      </div>
    </form>
  );
}
