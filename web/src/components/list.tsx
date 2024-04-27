'use client'

import { useContext } from "react"
import { Spinner } from "./spinner"
import { UserContext } from "@/context/userContext"

export const List = () => {
  const { users, isLoadingList } = useContext(UserContext)

  return (
    <section className="w-full max-w-[600px] h-[500px] flex flex-col border border-solid border-gray-300 rounded-md">
      <h2 className="text-center text-lg font-medium border-b border-solid border-gray-300 py-2.5 px-4">Usuários Cadastrados</h2>
    <ul className="w-full max-w-[600px] h-[500px] flex flex-col overflow-y-auto">
      {
        isLoadingList ? (
          <Spinner />
        ) : 
        users.length > 0 ? (
          users.map(user => (
            <li className="py-2.5 px-4 flex flex-col gap-1 border-b border-solid border-gray-300" key={user.id}>
              <p>NIS: {user.nis}</p>
              <span>Nome: {user.name}</span>
            </li>
          ))
        ) : (
          <div className="m-auto">Nenhum usuário foi encontrado</div>
        )
      }
    </ul>
    </section>
  )
}
