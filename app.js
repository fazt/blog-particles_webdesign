var express = require('express');
var path = require('path');

var app=express();
app.set('port',process.env.PORT||3000);

app.use(express.static(path.resolve(__dirname,'public')));

app.get('/',function(req,res) {
  res.sendFile(__dirname+'/public/index.html');
});
app.listen(app.get('port'),function() {
  console.log('server on port ', app.get('port'));
});
