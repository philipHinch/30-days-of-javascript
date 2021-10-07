//EXERCISE LEVEL 3 - OBJECTS

const chars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];


const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '08/01/2020 10:00 AM',
        isLoggedIn: false
    }
];

const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 }
        ],
        likes: []
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy']
    }
]

////////////////////////////////////////////////////////////////////////////////////

function randomIdGenerator(num) {
    let id = '';
    for (let i = 0; i < num; i++) {
        id += chars[Math.floor(Math.random() * chars.length)]
    }
    return id
}

function getDate() {
    let now = new Date();
    let dd = String(now.getDate()).padStart(2, '0');
    let mm = String(now.getMonth() + 1).padStart(2, '0');
    let yyyy = now.getFullYear();
    let hour = now.getHours();
    let min = now.getMinutes();
    let ampm;
    if (min.length < 2) {
        min = 0 + min
    }
    if (hour >= 12) {
        ampm = 'PM'
    } else {
        ampm = 'AM'
    }

    now = mm + '/' + dd + '/' + yyyy + ' ' + hour + ':' + min + ' ' + ampm;

    return now
}

function signUp() { ///hardcoded data, prompt was very annoying
    let user = {
        username: 'Mike',
        email: 'Michael@hotmail.com',
        password: 'hello123',
        _id: randomIdGenerator(6),
        createdAt: getDate(),
        isLoggedIn: true
    }
    //check if user already exist
    if (isUserValid(user) === true) {
        users.push(user)
    } else {
        alert('Sorry, user already exists')
    }
    addRating(user)
}

function isUserValid(data) {
    for (let i = 0; i < users.length; i++) {
        if (data.username === users[i].username || data.email === users[i].email) {
            return false
        }
    }
    return true
}

// function isIdValid(id) {
//     for (let i = 0; i < users.length; i++) {
//         if (id === products[i]._id) {
//             return false
//         }
//     }
//     return true
// }

function addRating(user) {
    let product = prompt('Choose product')
    for (let i = 0; i < products.length; i++) {
        if (products[i]._id === product) {
            products[i].ratings.push({ userId: user._id, rate: +prompt('Add rating') })
        }
    }
}




signUp()

console.log(users);
console.log(products);