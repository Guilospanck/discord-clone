import React from 'react'
import { UseChatMainViewModelReturnType } from '~/pages/Home/viewModels/chat/useChatMainViewModel'

import {
  Article,
  Container,
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

export const ChatMainView = ({ }: ChatMainViewProps) => {

  const mockedText = 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'

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
          {mockedText}
        </MessageContent>
      </MessageContainer>

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
          {mockedText}
        </MessageContent>
      </MessageContainer>

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
          {mockedText}
        </MessageContent>
      </MessageContainer>



    </Article>
  )

}