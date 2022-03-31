import { useContext } from 'react'
import { HomeContext } from '../../context/homeContext'
import { Channel } from '../../types/homeTypes'

export type UseChannelsSidebarViewModelReturnType = {
  channels: Channel[],
}

export const useChannelsSidebarViewModel = (): UseChannelsSidebarViewModelReturnType => {
  const { serverSelected } = useContext(HomeContext)

  return {
    channels: serverSelected.channels
  }
}
