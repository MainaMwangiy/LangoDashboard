const { v4: uuidv4 } = require('uuid');

const users = [
    {
        id: 'a9f6ebaf-7b2a-4e39-b780-dd06a5458403',
        name: 'root muri',
        email: 'root@gmail.com',
        role: 'admin',
        phone: '0702898390',
        password: 'Stoney@2021',
        image_url: '/users/root.png',
    },
    {
        id: '4712fe42-03fa-48d9-b43b-83e5f0fe2e43',
        name: 'maina mwangi',
        email: 'mainamwangi@gmail.com',
        role: 'user',
        phone: '0728969024',
        password: 'Stoney@2021',
        image_url: '/users/mainamwangi.png',
    },
    {
        id: '541d41db-b7d0-44c5-9109-93232fc113f9',
        name: 'carl moha',
        email: 'carlmoha@gmail.com',
        role: 'user',
        phone: '0747018390',
        password: 'Stoney@2021',
        image_url: '/users/carlmoha.png',
    },
    {
        id: '15dd1f0c-f0ee-4a90-8cc2-0f52dd356a97',
        name: 'jane doe',
        email: 'janedoe@gmail.com',
        role: 'admin',
        phone: '0702933901',
        password: 'Stoney@2021',
        image_url: '/users/janedoe.png',
    },
];

const vehicles = [
    {
        id: uuidv4(),
        user_id: users[0].id,
        name: 'Lamborgini Urus',
        description: '2500 cc',
        image_url: '/vehicles/urus.jpg',
    },
    {
        id: uuidv4(),
        user_id: users[1].id,
        name: 'Subaru Outback',
        description: '6500 cc',
        image_url: '/vehicles/subaru.jpg',
    },
]

module.exports = {
    users,
    vehicles
};
