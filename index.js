var app = require('express')();
app.listen(process.env.PORT);

app.get("/*",function(req,res) {
res.sendFile('public'+req.url , { root : __dirname});
});
