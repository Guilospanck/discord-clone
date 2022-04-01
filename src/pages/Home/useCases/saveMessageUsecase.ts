import { v4 as uuidv4 } from 'uuid'
import { Messages } from '../types/homeTypes'

export type SaveMessageUsecaseReturnType = {
  save: ({ serverId, categoryId, channelId, userId, message }: SaveProps) => void
}

type SaveProps = {
  serverId: string,
  categoryId: string,
  channelId: string,
  userId: string,
  message: string
}

export const SaveMessageUsecase = (): SaveMessageUsecaseReturnType => {
  const save = ({ serverId, categoryId, channelId, userId, message }: SaveProps): void => {
    const timestamp = new Date().getTime().toString()
    const messagesId = uuidv4()
    const messageId = uuidv4()

    const messageToSave: Messages = {
      id: messagesId,
      serverId,
      categoryId,
      channelId,
      messages: [{
        id: messageId,
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
