const NodeCache = require('node-cache')

const config = {
    prefix: '/',
    openaikey: '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',
    cache: new NodeCache({
        checkperiod: 10000,
        deleteOnExpire: true
    }),
    ratelimit: new Map(),
    commands: new Map(),
    aliases: new Map()
}

module.exports = config
