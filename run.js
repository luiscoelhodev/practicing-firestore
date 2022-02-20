const firestore = require("./config");

// Practicing CRUD

const createUser = async (user) => { // CREATE
    await firestore.collection('users').doc().set(user);
    console.log(user);
    console.log(`${user.name} was created succesfully!`)
}
// createUser();

const createUserDefiningId = async (userId, user) => {
    await firestore.collection('users').doc(userId).set(user);
    console.log(user);
    console.log(`${user.name} was created succesfully!`)
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
    console.log('Data was updated succesfully!')
}

// updateUser()

const deleteUser = async (docId) => {
    await firestore.collection('users').doc(docId).delete();
    console.log('User deleted succesfully!')
}

// deleteUser()