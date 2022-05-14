const app = require('./app/app.js')
const config = require('./app/config.js')


app.listen(config.APP_PORT, () => {
    console.log('Server is running!')
})