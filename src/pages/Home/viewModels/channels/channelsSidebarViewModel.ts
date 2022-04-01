import { useContext } from 'react'
import { HomeContext } from '../../context/homeContext'
import { Category } from '../../types/homeTypes'

export type UseChannelsSidebarViewModelReturnType = {
  categories: Category[],
  onChannelClick: (categoryId: string, channelId: string) => void
}

export const useChannelsSidebarViewModel = (): UseChannelsSidebarViewModelReturnType => {
  const {
    serverSelected,
    setCategorySelected,
    setChannelSelected
  } = useContext(HomeContext)

  const { categories } = serverSelected

  const onChannelClick = (categoryId: string, channelId: string) => {
    const categorySelected = serverSelected.categories.find(category => category.id === categoryId)
    const channelSelected = categorySelected.channels.find(channel => channel.id === channelId)

    setCategorySelected(categorySelected)
    setChannelSelected(channelSelected)
  }

  return {
    categories,
    onChannelClick
  }
}
