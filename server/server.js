
import jsonServer from 'json-server'

const server = jsonServer.create()

const router = jsonServer.router('./_data/db.json')
const middlewares = jsonServer.defaults()
 
server.use(middlewares)
server.use('/', router)
server.listen(process.env.PORT || 4000, () => {
  console.log('JSON Server is running')
})