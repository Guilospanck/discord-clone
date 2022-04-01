import React, { useCallback, useContext, useRef, useState } from 'react'
import { HomeContext } from '../../context/homeContext'

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

export const useChatFormViewModel = (): UseChatFormViewModelReturnType => {
  const { BACKGROUND_POSITIONS } = useContext(HomeContext)

  const messageRef = useRef<HTMLDivElement>(null)
  const [emojiCoordinates, setEmojiCoordinates] = useState<EmojiCoordinatesType>({ x: 0, y: 0 })
  const emojiCoordinatesIndexRef = useRef(0)

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      // console.log(messageRef.current.innerText)
    }
  }

  const onMouseEnterEmojiBtn = useCallback(() => {
    console.log('hey')
    // const index = Math.floor(Math.random() * BACKGROUND_POSITIONS.length)

    /** Iterator */
    const currentIndex = emojiCoordinatesIndexRef.current
    let newIndex = currentIndex + 1
    if (newIndex >= BACKGROUND_POSITIONS.length) {
      newIndex = 0
    }

    emojiCoordinatesIndexRef.current = newIndex
    setEmojiCoordinates(BACKGROUND_POSITIONS[newIndex])
  }, [])

  return {
    messageRef,
    onKeyDown,
    onMouseEnterEmojiBtn,
    emojiCoordinates
  }
}
