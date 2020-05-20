import React, { useEffect } from 'react'
import axios from 'axios'
import './helloWorld.css'

const HelloWorld = (): React.ReactElement => {
  // trying/testing serverless function
  useEffect(() => {
    axios('/api/gh-user-search').then((response) => console.log(response.data))
  }, [])

  return <h1>HELLO WORLD!</h1>
}

export default HelloWorld
