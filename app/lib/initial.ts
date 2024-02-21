const { v4: uuidv4 } = require('uuid');

const users = [
    {
        id: uuidv4(),
        name: 'root muri',
        email: 'root@gmail.com',
        role: 'admin',
        phone: '0702898390',
        password: 'Stoney@2021',
        image_url: '/users/root.png',
    },
    {
        id: uuidv4(),
        name: 'maina mwangi',
        email: 'mainamwangi@gmail.com',
        role: 'user',
        phone: '0728969024',
        password: 'Stoney@2021',
        image_url: '/users/mainamwangi.png',
    },
    {
        id: uuidv4(),
        name: 'carl moha',
        email: 'carlmoha@gmail.com',
        role: 'user',
        phone: '0747018390',
        password: 'Stoney@2021',
        image_url: '/users/carlmoha.png',
    },
    {
        id: uuidv4(),
        name: 'jane doe',
        email: 'janedoe@gmail.com',
        role: 'admin',
        phone: '0702933901',
        password: 'Stoney@2021',
        image_url: '/users/janedoe.png',
    },
];

module.exports = {
    users
};
