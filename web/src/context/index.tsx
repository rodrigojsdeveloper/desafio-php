import { PropsWithChildren } from 'react';
import { UserContextProvider } from './userContext';

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <UserContextProvider>
      {children}
    </UserContextProvider>
  );
};