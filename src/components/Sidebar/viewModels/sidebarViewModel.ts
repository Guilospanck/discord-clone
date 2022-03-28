export interface IUseSidebarViewModel {
  servers: number[],
  DISCORD_LOGO_COLOR: string
}

export const useSidebarViewModel = (): IUseSidebarViewModel => {
  const DISCORD_LOGO_COLOR = '#5865F2'

  const servers = [1, 2, 3, 4]

  return {
    servers,
    DISCORD_LOGO_COLOR
  }
}
