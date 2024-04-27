'use client';

import { api } from '@/services/api';
import { PropsWithChildren, createContext, useEffect, useState } from 'react';

type Users = {
  id: number
  name: string
  nis: string
}

type UserContextDataProps = {
  handleSearch: (nis: string) => void
  handleCreate: (data: FormValues, reset: any) => void
  users: Array<Users>
  isLoadingList?: boolean
  isLoadingCreate?: boolean
  isLoadingSearch?: boolean
}

type FormValues = {
  name: string
}

export const UserContext = createContext({} as UserContextDataProps);

export const UserContextProvider = ({ children }: PropsWithChildren) => {
  const [users, setUsers] = useState<Array<Users>>([])
  const [isLoading, setIsLoading] = useState<{ list?: boolean, create?: boolean, search?: boolean }>({
    list: true,
    create: false,
    search: false
  });

  const fetchUsers = () => {
    setIsLoading({ list: true })
    
    api
      .get('/users')
      .then((res) => setUsers(res.data))
      .catch((error) => console.error(error))
      .finally(() => setIsLoading({ list: false }))
  }

  const handleCreate = (data: FormValues, reset: any) => {
    setIsLoading({ create: true })

    api
    .post('/users', data)
    .then(() => reset())
    .catch((error) => console.error(error))
    .finally(() => setIsLoading({ create: false }))
  }

  const handleSearch = (nis: string) => {
    setIsLoading({ search: true })
    
    api
      .get(`/users/search/${nis}`)
      .then((res) => setUsers([res.data]))
      .catch(() => setUsers([]))
      .finally(() => setIsLoading({ search: false }))
  }

  useEffect(() => {
    fetchUsers()
    }, [isLoading.create])

  const userContextData: UserContextDataProps = {
    handleSearch,
    handleCreate,
    isLoadingList: isLoading.list,
    isLoadingCreate: isLoading.create,
    isLoadingSearch: isLoading.search,
    users,
  };

  return <UserContext.Provider value={userContextData}>{children}</UserContext.Provider>;
};
