import React from 'react'
import { UseChatMainViewModelReturnType } from '~/pages/Home/viewModels/chat/useChatMainViewModel'

import {
  Article,
  Avatar,
  MessageContainer,
  UsernameAndTimestampContainer,
  Username,
  TimestampContainer,
  Timestamp,
  MessageContent
} from './styles'

type ChatMainViewProps = {
  viewModel: UseChatMainViewModelReturnType
}

export const ChatMainView = ({ viewModel }: ChatMainViewProps) => {
  return (
    <Article>
      <MessageContainer>
        <Avatar
          src="https://cdn.discordapp.com/avatars/759237066999201852/e780bd32be2d3b5e78179ddc8da20e77.webp?size=80"
          aria-hidden="true"
          alt=" "
        />
        <UsernameAndTimestampContainer>
          <Username>guilospanck</Username>
          <TimestampContainer>
            <Timestamp>Today at 6:11pm</Timestamp>
          </TimestampContainer>
        </UsernameAndTimestampContainer>
        <MessageContent>
          {viewModel.mockedText}
        </MessageContent>
      </MessageContainer>
    </Article>
  )
}
