const { v4: uuidv4 } = require('uuid');

const users = [
    {
        id: 'c50a2cd7-1cf9-47a2-8688-80c5081c8850',
        name: 'root muri',
        email: 'root@gmail.com',
        role: 'admin',
        phone: '0702898390',
        password: 'Stoney@2021',
        image_url: '/users/root.png',
    },
    {
        id: 'f00782c7-7584-4df1-8024-20f013078c4e',
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
        id: users[0].id,
        name: 'Lamborgini Urus',
        description: '2500 cc',
        image_url: '/vehicles/urus.jpg',
    },
    {
        id: users[1].id,
        name: 'Subaru Outback',
        description: '6500 cc',
        image_url: '/vehicles/subaru.jpg',
    },
]

module.exports = {
    users,
    vehicles
};
