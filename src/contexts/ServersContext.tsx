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
  removeServerFromSelectedServers: (serverToRemove: IServer) => void;
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

  function removeServerFromSelectedServers(serverToRemove: IServer) {
    const serversWithoutServerToRemove = selectedServers.filter(server =>
      server !== serverToRemove
    );

    setSelectedServers(serversWithoutServerToRemove);
  }

  return (
    <ServersContext.Provider value={{
      servers,
      selectedServers,
      setSelectedServers,
      removeServerFromSelectedServers
    }}>
      { props.children }
    </ServersContext.Provider>
  )
}