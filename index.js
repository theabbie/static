var app = require('express')();
app.use('/static', express.static('public'))
app.listen(process.env.PORT);
