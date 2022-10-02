const express = require('express')
const faker = require('faker')
const app = express()
const port = 3000

const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
}

const mysql = require('mysql')

async function createConnection() {
  return await mysql.createConnection(config)
}

async function createTable() {
  const connection = await createConnection()

  await connection.query(`
      CREATE TABLE IF NOT EXISTS people (
          id INT AUTO_INCREMENT PRIMARY KEY,
          name VARCHAR(255) NOT NULL  
      )
  `)

  connection.end()
}

async function postPeople() {
  const connection = await createConnection()

  const name = faker.name.findName()

  const sql = `INSERT INTO people(name) values('${name}')`

  await connection.query(sql)
}

function createContent(peoples) {
  let title = '<h1>Full Cycle Rocks!</h1>'
  let subtitle = '<h3>Pessoas cadastradas:</h3>'
  let body = !!peoples.length ? 
                  `<ul>
                    ${
                      peoples.map(
                        item => `<li>${item.id} - ${item.name}</li>`
                      )
                    }
                  </ul>` : 
                  '<p>Nenhuma pessoa cadastrada!</p>'

  return title + subtitle + body
}

app.get('/', async (req, res) => {
  await createTable()
  await postPeople()
  
  const connection = await createConnection()

  connection.query(
    "SELECT * FROM people",
    function (err, peoples) {
      let content  = createContent(peoples)
      return res.send(content)
    }
  )
})

app.listen(port, () => {
  console.log('Rodando na porta: ', port)
})