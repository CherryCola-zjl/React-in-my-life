const path = require('path');

module.exports = function overrides(config, env) {
    // path alias  
    config.resolve.alias['@'] = path.join(__dirname, 'src')
    // add loader
    let rules = config.module.rules
  	rules[rules.length-1].oneOf?.splice(-1,0,{
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