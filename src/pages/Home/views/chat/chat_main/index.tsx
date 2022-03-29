import React from 'react'
import { UseChatMainViewModelReturnType } from '~/pages/Home/viewModels/chat/useChatMainViewModel'

import {
  Article
} from './styles'

type ChatMainViewProps = {
  viewModel: UseChatMainViewModelReturnType
}

export const ChatMainView = ({ }: ChatMainViewProps) => {

  return (
    <Article>
      Main Chat
    </Article>
  )

}