import cookie from '@fastify/cookie'
import fastify from 'fastify'
import { transactionsRoutes } from './routes/transactions.ts'

export const app = fastify({
  logger: true,
})

app.register(cookie)

app.register(transactionsRoutes, {
  prefix: 'transactions',
})
