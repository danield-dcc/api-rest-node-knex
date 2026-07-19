import 'dotenv/config'
import setupKnex from 'knex'

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL env not found")
}

export const config: setupKnex.Knex.Config = {
  client: 'sqlite',
  connection: {
    filename: process.env.DATABASE_URL as string
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db/migrations'
  }
}

export const knex = setupKnex(config)