import { useContext, useEffect, useState } from 'react'
import { HomeContext } from '../../context/homeContext'
import { GetMessagesFromChannelSpaceUsecaseReturnType } from '../../useCases/getMessagesFromChannelSpaceUsecase'
import { MessageWithUserInfo } from '../../types/homeTypes'

export type UseChatMainViewModelReturnType = {
  messages: MessageWithUserInfo[]
}

type useChatMainViewModelProps = {
  getMessagesFromChannelSpaceUsecase: GetMessagesFromChannelSpaceUsecaseReturnType
}

export const useChatMainViewModel = ({ getMessagesFromChannelSpaceUsecase }: useChatMainViewModelProps): UseChatMainViewModelReturnType => {
  const {
    serverSelected,
    channelSelected,
    spaceSelected
  } = useContext(HomeContext)

  const [messages, setMessages] = useState<MessageWithUserInfo[]>([])

  useEffect(() => {
    const messages = getMessagesFromChannelSpaceUsecase.getMessagesWithUserInfo({
      serverId: serverSelected.id,
      channelId: channelSelected.id,
      spaceId: spaceSelected.id
    })

    setMessages(messages)
  }, [spaceSelected])

  return {
    messages
  }
}
