import React, { createContext, FunctionComponent, useMemo, useState } from 'react'
import { BGSizeCoordinates, ServerInfo } from '../types/homeTypes'

// TODO: remove
import { serversMocked } from '../../../../__mocks__/homeMocks'

type HomeContextProps = {
  allServers: ServerInfo[],
  serverSelected: ServerInfo,
  setServerSelected: React.Dispatch<React.SetStateAction<ServerInfo>>,
  BACKGROUND_POSITIONS: BGSizeCoordinates[]
}

export const HomeContext = createContext<HomeContextProps | null>(null)

export const HomeContextProvider: FunctionComponent = ({ children }) => {
  const [allServers] = useState<ServerInfo[]>(serversMocked)
  const [serverSelected, setServerSelected] = useState<ServerInfo>(serversMocked[0])

  const BACKGROUND_POSITIONS: BGSizeCoordinates[] = useMemo(() => ([
    {
      x: 0,
      y: 0
    },
    {
      x: -88,
      y: -88
    },
    {
      x: -88,
      y: 0
    },
    {
      x: -88,
      y: -22
    },
    {
      x: -88,
      y: -44
    },
    {
      x: -198,
      y: -22
    },
    {
      x: 0,
      y: -22
    }
  ]), [])

  const defaultContext: HomeContextProps = {
    allServers,
    serverSelected,
    setServerSelected,
    BACKGROUND_POSITIONS
  }

  return <HomeContext.Provider value={defaultContext}>{children}</HomeContext.Provider>
}
