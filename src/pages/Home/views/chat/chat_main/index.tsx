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
      {
        viewModel.messages.map((msg, idx) => (
          <MessageContainer key={`${msg.id}-${idx}`}>
            <Avatar
              src={msg.avatarURL}
              aria-hidden="true"
              alt=" "
            />
            <UsernameAndTimestampContainer>
              <Username>{msg.name}</Username>
              <TimestampContainer>
                <Timestamp>{new Date(Number(msg.timestamp)).toLocaleDateString('pt-br')}</Timestamp>
              </TimestampContainer>
            </UsernameAndTimestampContainer>
            <MessageContent>
              {msg.message}
            </MessageContent>
          </MessageContainer>
        ))
      }
    </Article>
  )
}
