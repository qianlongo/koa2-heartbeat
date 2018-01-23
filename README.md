## koa2-heartbeat

> koa2 心跳检查中间件

## 需求背景

> 对于node服务，我们希望有一个与业务无关的路由，可以检查该服务是否”正常运转“，比如访问`http://localhost:3000/heart/check`,返回`heart check passed !!!`

## 使用

**koa2-heartbeat中间件提供两个参数**

1. beatReg

表示要访问的该路由的匹配规则。默认是`/^\/heart\/check/`,也就是以为`/heart/check`开头

2. beatMsg

表示命中上述路由之后，返回的消息内容，默认是`heart check passed !!!`


``` javascript

const Koa = require('koa')
const heartbeat = require('koa2-heartbeat')
const app = new Koa()
const PORT = 3000

// 1. 默认用法
app.use(heartBeat())
// 2. 添加自己的规则
app.use(heartBeat(/^\/health\/check/, 'health check passed !!!'))

app.listen(PORT, () => {
  console.log(`app start at: ${PORT}`)
})


```
