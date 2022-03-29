import { SyntheticEvent, useRef } from "react"

export type UseChatFormViewModelReturnType = {
  messageRef: React.MutableRefObject<HTMLDivElement>,
  onKeyDown: (e: any) => void
}

export const useChatFormViewModel = (): UseChatFormViewModelReturnType => {
  const messageRef = useRef<HTMLDivElement>(null);

  const onKeyDown = (e: KeyboardEvent) => {  
    if(e.key === "Enter" && e.shiftKey) {
      // console.log(messageRef.current.innerText)
    } else if (e.key === "Enter") {
      e.preventDefault()      
    }

  }

  return {
    messageRef,
    onKeyDown
  }
}