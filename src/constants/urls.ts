const baseURLUsers = 'https://jsonplaceholder.typicode.com';

const baseURLCars = 'http://owu.linkpc.net/carsAPI/v1';

const users = '/users';
const cars = '/cars';
const urls = {
   users: {
       base: users,
       byId: (id:number):string=>`${users}/${id}`
   },
    cars: {
        base: cars,
        byId: (id:number):string=>`${cars}/${id}`
    }
}

export {
    baseURLUsers,
    baseURLCars,
    urls
}