const path = require('path');

module.exports = function overrides(config, env) {
    config.resolve.alias['@'] = path.join(__dirname, 'src')
    config.module.rules.push({
        test: /\.less$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                modifyVars: {
                'primary-color': '#000',
                'border-radius-base': '10px',
                'input-bg': '#F9F9F9',
                'input-placeholder-color': '#a2a5b9',
                'input-height-lg': '1rem'
                },
                javascriptEnabled: true,
              }
            }
          }]
    })
    return config
}