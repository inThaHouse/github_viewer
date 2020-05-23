import React from 'react'

interface Props {
  languages: string[]
  handleSelect: any
  selectedLanguage: string
}

const LanguageList = (props: Props): React.ReactElement => {
  const { languages, handleSelect, selectedLanguage } = props

  return (
    <ul className='languageList'>
      {languages.map((language) => (
        <li key={language}>
          <button
            onClick={() => handleSelect(language)}
            className={`languageBtn ${
              selectedLanguage === language ? 'selectedLang' : ''
            }`}
          >
            {language}
          </button>
        </li>
      ))}
    </ul>
  )
}

export default LanguageList
