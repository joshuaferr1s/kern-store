const Koa = require('koa');
const Router = require('koa-router');
const helmet = require('koa-helmet');
const koaBody = require('koa-body');
const logger = require('koa-logger');
require('dotenv').config();

const auth = require('./routes/auth');
const fileRoute = require('./routes/file');

const app = new Koa();
const router = new Router();
const port = process.env.PORT || 3000;

app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.set('Access-Control-Allow-Headers', 'Authorization, Content-Type');
  await next();
});
app.use(helmet());
app.use(koaBody());
app.use(logger());

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    const status = error.status || 500;
    ctx.status = status;
    ctx.type = 'application/json';
    ctx.body = {
      status,
      msg: error.message || `${status} - Error`,
      '🥞': process.env.NODE_ENV !== 'production' ? error.stack : '',
    };
  }
});

router.get('/', (ctx, next) => {
  ctx.body = {
    'msg': 'Hello World!',
  };
});

router.use('/auth', auth.routes(), auth.allowedMethods());
router.use('/file', fileRoute.routes(), fileRoute.allowedMethods());

app.use(router.routes()).use(router.allowedMethods());

app.use(async (ctx) => {
  ctx.status = 404;
  ctx.body = {
    status: 404,
    msg: '404 - Route not found.',
  };
});

app.listen(port, () => console.log('Server Running...'));
