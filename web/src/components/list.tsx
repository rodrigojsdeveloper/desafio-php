'use client'

import { useEffect, useState } from "react"
import { api } from "@/services/api"
import { Spinner } from "./spinner"

type Users = {
  id: number
  name: string
  nis: string
}

export const List = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState<Array<Users>>([])

  useEffect(() => {
    api
      .get('/users')
      .then((res) => setUsers(res.data))
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false))
    }, [])

  return (
    <ul className="w-full max-w-[600px] h-[500px] flex flex-col border border-solid border-gray-300 rounded-md overflow-y-auto">
      <h2 className="text-center text-lg font-medium border-b border-solid border-gray-300 py-2.5 px-4">Usuários Cadastrados</h2>
      {
        isLoading ? (
          <Spinner />
        ) : 
        users.map(user => (
          <li className="py-2.5 px-4 flex flex-col gap-1 border-b border-solid border-gray-300" key={user.id}>
            <p>NIS: {user.nis}</p>
            <span>Nome: {user.name}</span>
          </li>
        ))
      }
    </ul>
  )
}
