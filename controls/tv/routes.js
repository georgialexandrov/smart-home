const router = require('express').Router();
const tvControl = require('./control');

router.get('/', (req, res, next) => {
    res.send(tvControl(req.query.command));
});

module.exports = router;