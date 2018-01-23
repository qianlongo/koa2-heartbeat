const heartBeatReg = /^\/heart_check/
const heartBeatMsg = 'heart_check pass !!!'

module.exports = (beatReg = heartBeatReg, beatMsg = heartBeatMsg) => {
  return async (ctx, next) => {
    return beatReg.test(ctx.path) ? (ctx.body = beatMsg) : next()
  }
}
