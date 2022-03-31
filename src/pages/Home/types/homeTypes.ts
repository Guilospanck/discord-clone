export type UserInfo = {
  name: string,
  tag: string,
  avatarURL: string
}

export enum IconEnum {
  HASHTAG,
  AUDIO,
  DONE_LIST
}

export type ChannelSpaces = {
  spaceTitle: string,
  icon: IconEnum
}

export type Channel = {
  channelTitle: string,
  spaces: ChannelSpaces[]
}

export type ServerInfo = {
  serverTitle: string,
  serverIcon: string,
  channels: Channel[]
}
