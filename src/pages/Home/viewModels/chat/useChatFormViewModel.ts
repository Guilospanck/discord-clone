import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { HomeContext } from '../../context/homeContext'
import { BGSizeCoordinates } from '../../types/homeTypes'
import { GetMessagesFromChannelUsecaseReturnType } from '../../useCases/getMessagesFromChannelUsecase'
import { SaveMessageUsecaseReturnType } from '../../useCases/saveMessageUsecase'

export type UseChatFormViewModelReturnType = {
  messageRef: React.MutableRefObject<HTMLDivElement>,
  onKeyDown: (e: React.KeyboardEvent<HTMLDivElement>) => void,
  onMouseEnterEmojiBtn: () => void,
  emojiCoordinates: BGSizeCoordinates,
  channelTitle: string
}

type UseChatFormViewModelProps = {
  saveMessageUsecase: SaveMessageUsecaseReturnType,
  getMessagesFromChannelSpaceUsecase: GetMessagesFromChannelUsecaseReturnType
}

export const useChatFormViewModel = ({ saveMessageUsecase, getMessagesFromChannelSpaceUsecase }: UseChatFormViewModelProps): UseChatFormViewModelReturnType => {
  const {
    backgroundPositionsIterator,
    serverSelected,
    categorySelected,
    channelSelected,
    currentUser,
    setMessages,
    channelTitle
  } = useContext(HomeContext)

  const messageRef = useRef<HTMLDivElement>(null)
  const [emojiCoordinates, setEmojiCoordinates] = useState<BGSizeCoordinates>({ x: 0, y: 0 })
  const [update, setUpdate] = useState(false)
  const [updateInputField, setUpdateInputField] = useState(false)

  useEffect(() => {
    if (!categorySelected || categorySelected.channels.length === 0 || !messageRef.current) {
      messageRef.current.contentEditable = 'false'
      messageRef.current.blur()
      setUpdateInputField(!updateInputField)
      return
    }

    messageRef.current.contentEditable = 'true'
    messageRef.current.focus()
    setUpdateInputField(!updateInputField)
  }, [messageRef, update, serverSelected])

  const onKeyDown = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      const message = messageRef.current.innerText
      _saveAndUpdateMessages(message)
    }
  }, [])

  const onMouseEnterEmojiBtn = useCallback(() => {
    const nextCoordinates = backgroundPositionsIterator().next()
    setEmojiCoordinates(nextCoordinates)
  }, [])

  const _saveAndUpdateMessages = (message: string) => {
    const paramsObj = {
      serverId: serverSelected.id,
      categoryId: categorySelected.id,
      channelId: channelSelected.id
    }

    // saves message
    saveMessageUsecase.save({
      ...paramsObj,
      userId: currentUser.id,
      message
    })

    // updates messages state
    const messages = getMessagesFromChannelSpaceUsecase.getMessagesWithUserInfo({ ...paramsObj })
    setMessages(messages)

    messageRef.current.innerText = ''
    setUpdate(!update)
  }

  return {
    messageRef,
    onKeyDown,
    onMouseEnterEmojiBtn,
    emojiCoordinates,
    channelTitle
  }
}
