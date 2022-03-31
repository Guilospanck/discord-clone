import React, { useRef, useState } from 'react'

export type UseChatFormViewModelReturnType = {
  messageRef: React.MutableRefObject<HTMLDivElement>,
  onKeyDown: (e: any) => void,
  onMouseEnterEmojiBtn: () => void
  BACKGROUND_POSITIONS: BGSizeCoordinates[],
  emojiRandomnessIndex: number,
}

type BGSizeCoordinates = {
  x: number,
  y: number
}

export const useChatFormViewModel = (): UseChatFormViewModelReturnType => {
  const messageRef = useRef<HTMLDivElement>(null)
  const [emojiRandomnessIndex, setEmojiRandomnessIndex] = useState(0)

  const BACKGROUND_POSITIONS: BGSizeCoordinates[] = [
    {
      x: 0,
      y: 0
    },
    {
      x: -88,
      y: -88
    },
    {
      x: -88,
      y: 0
    },
    {
      x: -88,
      y: -22
    },
    {
      x: -88,
      y: -44
    },
    {
      x: -198,
      y: -22
    },
    {
      x: 0,
      y: -22
    }
  ]

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' && e.shiftKey) {
      // console.log(messageRef.current.innerText)
    } else if (e.key === 'Enter') {
      e.preventDefault()
    }
  }

  const onMouseEnterEmojiBtn = () => {
    const index = Math.floor(Math.random() * BACKGROUND_POSITIONS.length)
    setEmojiRandomnessIndex(index)
  }

  return {
    messageRef,
    onKeyDown,
    onMouseEnterEmojiBtn,
    BACKGROUND_POSITIONS,
    emojiRandomnessIndex
  }
}
