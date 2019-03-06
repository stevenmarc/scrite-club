import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

var config = {
  apiKey: 'AIzaSyDB_XtpjTbc61R95KwaccadB8CF3ogVVNo',
  authDomain: 'react-slack-clone-3e10f.firebaseapp.com',
  databaseURL: 'https://react-slack-clone-3e10f.firebaseio.com',
  projectId: 'react-slack-clone-3e10f',
  storageBucket: 'react-slack-clone-3e10f.appspot.com',
  messagingSenderId: '346213458181'
};
firebase.initializeApp(config);

export default firebase;
