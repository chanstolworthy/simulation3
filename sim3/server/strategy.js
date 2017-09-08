const Auth0Strategy = require('passport-auth0');
const express = require('express');
require('dotenv').config();

app = express();

module.exports = new Auth0Strategy( {
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    callbackURL: process.env.AUTH_CALLBACK
},
    function( accessToken, refreshToken, extraParams, profile, done ) {
        // const db = app.get('db')
        // // If user exists, get their data. If not, create a new user
        // db.find_user( profile.id ).then( user => {
        //     if( user[0] )
        //         return done( null, user )
        //     else {
        //         db.create_user( [profile.firstName, profile.lastName, profile.picture, profile.id] )
        //           .then( user => {
        //             return done( null, user[0] )
        //         })
        //     };
        // } );
        return done( null, profile )
    }
);