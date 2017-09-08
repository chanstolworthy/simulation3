require('dotenv').config();

const express = require('express')
    , bodyParser = require('body-parser')
    , massive = require('massive')
    , cors = require('cors')
    , session = require('express-session')
    , passport = require('passport')
    , chalk = require('chalk');

const strategy = './strategy';

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
passport.use( strategy );

massive('localhost:3001/api/item'/*connectionString or URL*/).then(db => {
    app.set('bd', db)
    /*ADD SEE FILE IF NEEDED 
    app.get('db').init.seed().then(res => {
        console.log(res)*/
}).catch(err => {
    console.log(err)
});

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

//CONTROLLERS BELOW



const port = 3001;
const portChalk = chalk.cyan.underline.bold
app.listen(port, () => {
    console.log( portChalk(`Listening on port ${port}`) );
})