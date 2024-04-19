'use client';
import { type ReactNode, createContext, useRef, useContext } from 'react';
import { type StoreApi, useStore } from 'zustand';

import { type ApiStore, createApiStore } from '@/stores/api-store';

export const ApiStoreContext = createContext<StoreApi<ApiStore> | null>(null);

export interface CounterStoreProviderProps {
  children: ReactNode;
}

export const ApiStoreProvider: React.FC<CounterStoreProviderProps> = ({
  children,
}: CounterStoreProviderProps) => {
  const storeRef = useRef<StoreApi<ApiStore>>();
  if (storeRef.current == null) {
    storeRef.current = createApiStore();
  }

  return (
    <ApiStoreContext.Provider value={storeRef.current}>
      {children}
    </ApiStoreContext.Provider>
  );
};

export const useApiStore = <T,>(selector: (store: ApiStore) => T): T => {
  const apiStoreContext = useContext(ApiStoreContext);

  if (apiStoreContext == null) {
    throw new Error(`useCounterStore must be use within CounterStoreProvider`);
  }

  return useStore(apiStoreContext, selector);
};
