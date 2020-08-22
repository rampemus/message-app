import { Post } from './entities/Post'
import { ___prod___ } from './constants'
import { MikroORM } from "@mikro-orm/core"
import path from 'path'

export default {
  migrations: {
    path: path.join(__dirname, './migrations'),
    pattern: /^[\w-]+\d+\.[tj]s$/
  },
  entities: [Post],
  dbName: 'message',
  type: "postgresql",
  debug: !___prod___
} as Parameters<typeof MikroORM.init>[0]
