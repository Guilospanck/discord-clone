// TODO: get Messages from backend
import { messagesMocked } from '../../../../__mocks__/homeMocks'
import { Message, MessageWithUserInfo, UserInfo } from '../types/homeTypes'
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
}

export const GetMessagesFromChannelSpaceUsecase = ({ getUserByUserIdUsecase }: GetMessagesFromChannelSpaceUsecaseProps) => {
  const getMessages = ({ serverId, channelId, spaceId }: GetInfoProps): Message[] => {
    const messages = messagesMocked
      .filter(msg => msg.serverId === serverId && msg.channelId === channelId && msg.spaceId === spaceId)
      .reduce<Message[]>((prev, curr) => ([...prev, ...curr.messages]), [])

    return messages
  }

  const getMessagesWithUserInfo = ({ serverId, channelId, spaceId }: GetInfoProps): MessageWithUserInfo[] => {
    const messages: Message[] = getMessages({ serverId, channelId, spaceId })
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
