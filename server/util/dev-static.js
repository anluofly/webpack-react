const axios = require('axios') // yarn add axios -S
const webpack = require('webpack')
// yarn add memory-fs -D 只写入内存 不写入硬盘
const MemoryFs = require('memory-fs')

const serverConfig = require('../../build/webpack.config.server')

const getTemplate = () => {
    return new Promise((resolve, reject) => {
        axios.get('http://localhost:8888/public/index.html')
        .then(res => {
            resolve(res.data)
        })
        .catch(reject)
    })
}

const Module = module.constructor

const mfs = new MemoryFs
const serverCompiler = webpack(serverConfig)
serverCompiler.outputFileSystem= mfs

let serverBundle
serverCompiler.watch({}, (err, stats) => {
    if (err) throw err
    stats = stats.toJson()
    stats.errors.forEash(err => console.error(err)) 
    stats.warnings.forEash(warn => console.warn(warn))

    const bundlePath = path.join(
        serverConfig.output.path,
        serverConfig.output.filename,
    )
    
    const bundle = mfs.readFileSync(bundlePath)
    const m = new Module()
    m._compile(bundle, 'server-entry.js')
    serverBundle = m.exports.default

})

module.exports = function(app) {
    app.use('/public', proxy({
        target: 'http://localhost:8888'
    }))
    app.get('*', function(req, res) {

    })
}