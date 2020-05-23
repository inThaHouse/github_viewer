import { OwnerType } from './OwnerType'

export interface Issue {
  title: string
  body: string
  author: OwnerType
  url: string
  updatedAt: Date
  state: string
}
