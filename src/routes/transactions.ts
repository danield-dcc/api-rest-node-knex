import crypto from "node:crypto"
import type { FastifyInstance } from "fastify"
import { z } from "zod"
import { knex } from "../database.ts"

export async function transactionsRoutes(app: FastifyInstance) {
  app.get('/', async (_request, reply) => {
    const transactions = await knex('transactions').select('*')

    return reply.status(200).send({ transactions })
  })

  app.get("/:id", async (request, reply) => {
    const getTransactionParamsSchema = z.object({
      id: z.uuid()
    })

    const { id } = getTransactionParamsSchema.parse(request.params)

    const transaction = await knex("transactions").where('id', id).first()

    return reply.status(200).send({ transaction })
  })


  app.get("/summary", async (_request, reply) => {
    const summary = await knex("transactions").sum('amount', { as: 'amount' }).first()

    return reply.status(200).send({ summary })
  })



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
