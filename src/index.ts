import { MikroORM } from "@mikro-orm/core"
import { ___prod___ } from './constants'
import { Post } from './entities/Post'
import mikroConfig from "./mikro-orm.config";
// import path from 'path'

const main = async () => {
    const orm = await MikroORM.init(mikroConfig)

    const post = orm.em.create(Post, { title: 'my first post' })
    // console.log('--------------sql---------------')
    // await orm.em.persistAndFlush(post)
}

console.log('Hello world! Hello')

main()