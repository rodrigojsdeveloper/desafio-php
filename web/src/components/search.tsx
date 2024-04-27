'use client'

import { useContext } from "react";
import { UserContext } from "@/context/userContext";
import { useForm } from "react-hook-form";

type FormValues = {
  nis: string
}

export const Search = () => {
  const { handleSearch, isLoadingSearch } = useContext(UserContext)
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit = handleSubmit((data: FormValues) => {
    const { nis } = data || {};
    
    try {
      handleSearch(nis)
    } catch(error) {
      console.error('error', error)
    }
  })


  return (
    <form onSubmit={onSubmit} className="h-[45px] flex flex-row gap-4">
      <input required className="w-full p-2 border border-solid border-gray-300 rounded-md" placeholder="Digite o nome" {...register('nis')} />
      <button disabled={isLoadingSearch} type="submit" className="uppercase max-w-[180px] bg-slate-700 hover:bg-slate-600 duration-200 text-white rounded-md mx-auto px-3">{isLoadingSearch ? 'pesquisando...' : 'pesquisar'}</button>
    </form>    
  )
}