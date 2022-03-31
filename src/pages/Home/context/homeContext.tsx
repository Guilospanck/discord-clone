import React, { createContext, FunctionComponent, useState } from 'react'
import { ServerInfo } from '../types/homeTypes'

// TODO: remove
import { serversMocked } from '../../../../__mocks__/homeMocks'

type HomeContextProps = {
  allServers: ServerInfo[],
  serverSelected: ServerInfo
}

export const HomeContext = createContext<HomeContextProps | null>(null)

export const HomeContextProvider: FunctionComponent = ({ children }) => {
  const [allServers] = useState<ServerInfo[]>(serversMocked)
  const [serverSelected] = useState<ServerInfo>(serversMocked[0])

  const defaultContext: HomeContextProps = {
    allServers,
    serverSelected
  }

  return <HomeContext.Provider value={defaultContext}>{children}</HomeContext.Provider>
}
