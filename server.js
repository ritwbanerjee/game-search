/**
 * Purpose: In future if we have to deploy the app on heroku or any other PAAS,
 * We have an express server running to redirect to angular for any requests
 */

const express = require('express'),
app     = express(),
path    = require('path');


app.use(express.static(__dirname + '/dist'));
app.get('*', (req, res) => {
res.sendFile(path.join(__dirname + '/dist/index.html'));
})
app.listen(process.env.PORT || 3000);