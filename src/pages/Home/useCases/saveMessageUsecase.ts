import { Messages } from '../types/homeTypes'

export type SaveMessageUsecaseReturnType = {
  save: ({ serverId, channelId, spaceId, userId, message }: SaveProps) => void
}

type SaveProps = {
  serverId: string,
  channelId: string,
  spaceId: string,
  userId: string,
  message: string
}

export const SaveMessageUsecase = (): SaveMessageUsecaseReturnType => {
  const save = ({ serverId, channelId, spaceId, userId, message }: SaveProps): void => {
    const timestamp = new Date().getTime().toString()

    const messageToSave: Messages = {
      serverId,
      channelId,
      spaceId,
      messages: [{
        userId,
        timestamp,
        message
      }]
    }

    // save to DB, localStorage, cache...
    _saveToLocalStorage(messageToSave)
  }

  const _saveToLocalStorage = (messageToSave: Messages): void => {
    const msgInLocalStorage = localStorage.getItem('messages') ? JSON.parse(localStorage.getItem('messages')) : []
    const messagesFromLocalStorage: Messages[] = msgInLocalStorage
    const messageToSaveIntoLocalStorage: Messages[] = [
      ...messagesFromLocalStorage,
      messageToSave
    ]

    localStorage.setItem('messages', JSON.stringify(messageToSaveIntoLocalStorage))
  }

  return {
    save
  }
}
