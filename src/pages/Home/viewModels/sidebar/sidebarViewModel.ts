import { useContext } from 'react'
import { HomeContext } from '../../context/homeContext'
import { ServerInfo } from '../../types/homeTypes'

export type UseSidebarViewModelReturnType = {
  allServers: ServerInfo[],
  DISCORD_LOGO_COLOR: string
}

export const useSidebarViewModel = (): UseSidebarViewModelReturnType => {
  const DISCORD_LOGO_COLOR = '#5865F2'

  const { allServers } = useContext(HomeContext)

  return {
    allServers,
    DISCORD_LOGO_COLOR
  }
}
