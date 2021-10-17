import React, {
  createContext,
  ReactNode,
  useState,
  useEffect,
  SetStateAction,
  Dispatch
} from 'react';
import { getServerList } from '../services/api';

import IServer from '../types/IServer';

type ServersContextProviderProps = {
  children: ReactNode;
}

type ServersContextType = {
  servers: IServer[];
  selectedServers: IServer[];
  setSelectedServers: Dispatch<SetStateAction<IServer[]>>;
}

export const ServersContext = createContext({} as ServersContextType);

export function ServersContextProvider(props: ServersContextProviderProps) {
  const [servers, setServers] = useState<IServer[]>([]);
  const [selectedServers, setSelectedServers] = useState<IServer[]>([])

  useEffect(() => {
    getServerList()
    .then(res => {
        // @ts-ignore
        setServers(res);
      })
  }, [])

  return (
    <ServersContext.Provider value={{
      servers,
      selectedServers,
      setSelectedServers
    }}>
      { props.children }
    </ServersContext.Provider>
  )
}