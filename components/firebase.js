import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDxxztD3B355pw5MIPM-k2avBPQ5HtNoW0",
    authDomain: 'react-native-login-bcf5b.firebaseapp.com',
    databaseURL: 'https://react-native-login-bcf5b.firebaseio.com',
    projectId: 'react-native-login-bcf5b',
    storageBucket: 'react-native-login-bcf5b.appspot.com',
    messagingSenderId: '203373244248',
    appId: '1:203373244248:android:49cd40567ba69a3d207f2d'
};
firebase.initializeApp(firebaseConfig);


export default firebase;