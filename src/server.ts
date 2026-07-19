import crypto from 'node:crypto'
import fastify from "fastify"
import { knex } from "./database.js"

const app = fastify({
  logger: true,
})


app.get("/hello", async (_request, reply) => {
  // const test = await knex('sqlite_schema').select("*")
  const transaction = await knex('transactions').insert({
    id: crypto.randomUUID(),
    title: "Transação de teste",
    amount: 1000
  }).returning("*")

  reply.send(transaction)
})

app.listen({ port: 3333 }).then(() => {
  console.log("HTTP Server running on port 3333!")
})
