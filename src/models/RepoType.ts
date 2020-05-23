import { OwnerType } from './OwnerType'
import { StarGazersType } from './StarGazersType'

export interface RepoType {
  name: string
  description: string
  owner: OwnerType
  stargazers: StarGazersType
  homepageUrl: string
}
