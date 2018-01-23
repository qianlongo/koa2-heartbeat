const Koa = require('koa')
const heartBeat = require('./index')
const app = new Koa()
const PORT = 3000

app.use(heartBeat())
app.use(heartBeat(/^\/health\/check/, 'health check passed !!!'))

app.listen(PORT, () => {
  console.log(`app start at: ${PORT}`)
})
