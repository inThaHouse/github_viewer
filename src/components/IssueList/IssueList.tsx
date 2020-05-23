import React from 'react'
import { Issue } from '../../models/Issue'
import { truncate } from '../../utils/generalUtils'

interface Props {
  issues: Issue[]
}

const IssueList = (props: Props): React.ReactElement => {
  const { issues } = props

  return (
    <div className='issueListCtn'>
      <h2>Latest issues</h2>
      <ul className={'issueList'}>
        {issues.map((issue: any) => (
          <li key={issue.author.login + issue.title}>
            <h3>logged by: {issue.author.login}</h3>
            <h4>{issue.title}</h4>
            <p>{truncate(issue.body, 200)}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default IssueList
