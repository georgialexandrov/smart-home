const router = require('express').Router();
const thermostatControl = require('./thermostat');

router.get('/', (req, res, next) => {
    res.send(thermostatControl(req.query.action));
});

module.exports = router;