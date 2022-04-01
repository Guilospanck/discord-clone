import { useContext } from 'react'
import { HomeContext } from '../../context/homeContext'
import { Channel } from '../../types/homeTypes'

export type UseChannelsSidebarViewModelReturnType = {
  channels: Channel[],
  onSpaceClick: (channelId: string, spaceId: string) => void
}

export const useChannelsSidebarViewModel = (): UseChannelsSidebarViewModelReturnType => {
  const {
    serverSelected,
    setChannelSelected,
    setSpaceSelected
  } = useContext(HomeContext)

  const onSpaceClick = (channelId: string, spaceId: string) => {
    const channelSelected = serverSelected.channels.find(channel => channel.id === channelId)
    const spaceSelected = channelSelected.spaces.find(space => space.id === spaceId)

    setChannelSelected(channelSelected)
    setSpaceSelected(spaceSelected)
  }

  return {
    channels: serverSelected.channels,
    onSpaceClick
  }
}
