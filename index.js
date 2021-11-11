import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import {schema} from './schema'
import {getFriend, createFriend, updateFriend, deleteFriend, getFriends} from './friends'

const app = express()

app.get('/', (req, res)=> {
    res.send(" Hello World ")
})


const root = {
    getFriend,
    getFriends,
    createFriend,
    updateFriend,
    deleteFriend
}


app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
}))

app.listen(8000, () => console.log("Server is running in 8000 port"))