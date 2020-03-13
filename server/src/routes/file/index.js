const Router = require('koa-router');
const multer = require('@koa/multer');
const csv = require('csvtojson');
const db = require('../../db');

const campers = db.get('campers');
const fileRoute = new Router();
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    cb(null, 'data.csv');
  },
});
const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    cb(null, file.mimetype === 'text/csv');
  },
}).single('file');

const parseCsvData = async (path) => {
  const rawJson = await csv().fromFile(path);
  return Promise.all(rawJson.map(cmpr => {
    return {
      name: cmpr['Full Name'],
      bunk: Number(cmpr[Object.keys(cmpr).find(el => el.includes('Bunk'))]),
      program: cmpr[Object.keys(cmpr).find(el => el.includes('Program'))],
      balance: 0,
      transactionHistory: [],
    };
  }));
};

fileRoute.post('/', upload, async (ctx) => {
  const file = ctx.request.file;
  ctx.assert(
    file && file.mimetype === 'text/csv',
    400,
    'Request body unacceptable!'
  );
  const data = await parseCsvData(file.path);
  await campers.remove({});
  await campers.insert(data);
  ctx.body = {
    status: 200,
  };
});

module.exports = fileRoute;
