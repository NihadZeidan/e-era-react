import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const myFirebaseConfig = {
  apiKey: "AIzaSyAWREsWlHHIBRnGWnNP8fJ3HjCDAGIeciM",
  authDomain: "e-era-b90f7.firebaseapp.com",
  projectId: "e-era-b90f7",
  storageBucket: "e-era-b90f7.appspot.com",
  messagingSenderId: "292395991638",
  appId: "1:292395991638:web:3dae1e5667c4d75a9df1f7",
};

firebase.initializeApp(myFirebaseConfig);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

// I used this function only once to add the collection to firestore instead of doing that manually.
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  // We have to set our data in firestore as complete batch to avoid errors and to make sure that all of the data is sent not part of it.
  const batch = firestore.batch();

  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((snapShotDoc) => {
    const { title, items } = snapShotDoc.data();

    return {
      title,
      items,
      routeName: encodeURI(title.toLowerCase()),
      id: snapShotDoc.id,
    };
  });

  // convert array to map (OBJ)
  return transformedCollection.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection;
    return acc;
  }, {});
};
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
