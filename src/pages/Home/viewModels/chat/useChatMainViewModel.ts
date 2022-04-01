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
    setSpaceSelected,
    messages, setMessages
  } = useContext(HomeContext)

  useEffect(() => {
    const firstChannelOfServer = serverSelected?.channels[0]
    if (!firstChannelOfServer) {
      setMessages([])
    }

    const firstSpaceOfFirstChannel = firstChannelOfServer?.spaces[0]
    if (!firstSpaceOfFirstChannel) {
      setMessages([])
      setSpaceSelected(null)
    }

    setSpaceSelected(firstSpaceOfFirstChannel)
  }, [serverSelected])

  useEffect(() => {
    if (!serverSelected?.id || !channelSelected?.id || !spaceSelected?.id) {
      return
    }

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
