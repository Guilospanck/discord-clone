import React from 'react'

/** View Models */
import { useSidebarViewModel } from './viewModels/sidebarViewModel'

/** Views */
import { SidebarView } from './views'

export const Sidebar = () => {
  const viewModel = useSidebarViewModel()

  return (
    <SidebarView viewModel={viewModel} />
  )
}
