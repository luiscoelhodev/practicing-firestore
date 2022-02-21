const firestore = require("./config");
const Employee = require('./employee').Employee

let employee1 = new Employee(133, 'Luis', 'luis@', 'http://', 'He is...', '123456');
let employee2 = new Employee(155, 'Giulia', 'giulia@', 'http://', 'She is...', '12345678')

console.log(employee1);
console.log(employee2);

// Practicing CRUD

const createUser = async (user) => { // CREATE
    await firestore.collection('users').doc().set(user);
    console.log(user);
    console.log(`${user.name} was created successfully!`)
}
// createUser(JSON.parse(JSON.stringify(employee1)));

const createUserDefiningId = async (userId, user) => {
    await firestore.collection('users').doc(userId).set(user);
    console.log(user);
    console.log(`${user.name} was created successfully!`)
}

// createUserDefiningId()

const getUsers = async () => { // READ
    const snapshot = await firestore.collection('users').get();
    snapshot.forEach(doc => {
        const docData = doc.data();
        console.log(docData);
    })
}
// getUsers();

const getOneUser = async (docId) => {
    const user = await firestore.collection('users').doc(docId).get();
    if (!user.exists) {
        console.log('No such document!')
    } else {
        console.log('Document data: ', user.data());
    }
}

// getOneUser();

const updateUser = async (docId, userDataToBeUpdated) => {
    await firestore.collection('users').doc(docId).update(userDataToBeUpdated);
    console.log(userDataToBeUpdated)
    console.log('Data was updated successfully!')
}

// updateUser()

const deleteUser = async (docId) => {
    await firestore.collection('users').doc(docId).delete();
    console.log('User deleted successfully!')
}

// deleteUser()