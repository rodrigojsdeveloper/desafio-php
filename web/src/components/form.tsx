'use client'

import { useForm } from "react-hook-form";
import { api } from '@/services/api'
import { useState } from "react";

type FormValues = {
  name: string
}

export const Form = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm<FormValues>();

  const onSubmit = handleSubmit((data: FormValues) => {
    setIsLoading(true);

    api
      .post('/users', data)
      .then(() => reset())
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false))
  })

  return (
    <form onSubmit={onSubmit} className="w-full max-w-[350px] h-[280px] p-4 flex flex-col gap-8 border border-solid border-gray-300 rounded-md">
      <h1 className="text-center text-lg font-medium">Cadastrar NIS</h1>
      <div className="flex flex-col gap-1">        
        <label>Nome</label>
        <input required className="h-[40px] p-2 border border-solid border-gray-300 rounded-md" placeholder="Digite o nome" {...register('name')} />
      </div>
      <button disabled={isLoading} type="submit" className="uppercase max-w-[180px] h-[40px] bg-slate-700 hover:bg-slate-600 duration-200 text-white rounded-md mx-auto px-3">{isLoading ? 'cadastrando...' : 'cadastrar'}</button>
    </form>
  )
};
