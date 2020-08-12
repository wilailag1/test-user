import { firebaseInit } from "./firebaseIns";

const firebaseAuth = firebaseInit.auth();

export function createUser(email, password) {
  return firebaseAuth.createUserWithEmailAndPassword(email, password);
}

export function signIn(email, password) {
  return firebaseAuth.signInWithEmailAndPassword(email, password);
}
export function signOut(email, password) {
    return firebaseAuth.signOut();
  }

