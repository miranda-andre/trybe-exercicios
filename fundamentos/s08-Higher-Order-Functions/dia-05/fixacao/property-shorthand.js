//WITHOUT SHORTHAND
const newUser = (id, name, email) => {
    return {
        id: id,
        name: name,
        email: email,
    };
};

console.log(newUser(54, 'isabella', 'isabella@email.com')); // { id: 54, name: 'isabella', email: 'isabella@email.com' }

//WITH SHORTHAND
const newerUser = (id, name, email) => {
    return {
        id,
        name,
        email,
    };
};

console.log(newerUser(54, 'isabella', 'isabella@email.com')); // { id: 54, name: 'isabella', email: 'isabella@email.com' }

//FIXACAO
const getPosition = (latitude, longitude) => ({
    latitude: latitude,
    longitude: longitude,
});

console.log(getPosition(-19.8157, -43.9542));

const getNewPosition = (latitude, longitude) => {
    return {
        latitude,
        longitude,
    }
};

console.log(getNewPosition(-19.8157, -43.9542));