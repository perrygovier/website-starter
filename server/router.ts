import * as express from 'express';

export default function router(app) {

  return new express.Router()
  
  .get('/', (req, res) => res.render('index'))
  .get('/test', (_, res) => res.send('yo'))

}