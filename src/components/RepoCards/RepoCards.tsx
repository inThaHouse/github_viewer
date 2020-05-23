import React from 'react'
import { RepoType } from '../../models/RepoType'
import { truncate } from '../../utils/generalUtils'

interface Props {
  repos: RepoType[]
  selectRepo: any
}

const RepoList = (props: Props): React.ReactElement => {
  const { repos, selectRepo } = props

  return (
    <ul className='repoCards'>
      {repos.map(({ homepageUrl, description, name, owner }) => (
        <li key={homepageUrl + description}>
          <h2>{name}</h2>
          <img src={owner.avatarUrl} />
          <h3>by: {owner.login}</h3>
          <p>{truncate(description, 50)}</p>
          <button
            onClick={() => selectRepo(name, owner.login)}
            className='detailBtn'
          >
            Repo Detail
          </button>
        </li>
      ))}
    </ul>
  )
}

export default RepoList
