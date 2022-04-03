import { useContext, useEffect } from 'react'
import { HomeContext } from '../../context/homeContext'
import { GetMessagesFromChannelUsecaseReturnType } from '../../useCases/getMessagesFromChannelUsecase'
import { MessageWithUserInfo } from '../../types/homeTypes'

export type UseChatMainViewModelReturnType = {
  messages: MessageWithUserInfo[],
}

type useChatMainViewModelProps = {
  getMessagesFromChannelSpaceUsecase: GetMessagesFromChannelUsecaseReturnType
}

export const useChatMainViewModel = ({ getMessagesFromChannelSpaceUsecase }: useChatMainViewModelProps): UseChatMainViewModelReturnType => {
  const {
    serverSelected,
    categorySelected,
    channelSelected,
    setChannelSelected,
    messages, setMessages,
    GetAllConsecutiveMessagesFromUser
  } = useContext(HomeContext)

  /** Effect triggered when changing servers using the sidebar component.
   *  It'll take the first channel of the first category of the server
   *  selected in order to load the right messages.
   */
  useEffect(() => {
    const firstCategoryOfServer = serverSelected?.categories[0]
    if (!firstCategoryOfServer) {
      setMessages([])
    }

    const firstChannelOfFirstCategory = firstCategoryOfServer?.channels[0]
    if (!firstChannelOfFirstCategory) {
      setMessages([])
      setChannelSelected(null)
    }

    setChannelSelected(firstChannelOfFirstCategory)
  }, [serverSelected])

  useEffect(() => {
    if (!serverSelected?.id || !categorySelected?.id || !channelSelected?.id) {
      return
    }

    const msgs = getMessagesFromChannelSpaceUsecase.getMessagesWithUserInfo({
      serverId: serverSelected.id,
      categoryId: categorySelected.id,
      channelId: channelSelected.id
    })

    if (!msgs || msgs.length === 0) return

    /** get all consecutive messages from user */
    const messagesDividedByUser = GetAllConsecutiveMessagesFromUser({ msgs })

    setMessages(messagesDividedByUser)
  }, [channelSelected])

  return {
    messages
  }
}
