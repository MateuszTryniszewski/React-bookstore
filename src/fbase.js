import Rebase from 're-base';
import firebase from 'firebase';

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAmiK1okEez3cqohmBQd3PK2hafF7-377I",
    authDomain: "bookstore-9f160.firebaseapp.com",
    databaseURL: "https://bookstore-9f160.firebaseio.com",
    projectId: "bookstore-9f160",
    storageBucket: "bookstore-9f160.appspot.com",
    messagingSenderId: "1076122121352"
  });

let fbase = Rebase.createClass(firebaseApp.database());

export {fbase, firebaseApp};