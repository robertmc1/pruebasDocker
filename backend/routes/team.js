const router = require('express').Router();

const TeamModel = require('../models/team');

router.get('/', (req, res) => res.json({ code: 200, response: 'get teams' }));
router.post('/', (req, res) => res.json({ code: 200, response: 'post teams' }));
router.put('/', (req, res) => res.json({ code: 200, response: 'put teams' }));
router.delete('/', (req, res) => res.json({ code: 200, response: 'delete teams' }));

module.exports = router;