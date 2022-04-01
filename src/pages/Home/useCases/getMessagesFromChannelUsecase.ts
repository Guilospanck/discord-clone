// TODO: get Messages from backend
import { messagesMocked } from '../../../../__mocks__/homeMocks'
import { Messages, Message, MessageWithUserInfo, User } from '../types/homeTypes'
import { GetUserByUserIdUsecaseReturnType } from './getUserByUserIdUsecase'

export type GetMessagesFromChannelUsecaseReturnType = {
  getMessages: ({ serverId, categoryId, channelId }: GetInfoProps) => Message[],
  getMessagesWithUserInfo: ({ serverId, categoryId, channelId }: GetInfoProps) => MessageWithUserInfo[]
}

type GetMessagesFromChannelUsecaseProps = {
  getUserByUserIdUsecase: GetUserByUserIdUsecaseReturnType
}

type GetInfoProps = {
  serverId: string,
  categoryId: string,
  channelId: string,
  fromDB?: boolean
}

export const GetMessagesFromChannelUsecase = ({ getUserByUserIdUsecase }: GetMessagesFromChannelUsecaseProps) => {
  const getMessages = ({ serverId, categoryId, channelId, fromDB = false }: GetInfoProps): Message[] => {
    if (!serverId || !categoryId || !channelId) {
      return []
    }

    let messages: Messages[] = []

    // get message from Database (make request); otherwise pick it from localStorage
    if (fromDB) {
      messages = messagesMocked
    } else {
      const msgFromLocalStorage = localStorage.getItem('messages')
      messages = msgFromLocalStorage ? JSON.parse(msgFromLocalStorage) : []
    }

    return messages
      .filter(msg => msg.serverId === serverId && msg.categoryId === categoryId && msg.channelId === channelId)
      .reduce<Message[]>((prev, curr) => ([...prev, ...curr.messages]), [])
  }

  const getMessagesWithUserInfo = ({ serverId, categoryId, channelId, fromDB = false }: GetInfoProps): MessageWithUserInfo[] => {
    const messages: Message[] = getMessages({ serverId, categoryId, channelId, fromDB })
    if (messages.length === 0) return []

    return messages.map(msg => {
      const userInfo: User = getUserByUserIdUsecase.get(msg.userId)

      return {
        ...msg,
        ...userInfo
      }
    })
  }

  return {
    getMessages,
    getMessagesWithUserInfo
  }
}
