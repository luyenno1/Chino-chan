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
