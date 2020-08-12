import { firebaseInit } from "./firebaseIns";
import { createUser } from "./authService";

var db = firebaseInit.firestore();
var table = db.collection("Users");

export function getUser(email) {
  return table.doc(email).get();
}

export function fetchUser(email) {
  let data = [];
  return new Promise((resolve, reject) => {
    table
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          data.push(doc.data());
        });
        resolve(data);
      })
      .catch(error => {
        alert(error);
      });
  });
}

export function updateUser(email, data) {
  let userRef = table.doc(email);

  // Set the "capital" field of the city 'DC'
  return userRef
    .update({
      ...data
    })
    .then(function() {
      console.log("Document successfully updated!");
    })
    .catch(function(error) {
      // The document probably doesn't exist.
      console.error("Error updating document: ", error);
    });
}

export async function createUserData(userData) {
  //   let email = userData.email;
  //   let password = userData.password;
  const {
    email,
    password,
    firstName,
    lastName,
    age,
    address,
    phone
  } = userData;
  debugger;
  try {
    let res = await createUser(email, password);
    debugger;
    let res2 = await table.doc(email).set({
      email,
      firstName,
      lastName,
      age,
      address,
      phone
    });
    return "create success";
  } catch (error) {
    // alert(error);
    throw error;
  }
}
export function removeUser(email) {
  let userRef = table.doc(email);

  // Set the "capital" field of the city 'DC'
  return userRef.delete();
}
