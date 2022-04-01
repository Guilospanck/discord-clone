import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { HomeContext } from '../../context/homeContext'
import { GetMessagesFromChannelSpaceUsecaseReturnType } from '../../useCases/getMessagesFromChannelSpaceUsecase'
import { SaveMessageUsecaseReturnType } from '../../useCases/saveMessageUsecase'

type EmojiCoordinatesType = {
  x: number,
  y: number
}

export type UseChatFormViewModelReturnType = {
  messageRef: React.MutableRefObject<HTMLDivElement>,
  onKeyDown: (e: React.KeyboardEvent<HTMLDivElement>) => void,
  onMouseEnterEmojiBtn: () => void,
  emojiCoordinates: EmojiCoordinatesType
}

type UseChatFormViewModelProps = {
  saveMessageUsecase: SaveMessageUsecaseReturnType,
  getMessagesFromChannelSpaceUsecase: GetMessagesFromChannelSpaceUsecaseReturnType
}

export const useChatFormViewModel = ({ saveMessageUsecase, getMessagesFromChannelSpaceUsecase }: UseChatFormViewModelProps): UseChatFormViewModelReturnType => {
  const {
    backgroundPositionsIterator,
    serverSelected,
    channelSelected,
    spaceSelected,
    currentUser,
    setMessages
  } = useContext(HomeContext)

  const messageRef = useRef<HTMLDivElement>(null)
  const [emojiCoordinates, setEmojiCoordinates] = useState<EmojiCoordinatesType>({ x: 0, y: 0 })

  useEffect(() => {
    messageRef.current.focus()
  }, [messageRef])

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      const message = messageRef.current.innerText
      _saveAndUpdateMessages(message)
    }
  }

  const onMouseEnterEmojiBtn = useCallback(() => {
    const nextCoordinates = backgroundPositionsIterator().next()
    setEmojiCoordinates(nextCoordinates)
  }, [])

  const _saveAndUpdateMessages = (message: string) => {
    const paramsObj = {
      serverId: serverSelected.id,
      channelId: channelSelected.id,
      spaceId: spaceSelected.id
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
  }

  return {
    messageRef,
    onKeyDown,
    onMouseEnterEmojiBtn,
    emojiCoordinates
  }
}
