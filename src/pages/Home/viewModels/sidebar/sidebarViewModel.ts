import { useCallback, useContext, useState } from 'react'
import { HomeContext } from '../../context/homeContext'
import { Server } from '../../types/homeTypes'

export type UseSidebarViewModelReturnType = {
  allServers: Server[],
  DISCORD_LOGO_COLOR: string,
  handleSidebarLinkClick: (serverIdx: number) => void,
  serverSelected: Server,
  handleOnMouseEnterPillAndImageContainer: (serverId: string) => void,
  handleOnMouseLeavePillAndImageContainer: (serverId: string) => void,
  serverHover: {}
}

export const useSidebarViewModel = (): UseSidebarViewModelReturnType => {
  const DISCORD_LOGO_COLOR = '#5865F2'

  const { allServers, serverSelected, setServerSelected, setCategorySelected } = useContext(HomeContext)

  const [serverHover, setServerHover] = useState({})

  const handleSidebarLinkClick = useCallback((serverIdx: number): void => {
    const server = allServers[serverIdx]

    setServerSelected(server)
    setCategorySelected(server.categories.length > 0 ? server.categories[0] : null)
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
