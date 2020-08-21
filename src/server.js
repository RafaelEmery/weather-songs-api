const express = require('express');
const routes = require('./routes');
const app = express();

app.use(express.json());
app.use('/', routes);

app.use((error, req, res, next) => {  
    res.status(error.status || 500);
    res.json({
        error: error.message
    });
});

app.get('/', (req, res, next) => {
    return res.send({
        message: 'Hello World'
    })
})


app.listen(3000, () => {
    console.log('Server running on port ', process.env.PORT || 3000);
});
