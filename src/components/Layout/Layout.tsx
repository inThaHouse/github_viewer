import React from 'react'
import Navigation from '../Navigation/Navigation'

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props): React.ReactElement => (
  <>
    <main>{children}</main>
  </>
)

export default Layout
