module.exports = {
  plugins: [
    'lodash',
    [
      '@babel/plugin-transform-runtime',
      {
        regenerator: true
      }
    ]
  ],
  presets: [
    [
      '@babel/env',
      {
        useBuiltIns: false
      }
    ]
  ]
}
