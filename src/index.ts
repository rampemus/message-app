import { MikroORM } from "@mikro-orm/core"
import { ___prod___ } from './constants'
import { Post } from './entities/Post'
import mikroConfig from "./mikro-orm.config"
// import path from 'path'

const main = async () => {
    const orm = await MikroORM.init(mikroConfig)
    await orm.getMigrator().up()
    // const post = orm.em.create(Post, { title: 'my first post' })
    // await orm.em.create(Post, { title: 'My first post' })
    // await orm.em.persistAndFlush(post)
    const posts = await orm.em.find(Post, {})
    console.log('posts:', posts)
}

console.log('Hello world!')

main()