import React, { createContext, FunctionComponent, useMemo, useState } from 'react'
import { BGSizeCoordinates, ServerInfo } from '../types/homeTypes'

// TODO: remove
import { serversMocked } from '../../../../__mocks__/homeMocks'

type HomeContextProps = {
  allServers: ServerInfo[],
  serverSelected: ServerInfo,
  setServerSelected: React.Dispatch<React.SetStateAction<ServerInfo>>,
  backgroundPositionsIterator: () => IBackgroundPositionsIterator
}

interface IBackgroundPositionsIterator {
  hasValue: (idx: number) => boolean
  next: () => BGSizeCoordinates
}

export const HomeContext = createContext<HomeContextProps | null>(null)

export const HomeContextProvider: FunctionComponent = ({ children }) => {
  const [allServers] = useState<ServerInfo[]>(serversMocked)
  const [serverSelected, setServerSelected] = useState<ServerInfo>(serversMocked[0])

  const backgroundPositionsIterator = useMemo(() => {
    const coordinates = [
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
    ]

    let index = 0

    const iterator = (): IBackgroundPositionsIterator => {
      const hasValue = (idx: number): boolean => {
        return coordinates[idx] !== undefined
      }

      const next = (): BGSizeCoordinates => {
        if (hasValue(index + 1)) {
          index++
        } else {
          index = 0
        }
        return coordinates[index]
      }

      return {
        hasValue,
        next
      }
    }

    return iterator
  }, [])

  const defaultContext: HomeContextProps = {
    allServers,
    serverSelected,
    setServerSelected,
    backgroundPositionsIterator
  }

  return <HomeContext.Provider value={defaultContext}>{children}</HomeContext.Provider>
}
