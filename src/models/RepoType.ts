import { OwnerType } from './OwnerType'
import { StarGazersType } from './StarGazersType'
import { IssueType } from './IssueType'

export interface RepoType {
  name: string
  description: string
  owner: OwnerType
  stargazers: StarGazersType
  homepageUrl: string
  forkCount: number
  createdAt: Date
  id: string
  issues: IssueType
}
