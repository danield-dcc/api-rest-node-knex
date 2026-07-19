import crypto from "node:crypto"
import type { FastifyInstance } from "fastify"
import { z } from "zod"
import { knex } from "../database.ts"

export async function transactionsRoutes(app: FastifyInstance) {
  app.post("/", async (request, reply) => {
    const createTransactionBodySchema = z.object({
      title: z.string().min(3, { error: "Deve ser maior que 3 caracteres" }),
      amount: z.number(),
      type: z.enum(["credit", "debit"]),
    })

    const { amount, title, type } = createTransactionBodySchema.parse(
      request.body,
    )

    await knex("transactions").insert({
      id: crypto.randomUUID(),
      title,
      amount: type === 'credit' ? amount : amount * -1
    })

    return reply.status(201).send()
  })
}
