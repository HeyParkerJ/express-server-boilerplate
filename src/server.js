import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import path from 'path'
import fs from 'fs'

import Papa from 'papaparse'

const app = express()
app.use(bodyParser.json({ limit: '50mb' }))
app.use(
  bodyParser.urlencoded({
    limit: '50mb',
    extended: true,
    paremeterLimit: 50000
  })
)

app.use(cors())

app.get('/healthcheck', (req, res) => {
  res.send(200, 'Healthy')
})

app.get('/csv', (req, res) => {
  const filePath = path.resolve(process.cwd(), 'data/strong.csv')

  fs.stat(filePath, error => {
    if (error) {
      console.error(
        'we got an error with the file path:',
        filePath,
        'Error:',
        error
      )
      res.status(404).send(error)
    } else {
      fs.readFile(filePath, 'utf8', (error, file) => {
        if (error) {
          console.error('Error reading file ' + filePath, error)
          res.status(500).send(error)
        } else {
          Papa.parse(file, {
            complete: function(results) {
              console.log('finished', results.data)
              res.status(200).send(results)
            }
          })
        }
      })
    }
  })
})

const port = 1337

app.listen(port, () => {
  console.log('App listening on port ' + port + '.')
})
