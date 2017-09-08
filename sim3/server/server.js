require('dotenv').config();

const express = require('express')
    , bodyParser = require('body-parser')
    , massive = require('massive')
    , cors = require('cors')
    , session = require('express-session')
    , passport = require('passport')
    , chalk = require('chalk');

const strategy = require('./strategy');
const auth_controller = require('./controllers/auth_controller');
const Auth0Strategy = require('passport-auth0');


var app = express();
app.use(bodyParser.json() );
app.use(cors() );

app.use( session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}))
app.use( passport.initialize() );
app.use( passport.session() );

massive( process.env.CONNECTIONSTRING ).then(db => {
        app.set('bd', db);
        app.get('db').init.seed().then(res => console.log(res) )
    })
//     .catch(err => {
//         console.log(err)
// });
passport.use( strategy );



//////////////////////////////////////////////////////////////// AUTHENTICATION

// This is invoked once to set things up
passport.serializeUser( function( user, done ) {
    done( null, user )
} );
// User comes from session - this is invoked for every endpoint
passport.deserializeUser( function( user, done ) {
    app.get('db').find_session_user( user[0].id ).then( user => {
        return done( null, user[0] )
    })
} );

// Auth Controllers
app.get( '/auth', passport.authenticate('auth0') );
app.get( '/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'ttp://localhost:3000/#/dashboard',
    failureRedirect: 'http://localhost:3000/#/'
}) );
app.get( '/auth/me', auth_controller.get ); // Gets user if found
app.get( '/auth/logout', auth_controller.logout )


//CONTROLLERS BELOW



const port = 3001;
const portChalk = chalk.cyan.underline.bold
app.listen(port, () => {
    console.log( portChalk(`Listening on port ${port}`) );
})