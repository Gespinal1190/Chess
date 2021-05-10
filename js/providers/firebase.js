var firebaseConfig = {
    apiKey: "AIzaSyCWYUw3vlPc3bCgRAjFsn3OjCpAUEjZoDc",
    authDomain: "fdajedez.firebaseapp.com",
    databaseURL: "https://fdajedez-default-rtdb.firebaseio.com",
    projectId: "fdajedez",
    storageBucket: "fdajedez.appspot.com",
    messagingSenderId: "896697227879",
    appId: "1:896697227879:web:5d0a45839200d1fcc292c2",
    measurementId: "G-98F156ZG6K"
};

// Initialize Firebase

console.log({ firebase });

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const firebaseProvide = {
    signUp: (email, password, next) => {

        console.log({email, password})
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                console.log({userCredential})
                return next(null, userCredential); 
            })
            .catch((error) => {
                console.log("error register", {error})
                return next(error); 
            });
    },
    singIn: (email, password, next) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                return next(null, userCredential)
            })
            .catch((error) => {
                return next(error)
            });
    }
}