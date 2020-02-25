const jwt = require('jsonwebtoken');
require('dotenv').config();

const verify = async (ctx, next) => {
  try {
    const authHeader = ctx.request.header['authorization'];
    ctx.assert(
      authHeader
      && authHeader.split(' ')[0] === 'Bearer'
      && authHeader.split(' ')[1] !== 'undefined',
      401,
      'Authorization header missing or corrupted!'
    );
    jwt.verify(authHeader.split(' ')[1], process.env.TOKEN_SECRET);
    await next();
  } catch (error) {
    ctx.throw(401, 'Unauthorized!', error);
  }
};

module.exports = {
  verify,
};
