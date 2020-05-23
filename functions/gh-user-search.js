require('dotenv').config()

exports.handler = function (event, context, callback) {
  const axios = require('axios')
  const id = process.env.GITHUB_ID
  const secret = process.env.GITHUB_SECRET
  const params = `?client_id=${id}&client_secret=${secret}`

  return axios
    .get(`https://api.github.com/users/inthahouse${params}`)
    .then((user) => ({
      statusCode: 200,
      body: JSON.stringify(user.data),
    }))
}
