const express = require('express'),
      bodyParser = require('body-parser'),
      massive = require('massive'),
      cors = require('cors');

var app = express();
app.use(bodyParser.json() );
app.use(cors() );

const port = 3001;


massive('localhost:3001/api/item'/*connectionString or URL*/).then(db => {
    app.set('bd', db)
    /*ADD SEE FILE IF NEEDED 
    app.get('db').init.seed().then(res => {
        console.log(res)*/
}).catch(err => {
    console.log(err)
});

//CONTROLLERS BELOW




app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})