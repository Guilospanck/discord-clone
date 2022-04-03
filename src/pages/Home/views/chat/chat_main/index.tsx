import React from 'react'
import { Message, User } from '~/pages/Home/types/homeTypes'
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

const RenderMessagesFromUser = ({ messages }: { messages: Message[] }) => {
  if (!messages.length) return <></>

  const elements = messages.map((message, messageIdx) => (
    <MessageContent key={`${message.id}-${messageIdx}`}>
      {message.message}
    </MessageContent>
  ))

  return <>{elements}</>
}

const RenderUserNameAvatarAndTimestamp = ({ avatarURL, name, timestamp }: { avatarURL: string, name: string, timestamp: string }) => (
  <>
    <Avatar
      src={avatarURL}
      aria-hidden="true"
      alt=" "
    />
    <UsernameAndTimestampContainer>
      <Username>{name}</Username>
      {
        timestamp && (
          <TimestampContainer>
            <Timestamp>{new Date(Number(timestamp)).toLocaleDateString('pt-br')}</Timestamp>
          </TimestampContainer>
        )
      }
    </UsernameAndTimestampContainer>
  </>
)

const RenderMessagesAndUserInformation = ({ user, messages, index }: { user: User, messages: Message[], index: number }) => {
  const randomId = messages.length ? messages[0].id : 'random'

  if (!user || !messages.length) return <></>

  return (
    <MessageContainer key={`${user.id}-${index}-${randomId}`}>
      <RenderUserNameAvatarAndTimestamp
        key={`${user.id}-${index}-${randomId}-user_info`}
        avatarURL={user.avatarURL}
        name={user.name}
        timestamp={messages[0]?.timestamp ?? ''}
      />
      <RenderMessagesFromUser messages={messages} />
    </MessageContainer>
  )
}

type ChatMainViewProps = {
  viewModel: UseChatMainViewModelReturnType
}

export const ChatMainView = ({ viewModel }: ChatMainViewProps) => {
  return (
    <Article>
      {
        viewModel.messages.map((msg, idx) => (
          <RenderMessagesAndUserInformation
            key={`${msg.user.id}-${idx}-${msg.messages[0]?.timestamp ?? ''}`}
            user={msg.user}
            messages={msg.messages}
            index={idx}
          />
        ))
      }
    </Article>
  )
}
