import React, { createContext, FunctionComponent, useEffect, useMemo, useState } from 'react'
import { BGSizeCoordinates, Server, BackgroundPositionsIteratorType, Category, Channel, MessageWithUserInfo, User } from '../types/homeTypes'

// TODO: remove
import { serversMocked, usersMocked } from '../../../../__mocks__/homeMocks'

type HomeContextProps = {
  allServers: Server[],
  serverSelected: Server,
  setServerSelected: React.Dispatch<React.SetStateAction<Server>>,
  categorySelected: Category,
  setCategorySelected: React.Dispatch<React.SetStateAction<Category>>,
  channelSelected: Channel,
  setChannelSelected: React.Dispatch<React.SetStateAction<Channel>>,
  messages: MessageWithUserInfo[],
  setMessages: React.Dispatch<React.SetStateAction<MessageWithUserInfo[]>>,
  currentUser: User,
  backgroundPositionsIterator: () => BackgroundPositionsIteratorType,
  channelTitle: string,
  GetAllConsecutiveMessagesFromUser: ({ msgs }: { msgs: MessageWithUserInfo[] }) => MessageWithUserInfo[]
}

export const HomeContext = createContext<HomeContextProps | null>(null)

export const HomeContextProvider: FunctionComponent = ({ children }) => {
  /** Servers, Categories, Channels */
  const [allServers] = useState<Server[]>(serversMocked)
  const [serverSelected, setServerSelected] = useState<Server>(serversMocked[0])
  const [categorySelected, setCategorySelected] = useState<Category>(serversMocked[0].categories[0])
  const [channelSelected, setChannelSelected] = useState<Channel>(serversMocked[0].categories[0].channels[0])
  const [channelTitle, setChannelTitle] = useState<string>(channelSelected?.title ?? '')

  /** User */
  const [currentUser] = useState<User>(usersMocked[0])

  /** Messages */
  const [messages, setMessages] = useState<MessageWithUserInfo[]>([])

  useEffect(() => {
    let title = ''
    if (channelSelected) {
      title = channelSelected.title
    }

    setChannelTitle(title)
  }, [channelSelected])

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

  /** Get all consecutive messages from user */
  const GetAllConsecutiveMessagesFromUser = ({ msgs }: { msgs: MessageWithUserInfo[] }) => {
    const messagesDividedByUser = msgs.reduce((prev: MessageWithUserInfo[], curr: MessageWithUserInfo) => {
      const lastElem = prev[prev.length - 1]
      if (lastElem?.user?.id === curr?.user?.id) {
        const prevSlice = prev.slice(0, -1)
        return [
          ...prevSlice,
          {
            user: curr?.user,
            messages: [
              ...lastElem.messages,
              curr.messages[0]
            ]
          }
        ]
      }

      return [...prev, curr]
    }, [])

    return messagesDividedByUser
  }

  const defaultContext: HomeContextProps = {
    allServers,
    serverSelected,
    setServerSelected,
    categorySelected,
    setCategorySelected,
    channelSelected,
    setChannelSelected,
    backgroundPositionsIterator,
    messages,
    setMessages,
    currentUser,
    channelTitle,
    GetAllConsecutiveMessagesFromUser
  }

  return <HomeContext.Provider value={defaultContext}>{children}</HomeContext.Provider>
}
