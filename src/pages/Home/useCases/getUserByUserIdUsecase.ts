// TODO: get Messages from backend
import { usersMocked } from '../../../../__mocks__/homeMocks'

import { User } from '../types/homeTypes'

export type GetUserByUserIdUsecaseReturnType = {
  get: (userId: string) => User
}

export const GetUserByUserIdUsecase = (): GetUserByUserIdUsecaseReturnType => {
  const get = (userId: string): User => {
    if (!userId) {
      return null
    }

    return usersMocked.find(user => user.id === userId)
  }

  return {
    get
  }
}
