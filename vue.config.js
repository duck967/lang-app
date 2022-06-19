const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    // port: 8080,
    // open: true,
    // client: {
    //   webSocketURL: 'ws://0.0.0.0:8080/ws',
    // },
    allowedHosts: ['ec2-18-118-106-114.us-east-2.compute.amazonaws.com'],
    //host: 'ec2-3-136-108-20.us-east-2.compute.amazonaws.com'
  }  
})
