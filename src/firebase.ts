import * as firebase from "firebase/app";
import "firebase/firestore";

export { firebase };
export let firestore: firebase.firestore.Firestore;

export async function getIdList(collectionRef: firebase.firestore.CollectionReference<firebase.firestore.DocumentData>) {
  let ret: string[] = [];
  (await collectionRef.get()).forEach((documentSnapshot: firebase.firestore.DocumentSnapshot) => {
    ret.push(documentSnapshot.id);
  });

  return ret;
}

export default function firebaseInit() {
  if (!firebase.apps.length) {
    firebase.initializeApp({
      apiKey: "AIzaSyBezSXPBJnfO3LteDK47G8AO1anNU6_EQk",
      authDomain: "hamerinask.firebaseapp.com",
      databaseURL: "https://hamerinask.firebaseio.com",
      projectId: "hamerinask",
      storageBucket: "hamerinask.appspot.com",
      messagingSenderId: "41818205126",
      appId: "1:41818205126:web:ec1d6fdfb44a158ef320c7",
      measurementId: "G-7JD8YMVR6R"
    });
  }

  firestore = firebase.firestore();
}
