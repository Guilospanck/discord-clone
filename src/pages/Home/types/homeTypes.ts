/** For getting emoji from PNG (assets/images/Discord-emoji.png) */
export type BGSizeCoordinates = {
  x: number,
  y: number
}

export type BackgroundPositionsIteratorType = {
  next: () => BGSizeCoordinates
}

export type User = {
  id: string,
  name: string,
  tag: string,
  avatarURL: string
}

export enum IconEnum {
  HASHTAG,
  AUDIO,
  DONE_LIST
}

export type Channel = {
  id: string,
  title: string,
  icon: IconEnum
}

export type Category = {
  id: string,
  title: string,
  channels: Channel[]
}

export type Server = {
  id: string,
  title: string,
  icon: string,
  categories: Category[]
}

export type Message = {
  id: string,
  userId: string,
  timestamp: string,
  message: string
}

export type Messages = {
  id: string,
  serverId: string,
  categoryId: string,
  channelId: string,
  messages: Message[]
}

export type MessageWithUserInfo = {
  messages: Message[],
  user: User,
  nextDay?: boolean
}
