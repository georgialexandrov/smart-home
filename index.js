const app = require('express')()
const apollo = require('apollo-server-express')

const resolvers = require('./schema/resolvers')
const schema = require('./schema/schema')
// TODO: authentication. no worryes it's in local network

app.use('/tv', require('./controls/tv/routes'))
app.use('/thermostat', require('./controls/thermostat/routes'))

const apolloServer = new apollo.ApolloServer({
  typeDefs: schema,
  resolvers,
});
apolloServer.applyMiddleware({ app, path: '/graphql' })

app.listen(process.env.PORT || 3000, () => console.log(`Smart home app listening on port ${process.env.PORT || 3000}!`))
