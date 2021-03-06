const SongsController = require('./controllers/SongsController')
const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

module.exports = (app) => {

    app.get('/', (req, res) => {
        res.send('hello')
    })

    app.post('/register',
        AuthenticationControllerPolicy.register,
        AuthenticationController.register
    )

    app.post('/login',
        AuthenticationControllerPolicy.register,
        AuthenticationController.login
    )

    app.get('/songs', 
        SongsController.index
    )

    app.post('/songs',
        SongsController.post
    )
}