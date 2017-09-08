const express = require('express'),
      bodyParser = require('body-parser'),
      massive = require('massive'),
      cors = require('cors'),
      chalk = require('chalk'),
      session = require('express-session'),
      passport = require('passport');


const app = express();
      
app.use(session({
    secret: process.env.SECRET, //**Required** This is the secret used to sign the session ID cookie. The secret is used to encrypt the session ID, session data is stored server side always, the ID is how its matched up. 
    resave: false, //When true it forces the session to be saved back to the session store, even if the session was never modified during the request.
    saveUninitialized: true //When true it forces a session that is "uninitialized" to be saved to the store. A session is uninitialized when it is new but not modified.
    }));
//Be sure to use express.session() before passport.session() to ensure that the login session is restored in the correct order.
app.use(passport.initialize()); //This middleware is required to initialize Passport. 
app.use(passport.session()); //If your application uses persistent login sessions, passport.session() middleware must also be used.
      

app.use(bodyParser.json() );
app.use(cors() );




massive('localhost:3001/api/item'/*connectionString or URL*/).then(db => {
    app.set('bd', db)
    /*ADD SEE FILE IF NEEDED 
    app.get('db').init.seed().then(res => {
        console.log(res)*/
}).catch(err => {
    console.log(err)
});

//CONTROLLERS BELOW



const portChalk = chalk.cyan.underline.bold;
const port = 3001;
app.listen(port, () => {
    console.log(portChalk(`Listening on port ${port}`));
})