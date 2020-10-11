/**
 * External dependencies
 */
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const logger = require('koa-logger');
const cors = require('kcors');
require('dotenv').config();
/**
 * Internal dependencies
 */
const router = require('./routes');

const app = new Koa();

// logger
app.use(logger());

// cors
app.use(
  cors({
    exposeHeaders: ['Location', 'Content-Length'],
  })
);

// body parser
app.use(bodyParser());
// router
app.use(router.routes()).use(router.allowedMethods());

app.on('error', (err, ctx) => {
  console.error(err);
});
console.log('port:', process.env.PORT);
app.listen(process.env.PORT);

console.log('App Started');

module.exports = app;
