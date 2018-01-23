const heartBeatReg = /^\/heart\/check/
const heartBeatMsg = 'heart check passed !!!'

module.exports = (beatReg = heartBeatReg, beatMsg = heartBeatMsg) => {
  return async (ctx, next) => {
    return beatReg.test(ctx.path) ? (ctx.body = beatMsg) : next()
  }
}
