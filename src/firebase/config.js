import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA_c6JdWk8BjVt_N-8cEEqgho6O_NPnvwY",
    authDomain: "scranimals-test.firebaseapp.com",
    projectId: "scranimals-test",
    storageBucket: "scranimals-test.appspot.com",
    messagingSenderId: "927112075779",
    appId: "1:927112075779:web:ee1a03457704959f348c36"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };