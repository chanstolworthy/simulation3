require('dotenv').config();

const express = require('express')
    , bodyParser = require('body-parser')
    , massive = require('massive')
    , cors = require('cors')
    , session = require('express-session')
    , passport = require('passport')
    , chalk = require('chalk');

const friends_controller = require('./controllers/friends_controller');
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

massive( process.env.CONNECTIONSTRING ).then( db => {
        app.set('bd', db);
        app.get('db').init.seed().then( res => console.log(res) )
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

// Auth Controller
app.get( '/auth', passport.authenticate('auth0') );
app.get( '/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/#/dashboard',
    failureRedirect: 'http://localhost:3000/#/'
}) );
app.get( '/auth/me', auth_controller.get ); // Gets user if found
app.get( '/auth/logout', auth_controller.logout )


// Friends Controller
app.get('/api/friend/list', friends_controller.friends);
app.post('/api/friend/add', friends_controller.addFriends);
app.post('/api/friend/remove', friends_controller.deleteFriends);




const port = 3001;
const portChalk = chalk.cyan.underline.bold
app.listen(port, () => {
    console.log( portChalk(`Listening on port this ${port}`) );
})
