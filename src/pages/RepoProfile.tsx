import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Title from '../components/Title/Title'

const RepoProfile = (): React.ReactElement => {
  const history = useHistory()
  const [repoProfile, setRepoProfile] = useState<any>(null)

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
      </>
    )
  )
}

export default RepoProfile
