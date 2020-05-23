import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

const Navigation = (): React.ReactElement => {
  let history = useHistory()
  const [selectedPath, setSelectedPath] = useState<string>(
    history.location.pathname
  )

  const paths = [
    { pathname: '/', pathString: 'Github-Viewer' },
    { pathname: '/about', pathString: 'About' },
    { pathname: '/search', pathString: 'Search' },
  ]

  return (
    <>
      <nav className='navigation'>
        <ul className='navList'>
          {paths.map((path) => (
            <li key={path.pathString}>
              <Link
                style={{
                  color: selectedPath === path.pathname ? 'crimson' : '',
                }}
                to={path.pathname}
                onClick={() => setSelectedPath(path.pathname)}
              >
                {path.pathString}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default Navigation
