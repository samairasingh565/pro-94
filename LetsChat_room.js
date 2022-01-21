
const firebaseConfig = {
    apiKey: "AIzaSyApTYf8jt4LXiPZQGJUgp4sNqrjClXv6fM",
    authDomain: "project-94-695d2.firebaseapp.com",
    databaseURL: "https://project-94-695d2-default-rtdb.firebaseio.com",
    projectId: "project-94-695d2",
    storageBucket: "project-94-695d2.appspot.com",
    messagingSenderId: "115470200430",
    appId: "1:115470200430:web:afb9bbd3c9aca305d5c07f"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function add_user_name() {
  var user_Name = document.getElementById("room_name").value;

  firebase.database().ref("/sample").child(user_Name).update({
      purpose: "to add the user",
      
  });
}


function addUser (){
    user_name = document.getElementById("user_name").value;

    localStorage.setItem("user_name" , user_name);

    window.location = "LetsChat_room.html";
}
