const app = require("express")();
const cors = require("cors");
const bodyParser = require("body-parser");

const PORT = 8000;

app.use( cors() );
app.use( bodyParser.json() ); // to support JSON-encoded bodies
app.use( bodyParser.urlencoded({  extended: true }) );  // to support URL-encoded bodies

const server = require('http').createServer(app);

const writeCsvData = require('./csvUpdater');

app.post('/update-deck', function(req, res){
    const {id, word, deck} = req.body;
    writeCsvData({id, word, deck})
    .then(() => {
        res.status(200).send({success: true});
    })
    .catch((err) => {
        res.status(500).send({success: false, error: err});
    })
})

console.log("Server ::", PORT)

server.listen(PORT);