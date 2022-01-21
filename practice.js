  var firebaseConfig = {
  apiKey: "AIzaSyBWay0AZjLC7HcZdnb5liCJgTkfc5o73bM",
  authDomain: "practice-2baed.firebaseapp.com",
  databaseURL: "https://practice-2baed-default-rtdb.firebaseio.com",
  projectId: "practice-2baed",
  storageBucket: "practice-2baed.appspot.com",
  messagingSenderId: "356887279996",
  appId: "1:356887279996:web:86039a9048f2c8aaf7ccf9",
  measurementId: "G-5FFF8LF8F5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function addUser(){
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}