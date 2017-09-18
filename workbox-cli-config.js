module.exports = {
  globDirectory: './',
  globPatterns: ['**/*.{html,png}', '/node_modules/leaflet/**/*.{css,js}'],
  swDest: 'sw.js',
  globIgnores: ['workbox-cli-config.js']
}
