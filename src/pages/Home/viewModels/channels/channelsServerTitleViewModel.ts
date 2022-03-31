export type UseChannelsServerTitleViewModelReturnType = {
  serverTitleMock: string
}

export const useChannelsServerTitleViewModel = (): UseChannelsServerTitleViewModelReturnType => {
  const serverTitleMock = 'Dota da depressão'

  return {
    serverTitleMock
  }
}
