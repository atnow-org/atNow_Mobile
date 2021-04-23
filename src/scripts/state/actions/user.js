import firestore from '@react-native-firebase/firestore';
import ActionTypes from './actionTypes';
import { FirestoreCollections } from '../../../assets/constants/firestoreCollections';

export const createNewUser = async ({
  firstname,
  lastname,
  userEmail,
  profilePic,
  uid,
}, dispatch) => {
  const newUser = {
    firstname,
    lastname,
    userEmail,
    profilePic,
  };
  // console.log(uid);
  try {
    await firestore().collection(FirestoreCollections.USERS).doc(uid).set(newUser);
    // dispatch({ type: ActionTypes.NEW_USER, payload: newUser });
    // console.log(docRef.documentID);
    // return docRef.id;
  } catch {
    console.log('Error creating new user doc');
  }

  return null;
};

export const getUser = (uID, dispatch) => {
  console.log('here');
  return (
    firestore().collection(FirestoreCollections.USERS).doc(uID).get()
      .then((user) => {
        console.log('here i am');
        if (user.exists) {
          console.log(user.data());
          dispatch({ type: ActionTypes.GET_USER, payload: user.data() });
          // dispatch the users info here
        }
        return user.exists ? { ...user.data() } : {};
      })
      .catch((e) => {
        console.log('Unable to get user');
      })
  );
};

export const getUserData = () => {
  console.log('null function for now');
};
