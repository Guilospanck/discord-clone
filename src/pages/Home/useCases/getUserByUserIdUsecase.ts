// TODO: get Messages from backend
import { usersMocked } from '../../../../__mocks__/homeMocks'

import { UserInfo } from '../types/homeTypes'

export type GetUserByUserIdUsecaseReturnType = {
  get: (userId: string) => UserInfo
}

export const GetUserByUserIdUsecase = (): GetUserByUserIdUsecaseReturnType => {
  const get = (userId: string): UserInfo => {
    return usersMocked.find(user => user.id === userId)
  }

  return {
    get
  }
}
