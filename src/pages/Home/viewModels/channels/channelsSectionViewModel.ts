import { useContext } from 'react'
import { HomeContext } from '../../context/homeContext'

export type UseChannelsSectionViewModelReturnType = {
  name: string,
  tag: string,
  avatarURL: string
}

export const useChannelsSectionViewModel = (): UseChannelsSectionViewModelReturnType => {
  const { currentUser } = useContext(HomeContext)

  const { name, tag, avatarURL } = currentUser

  return {
    name,
    tag,
    avatarURL
  }
}
