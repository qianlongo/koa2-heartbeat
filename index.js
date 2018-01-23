const healthBeatReg = /^\/heath_check/
const healthBeatMsg = 'heath_check'

module.exports = (beatReg = healthBeatReg, beatMsg = healthBeatMsg) => {
  return async (ctx, next) => {
    return beatReg.test(ctx.path) ? (ctx.body = beatMsg) : next()
  }
}
