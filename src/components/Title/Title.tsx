import React from 'react'

interface Props {
  title: string
}

const Title = (props: Props): React.ReactElement => {
  const { title } = props

  return (
    <div className='title'>
      <h1>{title}</h1>
    </div>
  )
}

export default Title
