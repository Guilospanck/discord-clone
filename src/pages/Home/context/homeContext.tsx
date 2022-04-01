import React, { createContext, FunctionComponent, useMemo, useState } from 'react'
import { BGSizeCoordinates, ServerInfo, BackgroundPositionsIteratorType, Channel, ChannelSpace } from '../types/homeTypes'

// TODO: remove
import { serversMocked } from '../../../../__mocks__/homeMocks'

type HomeContextProps = {
  allServers: ServerInfo[],
  serverSelected: ServerInfo,
  setServerSelected: React.Dispatch<React.SetStateAction<ServerInfo>>,
  backgroundPositionsIterator: () => BackgroundPositionsIteratorType,
  channelSelected: Channel,
  setChannelSelected: React.Dispatch<React.SetStateAction<Channel>>,
  spaceSelected: ChannelSpace,
  setSpaceSelected: React.Dispatch<React.SetStateAction<ChannelSpace>>
}

export const HomeContext = createContext<HomeContextProps | null>(null)

export const HomeContextProvider: FunctionComponent = ({ children }) => {
  /** Servers, Channels, Spaces */
  const [allServers] = useState<ServerInfo[]>(serversMocked)
  const [serverSelected, setServerSelected] = useState<ServerInfo>(serversMocked[0])
  const [channelSelected, setChannelSelected] = useState<Channel>(serversMocked[0].channels[0])
  const [spaceSelected, setSpaceSelected] = useState<ChannelSpace>(serversMocked[0].channels[0].spaces[0])

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

    const iterator = (): BackgroundPositionsIteratorType => {
      const _hasValue = (idx: number): boolean => {
        return coordinates[idx] !== undefined
      }

      const next = (): BGSizeCoordinates => {
        if (_hasValue(index + 1)) {
          index++
        } else {
          index = 0
        }
        return coordinates[index]
      }

      return {
        next
      }
    }

    return iterator
  }, [])

  const defaultContext: HomeContextProps = {
    allServers,
    serverSelected,
    setServerSelected,
    channelSelected,
    setChannelSelected,
    spaceSelected,
    setSpaceSelected,
    backgroundPositionsIterator
  }

  return <HomeContext.Provider value={defaultContext}>{children}</HomeContext.Provider>
}
