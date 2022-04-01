import { useContext } from 'react'
import { HomeContext } from '../../context/homeContext'

export type UseChannelsServerTitleViewModelReturnType = {
  title: string
}

export const useChannelsServerTitleViewModel = (): UseChannelsServerTitleViewModelReturnType => {
  const { serverSelected } = useContext(HomeContext)

  const { title } = serverSelected

  return {
    title
  }
}
