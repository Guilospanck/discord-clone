import { useContext } from 'react'
import { HomeContext } from '../../context/homeContext'

export type UseChannelsServerTitleViewModelReturnType = {
  serverTitle: string
}

export const useChannelsServerTitleViewModel = (): UseChannelsServerTitleViewModelReturnType => {
  const { serverSelected } = useContext(HomeContext)

  return {
    serverTitle: serverSelected.serverTitle
  }
}
