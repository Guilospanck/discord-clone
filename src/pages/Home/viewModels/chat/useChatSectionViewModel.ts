import { useContext } from 'react'
import { HomeContext } from '../../context/homeContext'

export type UseChatSectionViewModelReturnType = {
  channelTitle: string
}

export const useChatSectionViewModel = (): UseChatSectionViewModelReturnType => {
  const {
    channelTitle
  } = useContext(HomeContext)

  return {
    channelTitle
  }
}
