'use client'

import { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "@/context/userContext";

type FormValues = {
  name: string
}

export const Form = () => {
  const { handleCreate, isLoadingCreate } = useContext(UserContext)
  const { register, handleSubmit, reset } = useForm<FormValues>();

  const onSubmit = handleSubmit((data: FormValues) => {

   try {
    handleCreate(data, reset)
   } catch(error) {
    console.error('error', error)
   }
  })

  return (
    <form onSubmit={onSubmit} className="w-full max-w-[350px] h-[280px] p-4 flex flex-col gap-8 border border-solid border-gray-300 rounded-md">
      <h1 className="text-center text-lg font-medium">Cadastrar NIS</h1>
      <div className="flex flex-col gap-1">        
        <label>Nome</label>
        <input required className="h-[40px] p-2 border border-solid border-gray-300 rounded-md" placeholder="Digite o nome" {...register('name')} />
      </div>
      <button disabled={isLoadingCreate} type="submit" className="uppercase max-w-[180px] h-[40px] bg-slate-700 hover:bg-slate-600 duration-200 text-white rounded-md mx-auto px-3">{isLoadingCreate ? 'cadastrando...' : 'cadastrar'}</button>
    </form>
  )
};
