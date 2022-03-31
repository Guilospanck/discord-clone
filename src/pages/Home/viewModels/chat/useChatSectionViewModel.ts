export type UseChatSectionViewModelReturnType = {
  channelNameMock: string
}

export const useChatSectionViewModel = (): UseChatSectionViewModelReturnType => {
  const channelNameMock = 'texto'

  return {
    channelNameMock
  }
}
