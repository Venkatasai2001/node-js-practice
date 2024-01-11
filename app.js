const express = require('express')
const addDays = require('date-fns/addDays')
const app = express()

const givenDate = addDays(new Date(2024, 0, 11), 100)

app.get('/', (request, response) => {
  response.send(
    `${givenDate.getDate()}/${
      givenDate.getMonth() + 1
    }/${givenDate.getFullYear()}`,
  )
})

module.exports = app

app.listen(3000)