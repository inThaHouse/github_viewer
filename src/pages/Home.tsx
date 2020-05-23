import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import LanguageList from '../components/LanguageList/LanguageList'
import RepoList from '../components/RepoCards/RepoCards'
import { RepoType } from '../models/RepoType'
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner'
import Title from '../components/Title/Title'

const Home = (): React.ReactElement => {
  const history = useHistory()
  const languages = ['All', 'JavaScript', 'Kotlin', 'C#', 'Golang', 'Python']

  const [repos, setRepos] = useState<RepoType[]>([])
  const [selectedTech, setSelectedTech] = useState<string>(languages[0])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    setIsLoading(true)

    axios
      .post('/api/gh-repos-search', { language: selectedTech })
      .then((response) => {
        setRepos(response.data.data.search.nodes)
        setIsLoading(false)
      })
  }, [selectedTech])

  const selectTech = (language: string) => setSelectedTech(language)

  const selectRepo = (repoName: string, repoOwner: string): void => {
    axios
      .post('/api/gh-single-repo-search', { repoName, repoOwner })
      .then((response) => {
        history.push(`/repoProfile`, response.data)
      })
      .catch((error) => console.error('Something went from home.tsx', error))
  }

  return (
    <>
      <Title title={'Browse trending repos by programming language.'} />
      <LanguageList
        languages={languages}
        handleSelect={selectTech}
        selectedLanguage={selectedTech}
      />
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <RepoList repos={repos} selectRepo={selectRepo} />
      )}
    </>
  )
}

export default Home
