/**
 * Title: <js-demo>
 * Author: <Baroni>
 * Date: <5/12/2022> 
 * Availability <https://github.com/e-vinci/js-demos/blob/main/backend-restful-api/restful-api-essentials/auths/routes/auths.js>
 */


const express = require('express');
const { register, login } = require('../models/users');

const router = express.Router();

/* Register a user */
router.post('/register', (req, res) => {
  const username = req?.body?.username?.length !== 0 ? req.body.username : undefined;
  // const loginMail = req?.body?.loginMail?.length !== 0 ? req.body.loginMail : undefined;
  const password = req?.body?.password?.length !== 0 ? req.body.password : undefined;

  if (!username || !password) return res.sendStatus(400); // 400 Bad Request

  const authenticatedUser = register(username, password);

  if (!authenticatedUser) return res.sendStatus(409); // 409 Conflict

  return res.json(authenticatedUser);
});

/* Login a user */
router.post('/login', (req, res) => {
  const username = req?.body?.username?.length !== 0 ? req.body.username : undefined;
  const password = req?.body?.password?.length !== 0 ? req.body.password : undefined;

  if (!username || !password) return res.sendStatus(400); // 400 Bad Reques

  const authenticatedUser = login(username, password);

  if (!authenticatedUser) return res.sendStatus(401); // 401 Unauthorized

  return res.json(authenticatedUser);
});

module.exports = router;
