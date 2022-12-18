const jwt = require('jsonwebtoken');
const jwtDecode = require('jwt-decode');
const path = require('node:path');

const { parse, serialize } = require('../utils/json');
const { creatPlayer } = require('./game')

let authenticatedUser;

const jwtSecret = 'ilovemygame!';
const lifetimeJwt = 24 * 60 * 60 * 1000; // in ms : 24 * 60 * 60 * 1000 = 24h

const jsonDbPath = path.join(__dirname, '/../data/users.json');

const defaultUsers = [
  {
    id: 1,
    username: 'admin',
    password: 'admin',
  },
];

function login(username, password) {
  const userFound = readOneUserFromUsername(username);
  if (!userFound) return undefined;
  if (userFound.password !== password) return undefined;

  const token = jwt.sign(
    { username, id: userFound.id }, // session data added to the payload (payload : part 2 of a JWT)
    jwtSecret, // secret used for the signature (signature part 3 of a JWT)
    { expiresIn: lifetimeJwt }, // lifetime of the JWT (added to the JWT payload)
  );

    authenticatedUser = {
    username,
    token,
  };

  return authenticatedUser;
}

function register(username, password) {
  const userFound = readOneUserFromUsername(username);
  if (userFound) return undefined;

   const newUser = createOneUser(username, password);

  const token = jwt.sign(
    { username, id: newUser.id }, // session data added to the payload (payload : part 2 of a JWT)
    jwtSecret, // secret used for the signature (signature part 3 of a JWT)
    { expiresIn: lifetimeJwt }, // lifetime of the JWT (added to the JWT payload)
  );

  authenticatedUser = {
    username,
    token,
  };

  return authenticatedUser;
}

function readOneUserFromUsername(username) {
  const users = parse(jsonDbPath, defaultUsers);
  const indexOfUserFound = users.findIndex((user) => user.username === username);
  if (indexOfUserFound < 0) return undefined;

  return users[indexOfUserFound];
}

function createOneUser(username, password) {
  const users = parse(jsonDbPath, defaultUsers);
  const id = getNextId();

  const createdUser = {
    id,
    username,
    password,
    
  };

  creatPlayer(id);

  users.push(createdUser);

  serialize(jsonDbPath, users);

  return createdUser;
}

function getNextId() {
  const users = parse(jsonDbPath, defaultUsers);
  const lastItemIndex = users?.length !== 0 ? users.length - 1 : undefined;
  if (lastItemIndex === undefined) return 1;
  const lastId = users[lastItemIndex]?.id;
  const nextId = lastId + 1;
  return nextId;
}

function getId(){
  if(authenticatedUser === undefined){
    console.log("empty");
  }
  const decodedToken = jwtDecode(authenticatedUser.token, jwtSecret);
  const {id} = decodedToken;

  console.log("found id = ", id);

  return id;
  
}

module.exports = {
  login,
  register,
  readOneUserFromUsername,
  getId,
};
