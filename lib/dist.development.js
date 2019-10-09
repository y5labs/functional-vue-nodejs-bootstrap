const inject = require('injectinto')
const isDevelopment = process.env.NODE_ENV === 'development'

inject('pod', ({ app }) => {
  if (!isDevelopment) return
  const path = require('path')
  const isObject = require('is-object')
  const normalizeAssets = (assets) => {
    if (isObject(assets)) return Object.values(assets)
    return Array.isArray(assets) ? assets : [assets]
  }
  app.get('*', (req, res) => {
    const assets = normalizeAssets(res.locals.webpackStats.toJson().assetsByChunkName.main)
    const outputPath = res.locals.webpackStats.toJson().outputPath
    const styles = assets
      .filter((p) => p.endsWith('.css'))
      .map((p) => res.locals.fs.readFileSync(path.join(outputPath, '/', p)))
      .join('\n')
    const scripts = assets
      .filter((p) => p.endsWith('.js'))
      .map((p) => `<script src="${path.join('./dist', p)}"></script>`)
      .join('\n')

    res.send(res.locals.fs.readFileSync(path.join(outputPath, '/index.html'), 'utf8'))
  })
})