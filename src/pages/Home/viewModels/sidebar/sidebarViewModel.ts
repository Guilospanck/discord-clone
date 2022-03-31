import { useCallback, useContext } from 'react'
import { HomeContext } from '../../context/homeContext'
import { ServerInfo } from '../../types/homeTypes'

export type UseSidebarViewModelReturnType = {
  allServers: ServerInfo[],
  DISCORD_LOGO_COLOR: string,
  handleSidebarLinkClick: (serverIdx: number) => void
}

export const useSidebarViewModel = (): UseSidebarViewModelReturnType => {
  const DISCORD_LOGO_COLOR = '#5865F2'

  const { allServers, setServerSelected } = useContext(HomeContext)

  const handleSidebarLinkClick = useCallback((serverIdx: number): void => {
    setServerSelected(allServers[serverIdx])
  }, [])

  return {
    allServers,
    DISCORD_LOGO_COLOR,
    handleSidebarLinkClick
  }
}
