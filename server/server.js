const express = require('express');
const app  = express();

const PORT = 3001;


require('./routes')(app);

app.listen(PORT,()=>{
    console.log('work on ' + PORT);
})
