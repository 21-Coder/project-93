
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyBFh4zCjRHLdfp6xmqswL0mZFl3BIc9KiU",
      authDomain: "kwitter-ee132.firebaseapp.com",
      databaseURL: "https://kwitter-ee132-default-rtdb.firebaseio.com",
      projectId: "kwitter-ee132",
      storageBucket: "kwitter-ee132.appspot.com",
      messagingSenderId: "1036873197698",
      appId: "1:1036873197698:web:5665252617bb9043ea2c9b"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
