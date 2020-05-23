require('dotenv').config()

exports.handler = function (event, context, callback) {
  const axios = require('axios')
  const GITHUB_GRAPHQL_URL = 'https://api.github.com/graphql'
  const body = JSON.parse(event.body)

  const query = `query {
    repository(name: "${body.repoName}", owner: "${body.repoOwner}") {
      id
      name
      createdAt
      forkCount
      homepageUrl
      owner {
        login
        avatarUrl
        url
      }
      description
      stargazers {
        totalCount
      }
      issues(last: 10) {
        totalCount
        nodes {
          url
          updatedAt
          state
          title
          body
          author {
            login
          }
        }
      }
    }
  }
  `

  return axios({
    url: GITHUB_GRAPHQL_URL,
    method: 'post',
    headers: {
      authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
    data: {
      query,
    },
  })
    .then((repos) => {
      return {
        statusCode: 200,
        body: JSON.stringify(repos.data.data.repository),
      }
    })
    .catch((error) => console.error(`error from API`, error))
}
