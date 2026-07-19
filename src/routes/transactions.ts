
import type { FastifyInstance } from "fastify"
import { knex } from "../database.ts"

export async function transactionsRoutes(app: FastifyInstance) {
  app.get("/hello", async (_request, reply) => {
    const transactions = await knex('transactions')
      .where("amount", 1000)
      .select('*')

    reply.send(transactions)
  })
}