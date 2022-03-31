import { useCallback, useContext, useState } from 'react'
import { HomeContext } from '../../context/homeContext'
import { ServerInfo } from '../../types/homeTypes'

export type UseSidebarViewModelReturnType = {
  allServers: ServerInfo[],
  DISCORD_LOGO_COLOR: string,
  handleSidebarLinkClick: (serverIdx: number) => void,
  serverSelected: ServerInfo,
  handleOnMouseEnterPillAndImageContainer: (serverId: string) => void,
  handleOnMouseLeavePillAndImageContainer: (serverId: string) => void,
  serverHover: {}
}

export const useSidebarViewModel = (): UseSidebarViewModelReturnType => {
  const DISCORD_LOGO_COLOR = '#5865F2'

  const { allServers, serverSelected, setServerSelected } = useContext(HomeContext)

  const [serverHover, setServerHover] = useState({})

  const handleSidebarLinkClick = useCallback((serverIdx: number): void => {
    setServerSelected(allServers[serverIdx])
  }, [])

  const handleOnMouseEnterPillAndImageContainer = useCallback((serverId: string): void => {
    setServerHover(props => ({
      ...props,
      [serverId]: true
    }))
  }, [])

  const handleOnMouseLeavePillAndImageContainer = useCallback((serverId: string): void => {
    setServerHover(props => ({
      ...props,
      [serverId]: false
    }))
  }, [])

  return {
    allServers,
    DISCORD_LOGO_COLOR,
    handleSidebarLinkClick,
    serverSelected,
    handleOnMouseEnterPillAndImageContainer,
    handleOnMouseLeavePillAndImageContainer,
    serverHover
  }
}
