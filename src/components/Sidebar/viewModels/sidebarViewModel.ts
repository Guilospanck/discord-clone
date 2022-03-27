export interface IUseSidebarViewModel {
  servers: number[]
}

export const useSidebarViewModel = (): IUseSidebarViewModel => {
  const servers = [1, 2, 3, 4]

  return {
    servers
  }
}
