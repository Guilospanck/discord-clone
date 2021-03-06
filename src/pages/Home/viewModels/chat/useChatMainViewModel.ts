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
    getAllConsecutiveMessagesFromUser,
    UpdateMessagesToSinalizeNextDay
  } = useContext(HomeContext)

  /** Effect triggered when changing servers using the sidebar component.
   *  It'll take the first channel of the first category of the server
   *  selected in order to load the right messages.
   */
  useEffect(() => {
    const firstCategoryOfServer = serverSelected?.categories[0]
    const firstChannelOfFirstCategory = firstCategoryOfServer?.channels[0]

    if (!firstCategoryOfServer || !firstChannelOfFirstCategory) {
      setMessages([])
      setChannelSelected(null)
      return
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

    if (!msgs || msgs.length === 0) {
      setMessages([])
      return
    }

    /** get all consecutive messages from user */
    const messagesDividedByUser = getAllConsecutiveMessagesFromUser({ msgs })

    /** Add 'nextDay' if is new date */
    const updatedMessages = UpdateMessagesToSinalizeNextDay({ msgs: messagesDividedByUser }).update()

    setMessages(updatedMessages)
  }, [channelSelected])

  return {
    messages
  }
}
