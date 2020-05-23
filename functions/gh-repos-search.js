require('dotenv').config()

exports.handler = function (event, context, callback) {
  const axios = require('axios')
  const GITHUB_GRAPHQL_URL = 'https://api.github.com/graphql'
  const body = JSON.parse(event.body)

  const query = `query { 
    search(first:32, type: REPOSITORY, query: "stars:>1 language:${body.language}") {
      nodes {
        ...on Repository {
          description
          homepageUrl
          name
          stargazers {
            totalCount
          }
          owner {
            login
            avatarUrl
          }
        }
      }
    }
  }`

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
    .then((repos) => ({
      statusCode: 200,
      body: JSON.stringify(repos.data),
    }))
    .catch((error) => console.error(`error from API`, error))
}
