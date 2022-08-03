const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

var currentUser;

var corsOptions = {
  orgim: '/',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.listen(3100, () => {
  console.log('Server Started!');
});

app.route('/api/users').get((request, response) => {
  response.send(USERS);
});

app.route('/api/users').post((request, response) => {
  let user = request.body;

  const firstId = USERS ? Math.max.apply(null, USERS.map(userIterator => userIterator.id)) + 1 : 1;
  user.id = firstId;
  USERS.push(user);
  

  response.status(201).send(user);
});

app.route('/api/users/:id').put((request, response) => {
  const userId = +request.params['id'];
  const user = request.body;

  const index = USERS.findIndex(userIterator => userIterator.id === userId);
  USERS[index] = user;

  response.status(200).send(user);
});

app.route('/api/users/:id').get((request, response) => {
  const userId = +request.params['id'];

  response.status(200).send(USERS.find(userIterator => userIterator.id === userId));
});

app.route('/api/users/:id').delete((request, response)=> {
  const userId = +request.params['id'];
  USERS = USERS.filter(userIterator => userIterator.id !== userId);
  
  response.status(204).send({});
});

var USERS = [
    {
        id: 1,
        name: 'Patricia Boyle',
        email: 'patriciab@zilium.com',
        box: 'patriciaboyle.cf2nqx@inbox.zohoexpensive.com',
        creationDate: new Date("11.06.2004 22:19"),
        imageUrl: '/assets/images/pat.png',
    },
    {
        id: 2,
        name: 'Nathan Brooks',
        email: 'nbrooks@zilium.com',
        box: '',
        creationDate: new Date("02.24.2016 01:58"),
        imageUrl: '/assets/images/nat.png',
    },
    {
        id: 3,
        name: 'Manish',
        email: 'manishp@zilium.com',
        box: 'manish.fkgc3w@inbox.zohoexpensive.com',
        creationDate: new Date("04.15.2015 05:46"),
        imageUrl: '/assets/images/man.png',
    },
    {
        id: 4,
        name: 'Jasmine Frank',
        email: 'jasminefrank@zilium.com',
        creationDate: new Date("07.02.2015 20:56"),
        imageUrl: '/assets/images/default.png',
    },
    {
        id: 5,
        name: 'CHARLES STONE',
        email: 'charless@zilium.com',
        box: 'charlesstone.0142m@inbox.zohoexpensive.com',
        creationDate: new Date("04.15.2015 05:35"),
        imageUrl: '/assets/images/cha.png',
    },
    {
        id: 6,
        name: 'AAron Brown',
        email: 'aaron.brown@zylkar.com',
        creationDate: new Date("07.22.2015 03:04"),
        imageUrl: '/assets/images/default.png',
    }
];