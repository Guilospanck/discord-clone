import { useContext } from 'react'
import { HomeContext } from '../../context/homeContext'

export type UseChatSectionViewModelReturnType = {
  spaceName: string
}

export const useChatSectionViewModel = (): UseChatSectionViewModelReturnType => {
  const {
    spaceSelected
  } = useContext(HomeContext)

  return {
    spaceName: spaceSelected.spaceTitle
  }
}
