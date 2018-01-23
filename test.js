const Koa = require('koa')
const heatBeat = require('./index')
const app = new Koa()
const PORT = 3000

app.use(heatBeat())

app.listen(PORT, () => {
  console.log(`app start at: ${PORT}`)
})
