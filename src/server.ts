import fastify from "fastify"
import { env } from './env/index.ts'
import { transactionsRoutes } from './routes/transactions.ts'

const app = fastify({
  logger: true,
})

app.register(transactionsRoutes)

app.listen({ port: env.PORT })
  .then(() => {
    console.log("HTTP Server running on port 3333!")
  })
