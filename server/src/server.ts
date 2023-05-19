import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import 'dotenv/config'
import fastify from 'fastify'
import { authRoutes } from './routes/auth'
import { memoriesRoutes } from './routes/memories'

const app = fastify()

app.register(cors, {
  origin: true,
})
app.register(jwt, {
  secret: 'YEps9u9ohngvae14652p9ougth-ogkwIYGHAgopikhjwrpiufgh',
})

app.register(memoriesRoutes)
app.register(authRoutes)

app
  .listen({
    port: 3003,
  })
  .then(() => {
    console.log('🚀HTTP server running on http://localhost:3003')
  })
