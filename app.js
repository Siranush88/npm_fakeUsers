import faker from "faker";
import _ from "lodash";

function createUser() {
    const usersArr = [];
    for (let i = 0; i <= 10; i++) {
        const name = faker.name.findName();
        const email = faker.internet.email();
        const phoneNumber = faker.phone.phoneNumber();

        usersArr.push({ name, email, phoneNumber });

    }
    return usersArr;
}

const users = createUser();
console.log(users);

const orderedUsers = _.orderBy(users, [user => user.name], ['asc']);
console.log(orderedUsers);


