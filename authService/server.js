import Fastify from 'fastify'
import { config } from 'dotenv'
config()

const port = process.env.PORT || 4561

const fastify = new Fastify({
    logger: true,
})

fastify.get('/',(req, res)=>{
    res.status(200).send({
        success: true,
        message: 'application running'
    })
})


fastify.listen({port:port},()=>{
    console.log(`listening on port ${port}`)
})