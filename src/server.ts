import fastify from "fastify"
import { knex } from "./database.js"

const app = fastify({
  logger: true,
})


app.get("/hello", async (_request, reply) => {
  const test = await knex('sqlite_schema').select("*")

  reply.send(test)
})

app.listen({ port: 3333 }).then(() => {
  console.log("HTTP Server running on port 3333!")
})
