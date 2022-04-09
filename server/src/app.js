import express from 'express'
import { MongoClient } from 'mongodb'

const PORT = 8080
const HOST = '0.0.0.0'

const app = express()

app.get('/', async (req, res) => {
  const result = await collection.find({}).toArray()
  res.json(result)
})

app.listen(8080, HOST, () => {
  console.log(`Listening on port ${PORT}`)
})

const URL = 'mongodb://echizen:password@mongo/nginx-node-mongo-docker-example?authSource=admin'
const client = new MongoClient(URL)

try {
  await client.connect()
  console.log('Succesfully connected to mongo')
} catch (e) {
  console.error(e)
}
const db = client.db()

const doc1 = { name: 'Echizen', age: 24 }
const doc2 = { name: 'Bob', age: 32 }

const collection = db.collection('test-collection')
await collection.insertMany([doc1, doc2])
