// TODO: get Messages from backend
import { messagesMocked } from '../../../../__mocks__/homeMocks'
import { Messages, Message, MessageWithUserInfo, UserInfo } from '../types/homeTypes'
import { GetUserByUserIdUsecaseReturnType } from './getUserByUserIdUsecase'

export type GetMessagesFromChannelSpaceUsecaseReturnType = {
  getMessages: ({ serverId, channelId, spaceId }: GetInfoProps) => Message[],
  getMessagesWithUserInfo: ({ serverId, channelId, spaceId }: GetInfoProps) => MessageWithUserInfo[]
}

type GetMessagesFromChannelSpaceUsecaseProps = {
  getUserByUserIdUsecase: GetUserByUserIdUsecaseReturnType
}

type GetInfoProps = {
  serverId: string,
  channelId: string,
  spaceId: string,
  fromDB?: boolean
}

export const GetMessagesFromChannelSpaceUsecase = ({ getUserByUserIdUsecase }: GetMessagesFromChannelSpaceUsecaseProps) => {
  const getMessages = ({ serverId, channelId, spaceId, fromDB = false }: GetInfoProps): Message[] => {
    let messages: Messages[] = []

    // get message from Database (make request); otherwise pick it from localStorage
    if (fromDB) {
      messages = messagesMocked
    } else {
      const msgFromLocalStorage = localStorage.getItem('messages')
      messages = msgFromLocalStorage ? JSON.parse(msgFromLocalStorage) : []
    }

    return messages
      .filter(msg => msg.serverId === serverId && msg.channelId === channelId && msg.spaceId === spaceId)
      .reduce<Message[]>((prev, curr) => ([...prev, ...curr.messages]), [])
  }

  const getMessagesWithUserInfo = ({ serverId, channelId, spaceId, fromDB = false }: GetInfoProps): MessageWithUserInfo[] => {
    const messages: Message[] = getMessages({ serverId, channelId, spaceId, fromDB })
    if (messages.length === 0) return []

    return messages.map(msg => {
      const userInfo: UserInfo = getUserByUserIdUsecase.get(msg.userId)

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
