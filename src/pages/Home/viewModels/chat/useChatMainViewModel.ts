import { useContext, useEffect } from 'react'
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
    spaceSelected,
    messages, setMessages
  } = useContext(HomeContext)

  useEffect(() => {
    const msgs = getMessagesFromChannelSpaceUsecase.getMessagesWithUserInfo({
      serverId: serverSelected.id,
      channelId: channelSelected.id,
      spaceId: spaceSelected.id
    })

    setMessages(msgs)
  }, [spaceSelected])

  return {
    messages
  }
}
