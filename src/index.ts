import "reflect-metadata"
import { MikroORM } from "@mikro-orm/core"
import { ___prod___ } from './constants'
import mikroConfig from "./mikro-orm.config"
import express from "express"
import { ApolloServer } from "apollo-server-express"
import { buildSchema } from "type-graphql"
import { HelloResolver } from './resolvers/hello'
import { PostResolver } from './resolvers/post'

const PORT = 3000

const main = async () => {
  const orm = await MikroORM.init(mikroConfig)
  await orm.getMigrator().up()

  // const post = orm.em.create(Post, { title: 'my first post' })
  // await orm.em.create(Post, { title: 'My first post' })
  // await orm.em.persistAndFlush(post)

  const app = express()

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver, PostResolver],
      validate: false
    }),
    context: () => ({ em: orm.em })
  })

  apolloServer.applyMiddleware({ app })

  app.get('/', (_request: express.Request, response: express.Response) => {
    response.status(200).send('Hello')
  })

  app.listen(PORT, () => {
    console.log('Listening to port', PORT)
  })
}

main()