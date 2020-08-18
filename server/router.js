const Router = require('koa-router');
const imgDealer = require('./routes/imgDealer');

const router = new Router();
router.post('/api/upload', imgDealer);

module.exports = router;
