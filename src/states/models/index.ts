import { Models } from '@rematch/core'
import { searchDetail, } from './searchDetail'
import { Authentication } from './auth'
export interface RootModel extends Models<RootModel> {
  searchDetail: typeof searchDetail,
  Authentication: typeof Authentication
}

export const models: RootModel = {
  searchDetail,
  Authentication
}