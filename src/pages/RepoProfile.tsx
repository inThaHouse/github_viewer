import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Title from '../components/Title/Title'
import { RepoType } from '../models/RepoType'
import IssueList from '../components/IssueList/IssueList'

const RepoProfile = (): React.ReactElement => {
  const history = useHistory()
  const [repoProfile, setRepoProfile] = useState<RepoType | any>(null)

  useEffect(() => {
    if (history?.location?.state) {
      setRepoProfile(history.location.state)
    } else {
      history.push('/')
    }
  }, [])

  return (
    repoProfile && (
      <>
        <Title title={repoProfile.name} />
        <div className='repoProfilePage'>
          <div className='repoProfileCard'>
            <img src={repoProfile.owner.avatarUrl} />
            <h3>{repoProfile.owner.login}</h3>
            <p>{repoProfile.description}</p>
            <h4>⭐ {repoProfile.stargazers.totalCount}</h4>
            <h4>🐛 {repoProfile.issues.totalCount}</h4>
            <h5>
              Homepage can be found{' '}
              <a target='blank' href={repoProfile.homepageUrl}>
                here
              </a>
              .
            </h5>
            <h5>
              Repo can be found{' '}
              <a target='blank' href={repoProfile.owner.url}>
                here
              </a>
              .
            </h5>
          </div>

          <IssueList issues={repoProfile.issues.nodes} />
        </div>
      </>
    )
  )
}

export default RepoProfile
