const app = require('express')();

// TODO: authentication

app.use('/tv', require('./tvControl/routes'));

app.listen(process.env.PORT || 3000, () => console.log('Smart home app listening on port 3000!'))