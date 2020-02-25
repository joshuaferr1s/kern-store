const Router = require('koa-router');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const auth = new Router();

auth.post('/', async (ctx) => {
  const { password } = ctx.request.body;
  ctx.assert(
    password || Object.keys(ctx.request.body).length === 1,
    400,
    'Request body unacceptable!'
  );
  ctx.assert(
    password === process.env.PASSWORD,
    401,
    'Incorrect password!'
  );
  const token = jwt.sign({}, process.env.TOKEN_SECRET, { expiresIn: '12h' });
  ctx.body = {
    status: 200,
    token,
  };
});

module.exports = auth;
