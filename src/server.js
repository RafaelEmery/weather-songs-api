const express = require('express');
const routes = require('./routes');
const app = express();

app.use(express.json());
app.use(routes);

app.listen(3000, () => {
    console.log('Server running on port ', process.env.PORT || 3000);
});
